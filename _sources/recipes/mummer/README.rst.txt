.. title:: Package Recipe 'mummer'
.. highlight: bash


mummer
======

.. conda:recipe:: mummer
   :replaces_section_title:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: http://mummer.sourceforge.net/
   :license: The Artistic License
   :recipe: /`mummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer/meta.yaml>`_
   :links: biotools: :biotools:`mummer`

   


.. conda:package:: mummer

   |downloads_mummer| |docker_mummer|

   :versions: 3.23

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_mummer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mummer

   and update with::

      conda update mummer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mummer


.. |required_by_mummer| conda:required_by:: mummer
.. |downloads_mummer| image:: https://img.shields.io/conda/dn/bioconda/mummer.svg?style=flat
   :alt:   (downloads)
.. |docker_mummer| image:: https://quay.io/repository/biocontainers/mummer/status
   :target: https://quay.io/repository/biocontainers/mummer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer/README.html

