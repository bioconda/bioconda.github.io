.. title:: Package Recipe 'r-wasabi'
.. highlight: bash


r-wasabi
========

.. conda:recipe:: r-wasabi
   :replaces_section_title:

   Prepare Sailfish and Salmon output for downstream analysis

   :homepage: https://github.com/COMBINE-lab/wasabi
   :license: BSD-3-clause
   :recipe: /`r-wasabi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wasabi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wasabi/meta.yaml>`_

   


.. conda:package:: r-wasabi

   |downloads_r-wasabi| |docker_r-wasabi|

   :versions: 0.2, 0.1, 0.0.1

   :depends: :conda:package:`bioconductor-rhdf5`  :conda:package:`r` 3.3.1* :conda:package:`r-data.table`  :conda:package:`r-rjson`  

   :required~by: |required_by_r-wasabi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-wasabi

   and update with::

      conda update r-wasabi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-wasabi


.. |required_by_r-wasabi| conda:required_by:: r-wasabi
.. |downloads_r-wasabi| image:: https://img.shields.io/conda/dn/bioconda/r-wasabi.svg?style=flat
   :alt:   (downloads)
.. |docker_r-wasabi| image:: https://quay.io/repository/biocontainers/r-wasabi/status
   :target: https://quay.io/repository/biocontainers/r-wasabi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wasabi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wasabi/README.html

