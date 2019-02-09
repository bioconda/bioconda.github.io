.. title:: Package Recipe 'pbgzip'
.. highlight: bash


pbgzip
======

.. conda:recipe:: pbgzip
   :replaces_section_title:

   Parallel Block GZIP

   :homepage: https://github.com/nh13/pbgzip
   :license: MIT/Expat
   :recipe: /`pbgzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip/meta.yaml>`_

   


.. conda:package:: pbgzip

   |downloads_pbgzip| |docker_pbgzip|

   :versions: 2016.08.04, 2015.10.28

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pbgzip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbgzip

   and update with::

      conda update pbgzip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbgzip


.. |required_by_pbgzip| conda:required_by:: pbgzip
.. |downloads_pbgzip| image:: https://img.shields.io/conda/dn/bioconda/pbgzip.svg?style=flat
   :alt:   (downloads)
.. |docker_pbgzip| image:: https://quay.io/repository/biocontainers/pbgzip/status
   :target: https://quay.io/repository/biocontainers/pbgzip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbgzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbgzip/README.html

