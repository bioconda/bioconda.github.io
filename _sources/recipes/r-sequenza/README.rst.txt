.. title:: Package Recipe 'r-sequenza'
.. highlight: bash


r-sequenza
==========

.. conda:recipe:: r-sequenza
   :replaces_section_title:

   Tools to analyze genomic sequencing data from paired normal\-tumor samples\, including cellularity and ploidy estimation\; mutation and copy number \(allele\-specific and total copy number\) detection\, quantification  and visualization.

   :homepage: http://cbs.dtu.dk/biotools/sequenza/
   :license: GPL3 / GPL-3
   :recipe: /`r-sequenza <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sequenza>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sequenza/meta.yaml>`_
   :links: doi: :doi:`10.1093/annonc/mdu479`

   


.. conda:package:: r-sequenza

   |downloads_r-sequenza| |docker_r-sequenza|

   :versions: 2.1.2

   :depends: :conda:package:`bioconductor-copynumber`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-squash`  

   :required~by: |required_by_r-sequenza|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sequenza

   and update with::

      conda update r-sequenza

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sequenza


.. |required_by_r-sequenza| conda:required_by:: r-sequenza
.. |downloads_r-sequenza| image:: https://img.shields.io/conda/dn/bioconda/r-sequenza.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sequenza| image:: https://quay.io/repository/biocontainers/r-sequenza/status
   :target: https://quay.io/repository/biocontainers/r-sequenza







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sequenza/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sequenza/README.html

