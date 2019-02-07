.. title:: Package Recipe 'bioconductor-attract'
.. highlight: bash


bioconductor-attract
====================

.. conda:recipe:: bioconductor-attract
   :replaces_section_title:

   This package contains the functions to find the gene expression modules that represent the drivers of Kauffman\'s attractor landscape. The modules are the core attractor pathways that discriminate between different cell types of groups of interest. Each pathway has a set of synexpression groups\, which show transcriptionally\-coordinated changes in gene expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/attract.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-attract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract/meta.yaml>`_

   


.. conda:package:: bioconductor-attract

   |downloads_bioconductor-attract| |docker_bioconductor-attract|

   :versions: 1.34.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gostats` >=2.48.0,<2.49.0 :conda:package:`bioconductor-keggrest` >=1.22.0,<1.23.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-reactome.db` >=1.66.0,<1.67.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  

   :required~by: |required_by_bioconductor-attract|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-attract

   and update with::

      conda update bioconductor-attract

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-attract


.. |required_by_bioconductor-attract| conda:required_by:: bioconductor-attract
.. |downloads_bioconductor-attract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-attract.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-attract| image:: https://quay.io/repository/biocontainers/bioconductor-attract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-attract







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-attract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-attract/README.html

