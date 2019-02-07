.. title:: Package Recipe 'squid'
.. highlight: bash


squid
=====

.. conda:recipe:: squid
   :replaces_section_title:

   Detector for fusion\-gene and non\-fusion\-gene transcriptomic structural variations from RNA\-seq data

   :homepage: https://github.com/Kingsford-Group/squid
   :license: BSD 3
   :recipe: /`squid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squid/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1421-5`

   


.. conda:package:: squid

   |downloads_squid| |docker_squid|

   :versions: 1.5, 1.4

   :depends: :conda:package:`bamtools` >=2.4.1,<2.4.2.0a0 :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`glpk` >=4.65,<4.66.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_squid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squid

   and update with::

      conda update squid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/squid


.. |required_by_squid| conda:required_by:: squid
.. |downloads_squid| image:: https://img.shields.io/conda/dn/bioconda/squid.svg?style=flat
   :alt:   (downloads)
.. |docker_squid| image:: https://quay.io/repository/biocontainers/squid/status
   :target: https://quay.io/repository/biocontainers/squid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squid/README.html

