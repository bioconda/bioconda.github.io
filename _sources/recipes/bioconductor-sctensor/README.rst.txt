:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctensor'
.. highlight: bash

bioconductor-sctensor
=====================

.. conda:recipe:: bioconductor-sctensor
   :replaces_section_title:
   :noindex:

   Detection of cell\-cell interaction from single\-cell RNA\-seq dataset by tensor decomposition

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/scTensor.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctensor/meta.yaml>`_

   The algorithm is based on the non\-negative tucker decomposition \(NTD2\) of nnTensor.


.. conda:package:: bioconductor-sctensor

   |downloads_bioconductor-sctensor| |docker_bioconductor-sctensor|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.12-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biocstyle: ``>=2.22.0,<2.23.0``
   :depends bioconductor-category: ``>=2.60.0,<2.61.0``
   :depends bioconductor-dose: ``>=3.20.0,<3.21.0``
   :depends bioconductor-gostats: ``>=2.60.0,<2.61.0``
   :depends bioconductor-meshdbi: ``>=1.30.0,<1.31.0``
   :depends bioconductor-meshr: ``>=2.0.0,<2.1.0``
   :depends bioconductor-reactome.db: ``>=1.77.0,<1.78.0``
   :depends bioconductor-reactomepa: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-schex: ``>=1.8.0,<1.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-cctensor: ``>=1.0.2``
   :depends r-checkmate: 
   :depends r-crayon: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-nntensor: ``>=1.1.5``
   :depends r-outliers: 
   :depends r-plotly: 
   :depends r-plotrix: 
   :depends r-rmarkdown: 
   :depends r-rsqlite: 
   :depends r-rtensor: ``>=1.4.8``
   :depends r-tagcloud: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sctensor

   and update with::

      conda update bioconductor-sctensor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sctensor:<tag>

   (see `bioconductor-sctensor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sctensor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctensor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctensor
   :alt:   (downloads)
.. |docker_bioconductor-sctensor| image:: https://quay.io/repository/biocontainers/bioconductor-sctensor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctensor
.. _`bioconductor-sctensor/tags`: https://quay.io/repository/biocontainers/bioconductor-sctensor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sctensor";
        var versions = ["2.4.0","2.2.0","2.0.0","2.0.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctensor/README.html