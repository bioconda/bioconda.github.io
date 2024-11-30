:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xgr'
.. highlight: bash

r-xgr
=====

.. conda:recipe:: r-xgr
   :replaces_section_title:
   :noindex:

   The central goal of XGR by Fang et al. \(2016\) \<doi\:10.1186\/s13073\-016\-0384\-y\> is to provide a data interpretation system necessary to do \"big data\" science. It is designed to make a user\-defined gene or SNP list \(or genomic regions\) more interpretable by comprehensively utilising ontology annotations and interaction networks to reveal relationships and enhance opportunities for biological discovery. XGR is unique in supporting a broad range of ontologies \(including knowledge of biological and molecular functions\, pathways\, diseases and phenotypes \- in both human and mouse\) and different types of networks \(including functional\, physical and pathway interactions\). There are two core functionalities of XGR. The first is to provide basic infrastructures for easy access to built\-in ontologies and networks. The second is to support data interpretations via 1\) enrichment analysis using either built\-in or custom ontologies\, 2\) similarity analysis for calculating semantic similarity between genes \(or SNPs\) based on their ontology annotation profiles\, 3\) network analysis for identification of gene networks given a query list of \(significant\) genes\, SNPs or genomic regions\, and 4\) annotation analysis for interpreting genomic regions using co\-localised functional genomic annotations \(such as open chromatin\, epigenetic marks\, TF binding sites and genomic segments\) and using nearby gene annotations \(by ontologies\). Together with its web app\, XGR aims to provide a user\-friendly tool for exploring genomic relations at the gene\, SNP and genomic region level.

   :homepage: http://XGR.r-forge.r-project.org, http://galahad.well.ox.ac.uk/XGR
   :license: GPL2 / GPL-2
   :recipe: /`r-xgr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xgr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xgr/meta.yaml>`_

   


.. conda:package:: r-xgr

   |downloads_r-xgr| |docker_r-xgr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-5</code>,  <code>1.1.7-4</code>,  <code>1.1.7-3</code>,  <code>1.1.7-2</code>,  <code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  </span></summary>
      

      ``1.1.7-5``,  ``1.1.7-4``,  ``1.1.7-3``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-suprahex: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dnet: 
   :depends r-dplyr: 
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcircos: 
   :depends r-tidyr: 
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

      mamba install r-xgr

   and update with::

      mamba update r-xgr

  To create a new environment, run::

      mamba create --name myenvname r-xgr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-xgr:<tag>

   (see `r-xgr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xgr| image:: https://img.shields.io/conda/dn/bioconda/r-xgr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xgr
   :alt:   (downloads)
.. |docker_r-xgr| image:: https://quay.io/repository/biocontainers/r-xgr/status
   :target: https://quay.io/repository/biocontainers/r-xgr
.. _`r-xgr/tags`: https://quay.io/repository/biocontainers/r-xgr?tab=tags


.. raw:: html

    <script>
        var package = "r-xgr";
        var versions = ["1.1.7","1.1.7","1.1.7","1.1.7","1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xgr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xgr/README.html