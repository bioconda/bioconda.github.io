:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsubread'
.. highlight: bash

bioconductor-rsubread
=====================

.. conda:recipe:: bioconductor-rsubread
   :replaces_section_title:
   :noindex:

   Mapping\, quantification and variant analysis of sequencing data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rsubread.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-rsubread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread/meta.yaml>`_
   :links: biotools: :biotools:`rsubread`

   Alignment\, quantification and analysis of RNA sequencing data \(including both bulk RNA\-seq and scRNA\-seq\) and DNA sequenicng data \(including ATAC\-seq\, ChIP\-seq\, WGS\, WES etc\). Includes functionality for read mapping\, read counting\, SNP calling\, structural variant detection and gene fusion discovery. Can be applied to all major sequencing techologies and to both short and long sequence reads.


.. conda:package:: bioconductor-rsubread

   |downloads_bioconductor-rsubread| |docker_bioconductor-rsubread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.16.1-0</code>,  <code>2.16.0-0</code>,  <code>2.14.2-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.8.2-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.2-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.4.3-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-0``,  ``1.34.6-0``,  ``1.34.4-0``,  ``1.34.0-0``,  ``1.32.4-0``,  ``1.32.2-0``,  ``1.30.9-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.25.2-0``,  ``1.23.0-0``,  ``1.22.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-rsubread

   and update with::

      mamba update bioconductor-rsubread

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsubread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsubread:<tag>

   (see `bioconductor-rsubread/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsubread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsubread.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsubread
   :alt:   (downloads)
.. |docker_bioconductor-rsubread| image:: https://quay.io/repository/biocontainers/bioconductor-rsubread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsubread
.. _`bioconductor-rsubread/tags`: https://quay.io/repository/biocontainers/bioconductor-rsubread?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsubread";
        var versions = ["2.20.0","2.16.1","2.16.0","2.14.2","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsubread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsubread/README.html