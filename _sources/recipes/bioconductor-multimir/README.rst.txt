.. title:: Package Recipe 'bioconductor-multimir'
.. highlight: bash


bioconductor-multimir
=====================

.. conda:recipe:: bioconductor-multimir
   :replaces_section_title:

   A collection of microRNAs\/targets from external resources\, including validated microRNA\-target databases \(miRecords\, miRTarBase and TarBase\)\, predicted microRNA\-target databases \(DIANA\-microT\, ElMMo\, MicroCosm\, miRanda\, miRDB\, PicTar\, PITA and TargetScan\) and microRNA\-disease\/drug databases \(miR2Disease\, Pharmaco\-miR VerSe and PhenomiR\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/multiMiR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multimir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir/meta.yaml>`_

   


.. conda:package:: bioconductor-multimir

   |downloads_bioconductor-multimir| |docker_bioconductor-multimir|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-purrr` >=0.2.2 :conda:package:`r-rcurl`  :conda:package:`r-tibble` >=1.2 :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-multimir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multimir

   and update with::

      conda update bioconductor-multimir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multimir


.. |required_by_bioconductor-multimir| conda:required_by:: bioconductor-multimir
.. |downloads_bioconductor-multimir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multimir| image:: https://quay.io/repository/biocontainers/bioconductor-multimir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimir/README.html

