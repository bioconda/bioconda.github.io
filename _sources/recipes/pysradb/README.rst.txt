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

   Python package for interacting with SRAdb and downloading datasets from SRA


.. conda:package:: pysradb

   |downloads_pysradb| |docker_pysradb|

   :versions: 0.6.0, 0.4.2, 0.4.0, 0.3.0, 0.2.2

   :depends: :conda:package:`click` >=7.0 :conda:package:`pandas` >=0.23.4 :conda:package:`python`  :conda:package:`tqdm` >=4.28 

   :required~by: |required_by_pysradb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysradb

   and update with::

      conda update pysradb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pysradb


.. |required_by_pysradb| conda:required_by:: pysradb
.. |downloads_pysradb| image:: https://img.shields.io/conda/dn/bioconda/pysradb.svg?style=flat
   :alt:   (downloads)
.. |docker_pysradb| image:: https://quay.io/repository/biocontainers/pysradb/status
   :target: https://quay.io/repository/biocontainers/pysradb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysradb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysradb/README.html

