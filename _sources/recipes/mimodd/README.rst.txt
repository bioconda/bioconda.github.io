.. title:: Package Recipe 'mimodd'
.. highlight: bash


mimodd
======

.. conda:recipe:: mimodd
   :replaces_section_title:

   Tools for Mutation Identification in Model Organism Genomes

   :homepage: http://sourceforge.net/projects/mimodd
   :license: GPL3
   :recipe: /`mimodd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd/meta.yaml>`_

   


.. conda:package:: mimodd

   |downloads_mimodd| |docker_mimodd|

   :versions: 0.1.9, 0.1.8, 0.1.7.3

   :depends: :conda:package:`python` 3.5* :conda:package:`rpy2`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_mimodd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mimodd

   and update with::

      conda update mimodd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mimodd


.. |required_by_mimodd| conda:required_by:: mimodd
.. |downloads_mimodd| image:: https://img.shields.io/conda/dn/bioconda/mimodd.svg?style=flat
   :alt:   (downloads)
.. |docker_mimodd| image:: https://quay.io/repository/biocontainers/mimodd/status
   :target: https://quay.io/repository/biocontainers/mimodd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimodd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimodd/README.html

