:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysradb'
.. highlight: bash

pysradb
=======

.. conda:recipe:: pysradb
   :replaces_section_title:

   Python package for interacting with SRAdb and downloading datasets from SRA

   :homepage: https://github.com/saketkc/pysradb
   :documentation: https://saketkc.github.io/pysradb
   
   :license: BSD / BSD License
   :recipe: /`pysradb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysradb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysradb/meta.yaml>`_
   :links: biotools: :biotools:`pysradb`, doi: :doi:`10.12688/f1000research.18676.1`

   Python package for interacting with SRAdb and downloading datasets from SRA


.. conda:package:: pysradb

   |downloads_pysradb| |docker_pysradb|

   :versions: 0.10.1-0, 0.10.0-0, 0.9.9-0, 0.9.7-0, 0.9.6-0, 0.9.0-0, 0.8.0-0, 0.7.1-0, 0.6.0-0, 0.4.2-0, 0.4.0-0, 0.3.0-0, 0.2.2-0
   
   :depends pandas: 0.25.3.*
   :depends python: >=3
   :depends requests: 2.22.0.*
   :depends sra-tools: 
   :depends tqdm: 4.41.1.*
   :depends xmltodict: 0.12.0.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysradb

   and update with::

      conda update pysradb

   or use the docker container::

      docker pull quay.io/biocontainers/pysradb:<tag>

   (see `pysradb/tags`_ for valid values for ``<tag>``)


.. |downloads_pysradb| image:: https://img.shields.io/conda/dn/bioconda/pysradb.svg?style=flat
   :target: https://anaconda.org/bioconda/pysradb
   :alt:   (downloads)
.. |docker_pysradb| image:: https://quay.io/repository/biocontainers/pysradb/status
   :target: https://quay.io/repository/biocontainers/pysradb
.. _`pysradb/tags`: https://quay.io/repository/biocontainers/pysradb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysradb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysradb/README.html