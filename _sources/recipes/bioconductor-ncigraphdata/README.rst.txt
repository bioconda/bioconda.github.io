.. title:: Package Recipe 'bioconductor-ncigraphdata'
.. highlight: bash


bioconductor-ncigraphdata
=========================

.. conda:recipe:: bioconductor-ncigraphdata
   :replaces_section_title:

   Provides pathways from the NCI Pathways Database as R graph objects

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/NCIgraphData.html
   :license: GPL-3
   :recipe: /`bioconductor-ncigraphdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata/meta.yaml>`_

   


.. conda:package:: bioconductor-ncigraphdata

   |downloads_bioconductor-ncigraphdata| |docker_bioconductor-ncigraphdata|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-ncigraphdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncigraphdata

   and update with::

      conda update bioconductor-ncigraphdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ncigraphdata


.. |required_by_bioconductor-ncigraphdata| conda:required_by:: bioconductor-ncigraphdata
.. |downloads_bioconductor-ncigraphdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncigraphdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ncigraphdata| image:: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html

