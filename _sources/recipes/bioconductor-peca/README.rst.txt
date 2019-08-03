:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peca'
.. highlight: bash

bioconductor-peca
=================

.. conda:recipe:: bioconductor-peca
   :replaces_section_title:

   Calculates Probe\-level Expression Change Averages \(PECA\) to identify differential expression in Affymetrix gene expression microarray studies or in proteomic studies using peptide\-level mesurements respectively.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PECA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-peca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca/meta.yaml>`_
   :links: biotools: :biotools:`peca`, doi: :doi:`10.1007/978-1-4939-6518-2_11`

   


.. conda:package:: bioconductor-peca

   |downloads_bioconductor-peca| |docker_bioconductor-peca|

   :versions: 1.20.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-affy: >=1.62.0,<1.63.0
   :depends bioconductor-genefilter: >=1.66.0,<1.67.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-preprocesscore: >=1.46.0,<1.47.0
   :depends bioconductor-rots: >=1.12.0,<1.13.0
   :depends r-aroma.affymetrix: 
   :depends r-aroma.core: 
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peca

   and update with::

      conda update bioconductor-peca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peca:<tag>

   (see `bioconductor-peca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peca
   :alt:   (downloads)
.. |docker_bioconductor-peca| image:: https://quay.io/repository/biocontainers/bioconductor-peca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peca
.. _`bioconductor-peca/tags`: https://quay.io/repository/biocontainers/bioconductor-peca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peca/README.html