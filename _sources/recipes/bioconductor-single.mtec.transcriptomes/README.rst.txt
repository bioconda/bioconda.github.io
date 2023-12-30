:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-single.mtec.transcriptomes'
.. highlight: bash

bioconductor-single.mtec.transcriptomes
=======================================

.. conda:recipe:: bioconductor-single.mtec.transcriptomes
   :replaces_section_title:
   :noindex:

   Single Cell Transcriptome Data and Analysis of Mouse mTEC cells

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/Single.mTEC.Transcriptomes.html
   :license: LGPL
   :recipe: /`bioconductor-single.mtec.transcriptomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes/meta.yaml>`_

   This data package contains the code used to analyse the single\-cell RNA\-seq and the bulk ATAC\-seq data from the manuscript titled\: Single\-cell transcriptome analysis reveals coordinated ectopic\-gene expression patterns in medullary thymic epithelial cells. This paper was published in Nature Immunology 16\,933\-941\(2015\). The data objects provided in this package has been pre\-processed\: the raw data files can be downloaded from ArrayExpress under the accession identifiers E\-MTAB\-3346 and E\-MTAB\-3624. The vignette of this data package provides a documented and reproducible workflow that includes the code that was used to generate each statistic and figure from the manuscript.


.. conda:package:: bioconductor-single.mtec.transcriptomes

   |downloads_bioconductor-single.mtec.transcriptomes| |docker_bioconductor-single.mtec.transcriptomes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-single.mtec.transcriptomes

   and update with::

      mamba update bioconductor-single.mtec.transcriptomes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-single.mtec.transcriptomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-single.mtec.transcriptomes:<tag>

   (see `bioconductor-single.mtec.transcriptomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-single.mtec.transcriptomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-single.mtec.transcriptomes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-single.mtec.transcriptomes
   :alt:   (downloads)
.. |docker_bioconductor-single.mtec.transcriptomes| image:: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes
.. _`bioconductor-single.mtec.transcriptomes/tags`: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-single.mtec.transcriptomes";
        var versions = ["1.30.0","1.28.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html