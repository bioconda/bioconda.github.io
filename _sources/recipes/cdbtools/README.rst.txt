.. title:: Package Recipe 'cdbtools'
.. highlight: bash


cdbtools
========

.. conda:recipe:: cdbtools
   :replaces_section_title:

   CDB \(Constant DataBase\) indexing and retrieval tools for FASTA files

   :homepage: http://compbio.dfci.harvard.edu/tgi
   :license: Public Domain
   :recipe: /`cdbtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools/meta.yaml>`_

   


.. conda:package:: cdbtools

   |downloads_cdbtools| |docker_cdbtools|

   :versions: 0.99

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cdbtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cdbtools

   and update with::

      conda update cdbtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cdbtools


.. |required_by_cdbtools| conda:required_by:: cdbtools
.. |downloads_cdbtools| image:: https://img.shields.io/conda/dn/bioconda/cdbtools.svg?style=flat
   :alt:   (downloads)
.. |docker_cdbtools| image:: https://quay.io/repository/biocontainers/cdbtools/status
   :target: https://quay.io/repository/biocontainers/cdbtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdbtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdbtools/README.html

