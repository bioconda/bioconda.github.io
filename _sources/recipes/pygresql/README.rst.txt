.. title:: Package Recipe 'pygresql'
.. highlight: bash


pygresql
========

.. conda:recipe:: pygresql
   :replaces_section_title:

   Python PostgreSQL Interfaces

   :homepage: http://www.pygresql.org
   :license: Python Software Foundation License
   :recipe: /`pygresql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql/meta.yaml>`_

   


.. conda:package:: pygresql

   |downloads_pygresql| |docker_pygresql|

   :versions: 5.0.1

   :depends: :conda:package:`postgresql`  :conda:package:`python` 2.7* 

   :required~by: |required_by_pygresql|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygresql

   and update with::

      conda update pygresql

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pygresql


.. |required_by_pygresql| conda:required_by:: pygresql
.. |downloads_pygresql| image:: https://img.shields.io/conda/dn/bioconda/pygresql.svg?style=flat
   :alt:   (downloads)
.. |docker_pygresql| image:: https://quay.io/repository/biocontainers/pygresql/status
   :target: https://quay.io/repository/biocontainers/pygresql







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygresql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygresql/README.html

