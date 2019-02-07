.. title:: Package Recipe 'phizz'
.. highlight: bash


phizz
=====

.. conda:recipe:: phizz
   :replaces_section_title:

   Tool to query hpo database and some other sources

   :homepage: https://github.com/moonso/query_hpo
   :license: MIT License
   :recipe: /`phizz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz/meta.yaml>`_

   


.. conda:package:: phizz

   |downloads_phizz| |docker_phizz|

   :versions: 0.0.1

   :depends: :conda:package:`click`  :conda:package:`configobj`  :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_phizz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phizz

   and update with::

      conda update phizz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phizz


.. |required_by_phizz| conda:required_by:: phizz
.. |downloads_phizz| image:: https://img.shields.io/conda/dn/bioconda/phizz.svg?style=flat
   :alt:   (downloads)
.. |docker_phizz| image:: https://quay.io/repository/biocontainers/phizz/status
   :target: https://quay.io/repository/biocontainers/phizz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phizz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phizz/README.html

