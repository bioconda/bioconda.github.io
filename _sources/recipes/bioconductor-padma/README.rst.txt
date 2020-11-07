:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-padma'
.. highlight: bash

bioconductor-padma
==================

.. conda:recipe:: bioconductor-padma
   :replaces_section_title:
   :noindex:

   Individualized Multi\-Omic Pathway Deviation Scores Using Multiple Factor Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/padma.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-padma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padma/meta.yaml>`_

   Use multiple factor analysis to calculate individualized pathway\-centric scores of deviation with respect to the sampled population based on multi\-omic assays \(e.g.\, RNA\-seq\, copy number alterations\, methylation\, etc\). Graphical and numerical outputs are provided to identify highly aberrant individuals for a particular pathway of interest\, as well as the gene and omics drivers of aberrant multi\-omic profiles.


.. conda:package:: bioconductor-padma

   |downloads_bioconductor-padma| |docker_bioconductor-padma|

   :versions:
      
      

      ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-factominer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-padma

   and update with::

      conda update bioconductor-padma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-padma:<tag>

   (see `bioconductor-padma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-padma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-padma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-padma
   :alt:   (downloads)
.. |docker_bioconductor-padma| image:: https://quay.io/repository/biocontainers/bioconductor-padma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-padma
.. _`bioconductor-padma/tags`: https://quay.io/repository/biocontainers/bioconductor-padma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-padma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-padma/README.html