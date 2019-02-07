.. title:: Package Recipe 'svdb'
.. highlight: bash


svdb
====

.. conda:recipe:: svdb
   :replaces_section_title:

   structural variant database software

   :homepage: https://github.com/J35P312/SVDB
   :license: MIT / MIT
   :recipe: /`svdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb/meta.yaml>`_

   


.. conda:package:: svdb

   |downloads_svdb| |docker_svdb|

   :versions: 1.3.0, 1.1.2, 1.0.7

   :depends: :conda:package:`cython`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_svdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svdb

   and update with::

      conda update svdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/svdb


.. |required_by_svdb| conda:required_by:: svdb
.. |downloads_svdb| image:: https://img.shields.io/conda/dn/bioconda/svdb.svg?style=flat
   :alt:   (downloads)
.. |docker_svdb| image:: https://quay.io/repository/biocontainers/svdb/status
   :target: https://quay.io/repository/biocontainers/svdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdb/README.html

