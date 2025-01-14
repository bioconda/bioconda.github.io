:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmlr'
.. highlight: bash

ngmlr
=====

.. conda:recipe:: ngmlr
   :replaces_section_title:
   :noindex:

   ngmlr is a long\-read mapper designed to align PacBio or Oxford Nanopore reads to a reference genome and optimized for structural variation detection

   :homepage: https://github.com/philres/ngmlr
   :license: MIT
   :recipe: /`ngmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr/meta.yaml>`_

   


.. conda:package:: ngmlr

   |downloads_ngmlr| |docker_ngmlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.7-9</code>,  <code>0.2.7-8</code>,  <code>0.2.7-7</code>,  <code>0.2.7-6</code>,  <code>0.2.7-5</code>,  <code>0.2.7-4</code>,  <code>0.2.7-3</code>,  <code>0.2.7-2</code>,  <code>0.2.7-1</code>,  </span></summary>
      

      ``0.2.7-9``,  ``0.2.7-8``,  ``0.2.7-7``,  ``0.2.7-6``,  ``0.2.7-5``,  ``0.2.7-4``,  ``0.2.7-3``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ngmlr

   and update with::

      mamba update ngmlr

  To create a new environment, run::

      mamba create --name myenvname ngmlr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngmlr:<tag>

   (see `ngmlr/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmlr| image:: https://img.shields.io/conda/dn/bioconda/ngmlr.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmlr
   :alt:   (downloads)
.. |docker_ngmlr| image:: https://quay.io/repository/biocontainers/ngmlr/status
   :target: https://quay.io/repository/biocontainers/ngmlr
.. _`ngmlr/tags`: https://quay.io/repository/biocontainers/ngmlr?tab=tags


.. raw:: html

    <script>
        var package = "ngmlr";
        var versions = ["0.2.7","0.2.7","0.2.7","0.2.7","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmlr/README.html