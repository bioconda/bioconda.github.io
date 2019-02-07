.. title:: Package Recipe 'bioconductor-tcgacrcmrna'
.. highlight: bash


bioconductor-tcgacrcmrna
========================

.. conda:recipe:: bioconductor-tcgacrcmrna
   :replaces_section_title:

   colorectal cancer mRNA profile provided by TCGA

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/TCGAcrcmRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgacrcmrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmrna/meta.yaml>`_

   


.. conda:package:: bioconductor-tcgacrcmrna

   |downloads_bioconductor-tcgacrcmrna| |docker_bioconductor-tcgacrcmrna|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tcgacrcmrna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgacrcmrna

   and update with::

      conda update bioconductor-tcgacrcmrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tcgacrcmrna


.. |required_by_bioconductor-tcgacrcmrna| conda:required_by:: bioconductor-tcgacrcmrna
.. |downloads_bioconductor-tcgacrcmrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgacrcmrna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tcgacrcmrna| image:: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmrna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgacrcmrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgacrcmrna/README.html

