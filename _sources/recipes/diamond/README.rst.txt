.. title:: Package Recipe 'diamond'
.. highlight: bash


diamond
=======

.. conda:recipe:: diamond
   :replaces_section_title:

   Accelerated BLAST compatible local sequence aligner

   :homepage: https://github.com/bbuchfink/diamond
   :license: AGPL / AGPL-3.0
   :recipe: /`diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond/meta.yaml>`_
   :links: biotools: :biotools:`Diamond`, doi: :doi:`10.1038/nmeth.3176`

   


.. conda:package:: diamond

   |downloads_diamond| |docker_diamond|

   :versions: 0.9.24, 0.9.22, 0.9.21, 0.9.19, 0.9.14, 0.9.10, 0.8.36, 0.8.31, 0.8.30, 0.8.29, 0.8.28, 0.8.27, 0.8.26, 0.8.24, 0.8.22, 0.8.9, 0.7.12, 0.7.10

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_diamond|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install diamond

   and update with::

      conda update diamond

   or use the docker container::

      docker pull quay.io/repository/biocontainers/diamond


.. |required_by_diamond| conda:required_by:: diamond
.. |downloads_diamond| image:: https://img.shields.io/conda/dn/bioconda/diamond.svg?style=flat
   :alt:   (downloads)
.. |docker_diamond| image:: https://quay.io/repository/biocontainers/diamond/status
   :target: https://quay.io/repository/biocontainers/diamond







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diamond/README.html

