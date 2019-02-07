.. title:: Package Recipe 'bioconductor-m3dexampledata'
.. highlight: bash


bioconductor-m3dexampledata
===========================

.. conda:recipe:: bioconductor-m3dexampledata
   :replaces_section_title:

   Example data for M3Drop package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/M3DExampleData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-m3dexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3dexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3dexampledata/meta.yaml>`_

   


.. conda:package:: bioconductor-m3dexampledata

   |downloads_bioconductor-m3dexampledata| |docker_bioconductor-m3dexampledata|

   :versions: 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-m3dexampledata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m3dexampledata

   and update with::

      conda update bioconductor-m3dexampledata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-m3dexampledata


.. |required_by_bioconductor-m3dexampledata| conda:required_by:: bioconductor-m3dexampledata
.. |downloads_bioconductor-m3dexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3dexampledata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-m3dexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-m3dexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3dexampledata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3dexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3dexampledata/README.html

