.. title:: Package Recipe 'query_phenomizer'
.. highlight: bash


query_phenomizer
================

.. conda:recipe:: query_phenomizer
   :replaces_section_title:

   Tool for query and parsing the phenomizer tool

   :homepage: https://www.github.com/moonso/query_phenomizer
   :license: MIT License
   :recipe: /`query_phenomizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer/meta.yaml>`_

   


.. conda:package:: query_phenomizer

   |downloads_query_phenomizer| |docker_query_phenomizer|

   :versions: 1.2, 0.5

   :depends: :conda:package:`click`  :conda:package:`pytest`  :conda:package:`python`  :conda:package:`requests`  

   :required~by: |required_by_query_phenomizer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install query_phenomizer

   and update with::

      conda update query_phenomizer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/query_phenomizer


.. |required_by_query_phenomizer| conda:required_by:: query_phenomizer
.. |downloads_query_phenomizer| image:: https://img.shields.io/conda/dn/bioconda/query_phenomizer.svg?style=flat
   :alt:   (downloads)
.. |docker_query_phenomizer| image:: https://quay.io/repository/biocontainers/query_phenomizer/status
   :target: https://quay.io/repository/biocontainers/query_phenomizer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/query_phenomizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/query_phenomizer/README.html

