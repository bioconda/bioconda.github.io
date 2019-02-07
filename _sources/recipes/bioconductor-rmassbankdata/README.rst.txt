.. title:: Package Recipe 'bioconductor-rmassbankdata'
.. highlight: bash


bioconductor-rmassbankdata
==========================

.. conda:recipe:: bioconductor-rmassbankdata
   :replaces_section_title:

   Example spectra\, example compound list\(s\) and an example annotation list for a narcotics dataset\; required to test RMassBank. The package is described in the man page for RMassBankData. Includes new XCMS test data.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RMassBankData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmassbankdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbankdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbankdata/meta.yaml>`_

   


.. conda:package:: bioconductor-rmassbankdata

   |downloads_bioconductor-rmassbankdata| |docker_bioconductor-rmassbankdata|

   :versions: 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rmassbankdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmassbankdata

   and update with::

      conda update bioconductor-rmassbankdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rmassbankdata


.. |required_by_bioconductor-rmassbankdata| conda:required_by:: bioconductor-rmassbankdata
.. |downloads_bioconductor-rmassbankdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmassbankdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rmassbankdata| image:: https://quay.io/repository/biocontainers/bioconductor-rmassbankdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmassbankdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmassbankdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmassbankdata/README.html

