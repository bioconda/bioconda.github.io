.. title:: Package Recipe 'bioconductor-msgbsr'
.. highlight: bash


bioconductor-msgbsr
===================

.. conda:recipe:: bioconductor-msgbsr
   :replaces_section_title:

   Pipeline for the anaysis of a MS\-GBS experiment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/msgbsR.html
   :license: GPL-2
   :recipe: /`bioconductor-msgbsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgbsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgbsr/meta.yaml>`_

   


.. conda:package:: bioconductor-msgbsr

   |downloads_bioconductor-msgbsr| |docker_bioconductor-msgbsr|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-easyrnaseq` >=2.18.0,<2.19.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  :conda:package:`r-r.utils`  

   :required~by: |required_by_bioconductor-msgbsr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msgbsr

   and update with::

      conda update bioconductor-msgbsr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msgbsr


.. |required_by_bioconductor-msgbsr| conda:required_by:: bioconductor-msgbsr
.. |downloads_bioconductor-msgbsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msgbsr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msgbsr| image:: https://quay.io/repository/biocontainers/bioconductor-msgbsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msgbsr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msgbsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msgbsr/README.html

