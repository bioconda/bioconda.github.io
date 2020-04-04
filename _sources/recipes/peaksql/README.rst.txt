:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peaksql'
.. highlight: bash

peaksql
=======

.. conda:recipe:: peaksql
   :replaces_section_title:

   Dynamic machine learning database for genomics.

   :homepage: https://vanheeringen-lab.github.io/peaksql/
   :developer docs: https://github.com/vanheeringen-lab/peaksql
   :license: MIT / MIT
   :recipe: /`peaksql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaksql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaksql/meta.yaml>`_

   


.. conda:package:: peaksql

   |downloads_peaksql| |docker_peaksql|

   :versions: 0.0.4-0, 0.0.3-1, 0.0.3-0
   
   :depends numba: >=0.48
   :depends numpy: >=1.18
   :depends pandas: >=1.0.1
   :depends pyfaidx: >=0.5.1
   :depends python: >=3.7
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peaksql

   and update with::

      conda update peaksql

   or use the docker container::

      docker pull quay.io/biocontainers/peaksql:<tag>

   (see `peaksql/tags`_ for valid values for ``<tag>``)


.. |downloads_peaksql| image:: https://img.shields.io/conda/dn/bioconda/peaksql.svg?style=flat
   :target: https://anaconda.org/bioconda/peaksql
   :alt:   (downloads)
.. |docker_peaksql| image:: https://quay.io/repository/biocontainers/peaksql/status
   :target: https://quay.io/repository/biocontainers/peaksql
.. _`peaksql/tags`: https://quay.io/repository/biocontainers/peaksql?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peaksql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peaksql/README.html