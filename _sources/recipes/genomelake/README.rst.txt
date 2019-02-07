.. title:: Package Recipe 'genomelake'
.. highlight: bash


genomelake
==========

.. conda:recipe:: genomelake
   :replaces_section_title:

   Simple and efficient random access to genomic data for deep learning models.

   :homepage: https://github.com/kundajelab/genomelake
   :license: BSD / BSD License
   :recipe: /`genomelake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake/meta.yaml>`_

   Simple and efficient random access to genomic data for deep learning models.


.. conda:package:: genomelake

   |downloads_genomelake| |docker_genomelake|

   :versions: 0.1.4

   :depends: :conda:package:`bcolz` >=1.1 :conda:package:`numpy`  :conda:package:`pybedtools`  :conda:package:`pybigwig`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`six` >=1.9.0 

   :required~by: |required_by_genomelake|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomelake

   and update with::

      conda update genomelake

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genomelake


.. |required_by_genomelake| conda:required_by:: genomelake
.. |downloads_genomelake| image:: https://img.shields.io/conda/dn/bioconda/genomelake.svg?style=flat
   :alt:   (downloads)
.. |docker_genomelake| image:: https://quay.io/repository/biocontainers/genomelake/status
   :target: https://quay.io/repository/biocontainers/genomelake







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomelake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomelake/README.html

