:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcalm'
.. highlight: bash

bcalm
=====

.. conda:recipe:: bcalm
   :replaces_section_title:
   :noindex:

   BCALM 2 is a bioinformatics tool for constructing the compacted de Bruijn graph from sequencing data.

   :homepage: https://github.com/GATB/bcalm
   :license: MIT License
   :recipe: /`bcalm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcalm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcalm/meta.yaml>`_

   


.. conda:package:: bcalm

   |downloads_bcalm| |docker_bcalm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.3-7</code>,  <code>2.2.3-6</code>,  <code>2.2.3-5</code>,  <code>2.2.3-4</code>,  <code>2.2.3-3</code>,  <code>2.2.3-2</code>,  <code>2.2.3-1</code>,  <code>2.2.3-0</code>,  <code>2.2.2-1</code>,  </span></summary>
      

      ``2.2.3-7``,  ``2.2.3-6``,  ``2.2.3-5``,  ``2.2.3-4``,  ``2.2.3-3``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-0``

      
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

      mamba install bcalm

   and update with::

      mamba update bcalm

  To create a new environment, run::

      mamba create --name myenvname bcalm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcalm:<tag>

   (see `bcalm/tags`_ for valid values for ``<tag>``)


.. |downloads_bcalm| image:: https://img.shields.io/conda/dn/bioconda/bcalm.svg?style=flat
   :target: https://anaconda.org/bioconda/bcalm
   :alt:   (downloads)
.. |docker_bcalm| image:: https://quay.io/repository/biocontainers/bcalm/status
   :target: https://quay.io/repository/biocontainers/bcalm
.. _`bcalm/tags`: https://quay.io/repository/biocontainers/bcalm?tab=tags


.. raw:: html

    <script>
        var package = "bcalm";
        var versions = ["2.2.3","2.2.3","2.2.3","2.2.3","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcalm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcalm/README.html