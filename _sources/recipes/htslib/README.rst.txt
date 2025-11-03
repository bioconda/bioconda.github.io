:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htslib'
.. highlight: bash

htslib
======

.. conda:recipe:: htslib
   :replaces_section_title:
   :noindex:

   C library for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :documentation: http://www.htslib.org/
   
   :license: MIT / MIT
   :recipe: /`htslib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib/meta.yaml>`_
   :links: biotools: :biotools:`HTSlib`

   


.. conda:package:: htslib

   |downloads_htslib| |docker_htslib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.22-0</code>,  <code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-2</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19.1-2</code>,  <code>1.19.1-1</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.22-0``,  ``1.21-1``,  ``1.21-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.19.1-2``,  ``1.19.1-1``,  ``1.19.1-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-2``,  ``1.17-1``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-0``,  ``1.14-2``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.2-0``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.26.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
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

      mamba install htslib

   and update with::

      mamba update htslib

  To create a new environment, run::

      mamba create --name myenvname htslib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/htslib:<tag>

   (see `htslib/tags`_ for valid values for ``<tag>``)


.. |downloads_htslib| image:: https://img.shields.io/conda/dn/bioconda/htslib.svg?style=flat
   :target: https://anaconda.org/bioconda/htslib
   :alt:   (downloads)
.. |docker_htslib| image:: https://quay.io/repository/biocontainers/htslib/status
   :target: https://quay.io/repository/biocontainers/htslib
.. _`htslib/tags`: https://quay.io/repository/biocontainers/htslib?tab=tags


.. raw:: html

    <script>
        var package = "htslib";
        var versions = ["1.22.1","1.22","1.21","1.21","1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htslib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htslib/README.html