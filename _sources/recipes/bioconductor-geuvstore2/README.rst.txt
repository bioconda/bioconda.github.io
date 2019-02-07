.. title:: Package Recipe 'bioconductor-geuvstore2'
.. highlight: bash


bioconductor-geuvstore2
=======================

.. conda:recipe:: bioconductor-geuvstore2
   :replaces_section_title:

   demonstrate storage discipline for eQTL enumerations and analyses based on a selection of GEUVADIS results

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/geuvStore2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geuvstore2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvstore2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvstore2/meta.yaml>`_

   


.. conda:package:: bioconductor-geuvstore2

   |downloads_bioconductor-geuvstore2| |docker_bioconductor-geuvstore2|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gqtlbase` >=1.14.0,<1.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-batchjobs`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-geuvstore2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geuvstore2

   and update with::

      conda update bioconductor-geuvstore2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-geuvstore2


.. |required_by_bioconductor-geuvstore2| conda:required_by:: bioconductor-geuvstore2
.. |downloads_bioconductor-geuvstore2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geuvstore2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geuvstore2| image:: https://quay.io/repository/biocontainers/bioconductor-geuvstore2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geuvstore2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geuvstore2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geuvstore2/README.html

