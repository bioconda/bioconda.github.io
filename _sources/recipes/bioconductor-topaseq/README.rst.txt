.. title:: Package Recipe 'bioconductor-topaseq'
.. highlight: bash


bioconductor-topaseq
====================

.. conda:recipe:: bioconductor-topaseq
   :replaces_section_title:

   Implementation of methods for topology\-based pathway analysis of RNA\-seq data. This includes Topological Analysis of Pathway Phenotype Association \(TAPPA\; Gao and Wang\, 2007\)\, PathWay Enrichment Analysis \(PWEA\; Hung et al.\, 2010\)\, and the Pathway Regulation Score \(PRS\; Ibrahim et al.\, 2012\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ToPASeq.html
   :license: AGPL-3
   :recipe: /`bioconductor-topaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topaseq/meta.yaml>`_

   


.. conda:package:: bioconductor-topaseq

   |downloads_bioconductor-topaseq| |docker_bioconductor-topaseq|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-graphite` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-topaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topaseq

   and update with::

      conda update bioconductor-topaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-topaseq


.. |required_by_bioconductor-topaseq| conda:required_by:: bioconductor-topaseq
.. |downloads_bioconductor-topaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-topaseq| image:: https://quay.io/repository/biocontainers/bioconductor-topaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topaseq/README.html

