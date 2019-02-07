.. title:: Package Recipe 'bioconductor-trnascanimport'
.. highlight: bash


bioconductor-trnascanimport
===========================

.. conda:recipe:: bioconductor-trnascanimport
   :replaces_section_title:

   The package imports the result of tRNAscan\-SE as a GRanges object.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tRNAscanImport.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trnascanimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport/meta.yaml>`_

   


.. conda:package:: bioconductor-trnascanimport

   |downloads_bioconductor-trnascanimport| |docker_bioconductor-trnascanimport|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-trna` >=1.0.0,<1.1.0 :conda:package:`r-assertive`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-trnascanimport|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trnascanimport

   and update with::

      conda update bioconductor-trnascanimport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-trnascanimport


.. |required_by_bioconductor-trnascanimport| conda:required_by:: bioconductor-trnascanimport
.. |downloads_bioconductor-trnascanimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trnascanimport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trnascanimport| image:: https://quay.io/repository/biocontainers/bioconductor-trnascanimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trnascanimport







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html

