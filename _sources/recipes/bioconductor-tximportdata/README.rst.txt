.. title:: Package Recipe 'bioconductor-tximportdata'
.. highlight: bash


bioconductor-tximportdata
=========================

.. conda:recipe:: bioconductor-tximportdata
   :replaces_section_title:

   This package provides the output of running various transcript abundance quantifiers on a set of 6 RNA\-seq samples from the GEUVADIS project. The quantifiers were Cufflinks\, RSEM\, kallisto\, Salmon and Sailfish. For details on version numbers\, sample information\, and details on calls\, see the package vignette.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/tximportData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tximportdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximportdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximportdata/meta.yaml>`_

   


.. conda:package:: bioconductor-tximportdata

   |downloads_bioconductor-tximportdata| |docker_bioconductor-tximportdata|

   :versions: 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tximportdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tximportdata

   and update with::

      conda update bioconductor-tximportdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tximportdata


.. |required_by_bioconductor-tximportdata| conda:required_by:: bioconductor-tximportdata
.. |downloads_bioconductor-tximportdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tximportdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tximportdata| image:: https://quay.io/repository/biocontainers/bioconductor-tximportdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tximportdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tximportdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tximportdata/README.html

