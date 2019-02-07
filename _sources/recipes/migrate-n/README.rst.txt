.. title:: Package Recipe 'migrate-n'
.. highlight: bash


migrate-n
=========

.. conda:recipe:: migrate-n
   :replaces_section_title:

   Population Genetics \- Panmixia and Migration detection

   :homepage: http://popgen.sc.fsu.edu/Migrate/Migrate-n.html
   :license: MIT
   :recipe: /`migrate-n <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migrate-n>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migrate-n/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu033`

   


.. conda:package:: migrate-n

   |downloads_migrate-n| |docker_migrate-n|

   :versions: 3.6.11

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_migrate-n|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install migrate-n

   and update with::

      conda update migrate-n

   or use the docker container::

      docker pull quay.io/repository/biocontainers/migrate-n


.. |required_by_migrate-n| conda:required_by:: migrate-n
.. |downloads_migrate-n| image:: https://img.shields.io/conda/dn/bioconda/migrate-n.svg?style=flat
   :alt:   (downloads)
.. |docker_migrate-n| image:: https://quay.io/repository/biocontainers/migrate-n/status
   :target: https://quay.io/repository/biocontainers/migrate-n







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migrate-n/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migrate-n/README.html

