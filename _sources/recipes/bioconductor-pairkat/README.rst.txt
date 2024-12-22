:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pairkat'
.. highlight: bash

bioconductor-pairkat
====================

.. conda:recipe:: bioconductor-pairkat
   :replaces_section_title:
   :noindex:

   PaIRKAT

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pairkat.html
   :license: GPL-3
   :recipe: /`bioconductor-pairkat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairkat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairkat/meta.yaml>`_

   PaIRKAT is model framework for assessing statistical relationships between networks of metabolites \(pathways\) and an outcome of interest \(phenotype\). PaIRKAT queries the KEGG database to determine interactions between metabolites from which network connectivity is constructed. This model framework improves testing power on high dimensional data by including graph topography in the kernel machine regression setting. Studies on high dimensional data can struggle to include the complex relationships between variables. The semi\-parametric kernel machine regression model is a powerful tool for capturing these types of relationships. They provide a framework for testing for relationships between outcomes of interest and high dimensional data such as metabolomic\, genomic\, or proteomic pathways. PaIRKAT uses known biological connections between high dimensional variables by representing them as edges of ‘graphs’ or ‘networks.’ It is common for nodes \(e.g. metabolites\) to be disconnected from all others within the graph\, which leads to meaningful decreases in testing power whether or not the graph information is included. We include a graph regularization or ‘smoothing’ approach for managing this issue.


.. conda:package:: bioconductor-pairkat

   |downloads_bioconductor-pairkat| |docker_bioconductor-pairkat|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-compquadform: 
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-tibble: 
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

      mamba install bioconductor-pairkat

   and update with::

      mamba update bioconductor-pairkat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pairkat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pairkat:<tag>

   (see `bioconductor-pairkat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pairkat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pairkat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pairkat
   :alt:   (downloads)
.. |docker_bioconductor-pairkat| image:: https://quay.io/repository/biocontainers/bioconductor-pairkat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pairkat
.. _`bioconductor-pairkat/tags`: https://quay.io/repository/biocontainers/bioconductor-pairkat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pairkat";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pairkat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pairkat/README.html