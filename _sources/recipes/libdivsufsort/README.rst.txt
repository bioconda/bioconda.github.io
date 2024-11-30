:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libdivsufsort'
.. highlight: bash

libdivsufsort
=============

.. conda:recipe:: libdivsufsort
   :replaces_section_title:
   :noindex:

   A lightweight suffix\-sorting library

   :homepage: https://github.com/y-256/libdivsufsort
   :license: MIT
   :recipe: /`libdivsufsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdivsufsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdivsufsort/meta.yaml>`_

   


.. conda:package:: libdivsufsort

   |downloads_libdivsufsort| |docker_libdivsufsort|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-9</code>,  <code>2.0.2-8</code>,  <code>2.0.2-7</code>,  <code>2.0.2-6</code>,  <code>2.0.2-5</code>,  <code>2.0.2-4</code>,  <code>2.0.2-3</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  </span></summary>
      

      ``2.0.2-9``,  ``2.0.2-8``,  ``2.0.2-7``,  ``2.0.2-6``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install libdivsufsort

   and update with::

      mamba update libdivsufsort

  To create a new environment, run::

      mamba create --name myenvname libdivsufsort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libdivsufsort:<tag>

   (see `libdivsufsort/tags`_ for valid values for ``<tag>``)


.. |downloads_libdivsufsort| image:: https://img.shields.io/conda/dn/bioconda/libdivsufsort.svg?style=flat
   :target: https://anaconda.org/bioconda/libdivsufsort
   :alt:   (downloads)
.. |docker_libdivsufsort| image:: https://quay.io/repository/biocontainers/libdivsufsort/status
   :target: https://quay.io/repository/biocontainers/libdivsufsort
.. _`libdivsufsort/tags`: https://quay.io/repository/biocontainers/libdivsufsort?tab=tags


.. raw:: html

    <script>
        var package = "libdivsufsort";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libdivsufsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libdivsufsort/README.html