.. title:: Package Recipe 'simka'
.. highlight: bash


simka
=====

.. conda:recipe:: simka
   :replaces_section_title:

   Simka is a de novo comparative metagenomics tool. Simka represents each dataset as a k\-mer spectrum and compute several classical ecological distances between them.

   :homepage: https://github.com/GATB/simka
   :license: file
   :recipe: /`simka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simka/meta.yaml>`_
   :links: biotools: :biotools:`Simka`, doi: :doi:`10.7717/peerj-cs.94`

   


.. conda:package:: simka

   |downloads_simka| |docker_simka|

   :versions: 1.4.0

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_simka|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simka

   and update with::

      conda update simka

   or use the docker container::

      docker pull quay.io/repository/biocontainers/simka


.. |required_by_simka| conda:required_by:: simka
.. |downloads_simka| image:: https://img.shields.io/conda/dn/bioconda/simka.svg?style=flat
   :alt:   (downloads)
.. |docker_simka| image:: https://quay.io/repository/biocontainers/simka/status
   :target: https://quay.io/repository/biocontainers/simka







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simka/README.html

