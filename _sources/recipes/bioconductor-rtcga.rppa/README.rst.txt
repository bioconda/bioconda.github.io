.. title:: Package Recipe 'bioconductor-rtcga.rppa'
.. highlight: bash


bioconductor-rtcga.rppa
=======================

.. conda:recipe:: bioconductor-rtcga.rppa
   :replaces_section_title:

   Package provides RPPA datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Protein\+Array \+Data\+Format\+Specification\?src\=search

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RTCGA.RPPA.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.rppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rppa/meta.yaml>`_

   


.. conda:package:: bioconductor-rtcga.rppa

   |downloads_bioconductor-rtcga.rppa| |docker_bioconductor-rtcga.rppa|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-rtcga` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rtcga.rppa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.rppa

   and update with::

      conda update bioconductor-rtcga.rppa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rtcga.rppa


.. |required_by_bioconductor-rtcga.rppa| conda:required_by:: bioconductor-rtcga.rppa
.. |downloads_bioconductor-rtcga.rppa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.rppa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.rppa| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.rppa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.rppa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.rppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.rppa/README.html

