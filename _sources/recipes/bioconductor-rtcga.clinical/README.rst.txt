:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.clinical'
.. highlight: bash

bioconductor-rtcga.clinical
===========================

.. conda:recipe:: bioconductor-rtcga.clinical
   :replaces_section_title:
   :noindex:

   Clinical datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/RTCGA.clinical.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.clinical <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical/meta.yaml>`_

   Package provides clinical datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Clinical data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Clinical\+Data\+Overview. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.clinical

   |downloads_bioconductor-rtcga.clinical| |docker_bioconductor-rtcga.clinical|

   :versions:
      
      

      ``20151101.22.0-0``,  ``20151101.20.0-1``,  ``20151101.20.0-0``,  ``20151101.19.0-0``,  ``20151101.18.0-0``,  ``20151101.16.0-0``,  ``20151101.14.0-1``,  ``20151101.14.0-0``,  ``20151101.12.0-0``

      

   
   :depends bioconductor-rtcga: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.clinical

   and update with::

      conda update bioconductor-rtcga.clinical

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.clinical:<tag>

   (see `bioconductor-rtcga.clinical/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.clinical| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.clinical.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.clinical
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.clinical| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical
.. _`bioconductor-rtcga.clinical/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.clinical";
        var versions = ["20151101.22.0","20151101.20.0","20151101.20.0","20151101.19.0","20151101.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html