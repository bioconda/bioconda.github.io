.. title:: Package Recipe 'bioconductor-genomationdata'
.. highlight: bash


bioconductor-genomationdata
===========================

.. conda:recipe:: bioconductor-genomationdata
   :replaces_section_title:

   The package contains Chip Seq\, Methylation and Cage data\, downloaded from Encode

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/genomationData.html
   :license: GPL-3
   :recipe: /`bioconductor-genomationdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata/meta.yaml>`_

   


.. conda:package:: bioconductor-genomationdata

   |downloads_bioconductor-genomationdata| |docker_bioconductor-genomationdata|

   :versions: 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-genomationdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomationdata

   and update with::

      conda update bioconductor-genomationdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomationdata


.. |required_by_bioconductor-genomationdata| conda:required_by:: bioconductor-genomationdata
.. |downloads_bioconductor-genomationdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomationdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomationdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomationdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomationdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html

