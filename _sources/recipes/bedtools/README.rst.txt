:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedtools'
.. highlight: bash

bedtools
========

.. conda:recipe:: bedtools
   :replaces_section_title:
   :noindex:

   A powerful toolset for genome arithmetic

   :homepage: http://bedtools.readthedocs.org/
   :license: MIT
   :recipe: /`bedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools/meta.yaml>`_
   :links: biotools: :biotools:`bedtools`, usegalaxy-eu: :usegalaxy-eu:`bedtools_intersectbed`, debian: :debian:`bedtools`

   


.. conda:package:: bedtools

   |downloads_bedtools| |docker_bedtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.31.1-2</code>,  <code>2.31.1-1</code>,  <code>2.31.1-0</code>,  <code>2.31.0-3</code>,  <code>2.31.0-2</code>,  <code>2.31.0-1</code>,  <code>2.31.0-0</code>,  <code>2.30.0-3</code>,  <code>2.30.0-2</code>,  </span></summary>
      

      ``2.31.1-2``,  ``2.31.1-1``,  ``2.31.1-0``,  ``2.31.0-3``,  ``2.31.0-2``,  ``2.31.0-1``,  ``2.31.0-0``,  ``2.30.0-3``,  ``2.30.0-2``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.29.2-0``,  ``2.29.1-1``,  ``2.29.1-0``,  ``2.29.0-3``,  ``2.29.0-2``,  ``2.29.0-1``,  ``2.29.0-0``,  ``2.28.0-0``,  ``2.27.1-8``,  ``2.27.1-7``,  ``2.27.1-6``,  ``2.27.1-5``,  ``2.27.1-4``,  ``2.27.1-3``,  ``2.27.1-2``,  ``2.27.1-1``,  ``2.27.1-0``,  ``2.27.0-4``,  ``2.27.0-3``,  ``2.27.0-2``,  ``2.27.0-1``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.26.0gx-4``,  ``2.26.0gx-3``,  ``2.26.0gx-2``,  ``2.26.0gx-1``,  ``2.26.0gx-0``,  ``2.25.0-5``,  ``2.25.0-4``,  ``2.25.0-3``,  ``2.25.0-2``,  ``2.25.0-1``,  ``2.25.0-0``,  ``2.24.0-0``,  ``2.23.0-7``,  ``2.23.0-6``,  ``2.23.0-5``,  ``2.23.0-4``,  ``2.23.0-3``,  ``2.23.0-2``,  ``2.23.0-1``,  ``2.23.0-0``,  ``2.22-7``,  ``2.22-6``,  ``2.22-5``,  ``2.22-4``,  ``2.22-3``,  ``2.22-2``,  ``2.22-1``,  ``2.22-0``,  ``2.20.1-2``,  ``2.20.1-1``,  ``2.20.1-0``,  ``2.19.1-2``,  ``2.19.1-1``,  ``2.19.1-0``,  ``2.17.0-0``,  ``2.16.2-1``,  ``2.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bedtools

   and update with::

      mamba update bedtools

  To create a new environment, run::

      mamba create --name myenvname bedtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bedtools:<tag>

   (see `bedtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bedtools| image:: https://img.shields.io/conda/dn/bioconda/bedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bedtools
   :alt:   (downloads)
.. |docker_bedtools| image:: https://quay.io/repository/biocontainers/bedtools/status
   :target: https://quay.io/repository/biocontainers/bedtools
.. _`bedtools/tags`: https://quay.io/repository/biocontainers/bedtools?tab=tags


.. raw:: html

    <script>
        var package = "bedtools";
        var versions = ["2.31.1","2.31.1","2.31.1","2.31.0","2.31.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtools/README.html