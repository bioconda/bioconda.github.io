.. title:: Package Recipe 'ebisearch'
.. highlight: bash


ebisearch
=========

.. conda:recipe:: ebisearch
   :replaces_section_title:

   A Python library for interacting with EBI Search\'s API

   :homepage: https://github.com/bebatut/ebisearch
   :license: MIT / MIT License
   :recipe: /`ebisearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch/meta.yaml>`_

   


.. conda:package:: ebisearch

   |downloads_ebisearch| |docker_ebisearch|

   :versions: 0.0.3, 0.0.2

   :depends: :conda:package:`click`  :conda:package:`flake8`  :conda:package:`python` 2.7* :conda:package:`requests`  

   :required~by: |required_by_ebisearch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ebisearch

   and update with::

      conda update ebisearch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ebisearch


.. |required_by_ebisearch| conda:required_by:: ebisearch
.. |downloads_ebisearch| image:: https://img.shields.io/conda/dn/bioconda/ebisearch.svg?style=flat
   :alt:   (downloads)
.. |docker_ebisearch| image:: https://quay.io/repository/biocontainers/ebisearch/status
   :target: https://quay.io/repository/biocontainers/ebisearch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebisearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebisearch/README.html

