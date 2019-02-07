.. title:: Package Recipe 'manta'
.. highlight: bash


manta
=====

.. conda:recipe:: manta
   :replaces_section_title:

   Structural variant and indel caller for mapped sequencing data

   :homepage: https://github.com/Illumina/manta
   :license: GPLv3
   :recipe: /`manta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manta/meta.yaml>`_
   :links: biotools: :biotools:`Manta9235`

   


.. conda:package:: manta

   |downloads_manta| |docker_manta|

   :versions: 1.5.0, 1.4.0, 1.3.2, 1.3.0, 1.2.1, 1.1.0, 1.0.3, 1.0.0, 0.29.6, 0.29.3, 0.29.1

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_manta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install manta

   and update with::

      conda update manta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/manta


.. |required_by_manta| conda:required_by:: manta
.. |downloads_manta| image:: https://img.shields.io/conda/dn/bioconda/manta.svg?style=flat
   :alt:   (downloads)
.. |docker_manta| image:: https://quay.io/repository/biocontainers/manta/status
   :target: https://quay.io/repository/biocontainers/manta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/manta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/manta/README.html

