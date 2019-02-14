:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-data.table'
.. highlight: bash

r-data.table
============

.. conda:recipe:: r-data.table
   :replaces_section_title:

   Fast aggregation of large data \(e.g. 100GB in RAM\)\, fast ordered joins\, fast add\/modify\/delete of columns by group using no copies at all\, list columns\, friendly and fast character\-separated\-value read\/write. Offers a natural and flexible syntax\, for faster development.

   :homepage: http://r-datatable.com
   :license: OTHER / MPL-2.0
   :recipe: /`r-data.table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-data.table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-data.table/meta.yaml>`_

   


.. conda:package:: r-data.table

   |downloads_r-data.table| |docker_r-data.table|

   :versions: 1.11.6-0, 1.10.4-0, 1.10.0-1, 1.10.0-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-data.table

   and update with::

      conda update r-data.table

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-data.table:<tag>

   (see `r-data.table/tags`_ for valid values for ``<tag>``)


.. |downloads_r-data.table| image:: https://img.shields.io/conda/dn/bioconda/r-data.table.svg?style=flat
   :alt:   (downloads)
.. |docker_r-data.table| image:: https://quay.io/repository/biocontainers/r-data.table/status
   :target: https://quay.io/repository/biocontainers/r-data.table
.. _`r-data.table/tags`: https://quay.io/repository/biocontainers/r-data.table?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-data.table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-data.table/README.html