:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgsepd'
.. highlight: bash

bioconductor-rgsepd
===================

.. conda:recipe:: bioconductor-rgsepd
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment \/ Projection Displays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rgsepd.html
   :license: GPL-3
   :recipe: /`bioconductor-rgsepd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsepd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsepd/meta.yaml>`_
   :links: biotools: :biotools:`rgsepd`, doi: :doi:`10.1038/nmeth.3252`

   R\/GSEPD is a bioinformatics package for R to help disambiguate transcriptome samples \(a matrix of RNA\-Seq counts at transcript IDs\) by automating differential expression \(with DESeq2\)\, then gene set enrichment \(with GOSeq\)\, and finally a N\-dimensional projection to quantify in which ways each sample is like either treatment group.


.. conda:package:: bioconductor-rgsepd

   |downloads_bioconductor-rgsepd| |docker_bioconductor-rgsepd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-goseq: ``>=1.58.0,<1.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rgsepd

   and update with::

      mamba update bioconductor-rgsepd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgsepd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgsepd:<tag>

   (see `bioconductor-rgsepd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgsepd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgsepd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgsepd
   :alt:   (downloads)
.. |docker_bioconductor-rgsepd| image:: https://quay.io/repository/biocontainers/bioconductor-rgsepd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgsepd
.. _`bioconductor-rgsepd/tags`: https://quay.io/repository/biocontainers/bioconductor-rgsepd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgsepd";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html