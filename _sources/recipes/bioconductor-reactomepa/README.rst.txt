.. title:: Package Recipe 'bioconductor-reactomepa'
.. highlight: bash


bioconductor-reactomepa
=======================

.. conda:recipe:: bioconductor-reactomepa
   :replaces_section_title:

   This package provides functions for pathway analysis based on REACTOME pathway database. It implements enrichment analysis\, gene set enrichment analysis and several functions for visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ReactomePA.html
   :license: GPL-2
   :recipe: /`bioconductor-reactomepa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomepa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomepa/meta.yaml>`_
   :links: biotools: :biotools:`reactomepa`

   


.. conda:package:: bioconductor-reactomepa

   |downloads_bioconductor-reactomepa| |docker_bioconductor-reactomepa|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-enrichplot` >=1.2.0,<1.3.0 :conda:package:`bioconductor-graphite` >=1.28.0,<1.29.0 :conda:package:`bioconductor-reactome.db` >=1.66.0,<1.67.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggraph`  :conda:package:`r-igraph`  

   :required~by: |required_by_bioconductor-reactomepa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomepa

   and update with::

      conda update bioconductor-reactomepa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-reactomepa


.. |required_by_bioconductor-reactomepa| conda:required_by:: bioconductor-reactomepa
.. |downloads_bioconductor-reactomepa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomepa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-reactomepa| image:: https://quay.io/repository/biocontainers/bioconductor-reactomepa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomepa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomepa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomepa/README.html

