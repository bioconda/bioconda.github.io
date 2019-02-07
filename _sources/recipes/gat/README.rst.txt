.. title:: Package Recipe 'gat'
.. highlight: bash


gat
===

.. conda:recipe:: gat
   :replaces_section_title:

   Genomic Association Tester

   :homepage: https://github.com/AndreasHeger/gat
   :license: MIT
   :recipe: /`gat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat/meta.yaml>`_
   :links: biotools: :biotools:`gat`, doi: :doi:`10.1093/bioinformatics/btt343`

   


.. conda:package:: gat

   |downloads_gat| |docker_gat|

   :versions: 1.3.5, 1.3.3, 1.2.2

   :depends: :conda:package:`cython` >=0.19 :conda:package:`matplotlib` >=1.3.0 :conda:package:`numpy` >=1.7 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.11 :conda:package:`zlib`  

   :required~by: |required_by_gat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gat

   and update with::

      conda update gat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gat


.. |required_by_gat| conda:required_by:: gat
.. |downloads_gat| image:: https://img.shields.io/conda/dn/bioconda/gat.svg?style=flat
   :alt:   (downloads)
.. |docker_gat| image:: https://quay.io/repository/biocontainers/gat/status
   :target: https://quay.io/repository/biocontainers/gat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gat/README.html

