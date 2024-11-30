:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwomics'
.. highlight: bash

bioconductor-pwomics
====================

.. conda:recipe:: bioconductor-pwomics
   :replaces_section_title:
   :noindex:

   Pathway\-based data integration of omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pwOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pwomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics/meta.yaml>`_
   :links: biotools: :biotools:`pwomics`, doi: :doi:`10.1093/bioinformatics/btv323`

   pwOmics performs pathway\-based level\-specific data comparison of matching omics data sets based on pre\-analysed user\-specified lists of differential genes\/transcripts and phosphoproteins. A separate downstream analysis of phosphoproteomic data including pathway identification\, transcription factor identification and target gene identification is opposed to the upstream analysis starting with gene or transcript information as basis for identification of upstream transcription factors and potential proteomic regulators. The cross\-platform comparative analysis allows for comprehensive analysis of single time point experiments and time\-series experiments by providing static and dynamic analysis tools for data integration. In addition\, it provides functions to identify individual signaling axes based on data integration.


.. conda:package:: bioconductor-pwomics

   |downloads_bioconductor-pwomics| |docker_bioconductor-pwomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rbiopaxparser: ``>=2.42.0,<2.43.0``
   :depends bioconductor-stringdb: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-gplots: 
   :depends r-igraph: 
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

      mamba install bioconductor-pwomics

   and update with::

      mamba update bioconductor-pwomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pwomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwomics:<tag>

   (see `bioconductor-pwomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwomics
   :alt:   (downloads)
.. |docker_bioconductor-pwomics| image:: https://quay.io/repository/biocontainers/bioconductor-pwomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwomics
.. _`bioconductor-pwomics/tags`: https://quay.io/repository/biocontainers/bioconductor-pwomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwomics";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwomics/README.html