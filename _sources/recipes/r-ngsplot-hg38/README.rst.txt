.. title:: Package Recipe 'r-ngsplotdb-hg38'
.. highlight: bash


r-ngsplotdb-hg38
================

.. conda:recipe:: r-ngsplot-hg38
   :replaces_section_title:

   HG19 genome database for NGSplot

   :homepage: https://github.com/shenlab-sinai/ngsplot
   :license: GPL-2.0
   :recipe: /`r-ngsplot-hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot-hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot-hg38/meta.yaml>`_

   


.. conda:package:: r-ngsplotdb-hg38

   |downloads_r-ngsplotdb-hg38| |docker_r-ngsplotdb-hg38|

   :versions: 3.00

   :depends: :conda:package:`r-base`  :conda:package:`r-ngsplot`  :conda:package:`wget`  

   :required~by: |required_by_r-ngsplotdb-hg38|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ngsplotdb-hg38

   and update with::

      conda update r-ngsplotdb-hg38

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ngsplotdb-hg38


.. |required_by_r-ngsplotdb-hg38| conda:required_by:: r-ngsplotdb-hg38
.. |downloads_r-ngsplotdb-hg38| image:: https://img.shields.io/conda/dn/bioconda/r-ngsplotdb-hg38.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ngsplotdb-hg38| image:: https://quay.io/repository/biocontainers/r-ngsplotdb-hg38/status
   :target: https://quay.io/repository/biocontainers/r-ngsplotdb-hg38







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ngsplotdb-hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ngsplotdb-hg38/README.html

