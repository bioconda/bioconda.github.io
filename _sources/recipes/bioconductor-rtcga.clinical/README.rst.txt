.. title:: Package Recipe 'bioconductor-rtcga.clinical'
.. highlight: bash


bioconductor-rtcga.clinical
===========================

.. conda:recipe:: bioconductor-rtcga.clinical
   :replaces_section_title:

   Package provides clinical datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Clinical data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Clinical\+Data\+Overview. Data from 2015\-11\-01 snapshot.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RTCGA.clinical.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.clinical <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical/meta.yaml>`_

   


.. conda:package:: bioconductor-rtcga.clinical

   |downloads_bioconductor-rtcga.clinical| |docker_bioconductor-rtcga.clinical|

   :versions: 20151101.12.0

   :depends: :conda:package:`bioconductor-rtcga` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rtcga.clinical|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.clinical

   and update with::

      conda update bioconductor-rtcga.clinical

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rtcga.clinical


.. |required_by_bioconductor-rtcga.clinical| conda:required_by:: bioconductor-rtcga.clinical
.. |downloads_bioconductor-rtcga.clinical| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.clinical.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.clinical| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html

