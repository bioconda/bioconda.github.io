.. title:: Package Recipe 'bioconductor-peca'
.. highlight: bash


bioconductor-peca
=================

.. conda:recipe:: bioconductor-peca
   :replaces_section_title:

   Calculates Probe\-level Expression Change Averages \(PECA\) to identify differential expression in Affymetrix gene expression microarray studies or in proteomic studies using peptide\-level mesurements respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PECA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-peca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca/meta.yaml>`_
   :links: biotools: :biotools:`peca`, doi: :doi:`10.1007/978-1-4939-6518-2_11`

   


.. conda:package:: bioconductor-peca

   |downloads_bioconductor-peca| |docker_bioconductor-peca|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-rots` >=1.10.0,<1.11.0 :conda:package:`r-aroma.affymetrix`  :conda:package:`r-aroma.core`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-peca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peca

   and update with::

      conda update bioconductor-peca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-peca


.. |required_by_bioconductor-peca| conda:required_by:: bioconductor-peca
.. |downloads_bioconductor-peca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peca.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-peca| image:: https://quay.io/repository/biocontainers/bioconductor-peca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peca/README.html

