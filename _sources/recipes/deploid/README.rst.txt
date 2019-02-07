.. title:: Package Recipe 'deploid'
.. highlight: bash


deploid
=======

.. conda:recipe:: deploid
   :replaces_section_title:

   A software that deconvolutes mixed genomes with unknown proportions.

   :homepage: http://deploid.readthedocs.io/en/latest/index.html
   :license: GPLv3
   :recipe: /`deploid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deploid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deploid/meta.yaml>`_
   :links: biotools: :biotools:`DEploid`, doi: :doi:`10.1093/bioinformatics/btx530`

   


.. conda:package:: deploid

   |downloads_deploid| |docker_deploid|

   :versions: v0.5

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_deploid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deploid

   and update with::

      conda update deploid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deploid


.. |required_by_deploid| conda:required_by:: deploid
.. |downloads_deploid| image:: https://img.shields.io/conda/dn/bioconda/deploid.svg?style=flat
   :alt:   (downloads)
.. |docker_deploid| image:: https://quay.io/repository/biocontainers/deploid/status
   :target: https://quay.io/repository/biocontainers/deploid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deploid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deploid/README.html

