.. title:: Package Recipe 'mosaik'
.. highlight: bash


mosaik
======

.. conda:recipe:: mosaik
   :replaces_section_title:

   MOSAIK is a stable\, sensitive and open\-source program for mapping second and third\-generation sequencing reads to a reference genome.

   :homepage: https://github.com/wanpinglee/MOSAIK
   :license: GPL 2.0+
   :recipe: /`mosaik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaik/meta.yaml>`_
   :links: biotools: :biotools:`mosaik`, doi: :doi:`10.1371/journal.pone.0090581`

   


.. conda:package:: mosaik

   |downloads_mosaik| |docker_mosaik|

   :versions: 2.2.26

   :depends: 

   :required~by: |required_by_mosaik|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mosaik

   and update with::

      conda update mosaik

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mosaik


.. |required_by_mosaik| conda:required_by:: mosaik
.. |downloads_mosaik| image:: https://img.shields.io/conda/dn/bioconda/mosaik.svg?style=flat
   :alt:   (downloads)
.. |docker_mosaik| image:: https://quay.io/repository/biocontainers/mosaik/status
   :target: https://quay.io/repository/biocontainers/mosaik







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosaik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosaik/README.html

