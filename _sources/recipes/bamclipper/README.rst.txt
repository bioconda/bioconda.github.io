.. title:: Package Recipe 'bamclipper'
.. highlight: bash


bamclipper
==========

.. conda:recipe:: bamclipper
   :replaces_section_title:

   Remove primer sequence from BAM alignments by soft\-clipping.

   :homepage: https://github.com/tommyau/bamclipper
   :license: MIT / MIT
   :recipe: /`bamclipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamclipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamclipper/meta.yaml>`_

   


.. conda:package:: bamclipper

   |downloads_bamclipper| |docker_bamclipper|

   :versions: 1.0.0

   :depends: :conda:package:`parallel`  :conda:package:`perl` >=5.26.2,<5.27.0a0 :conda:package:`samtools`  

   :required~by: |required_by_bamclipper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamclipper

   and update with::

      conda update bamclipper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bamclipper


.. |required_by_bamclipper| conda:required_by:: bamclipper
.. |downloads_bamclipper| image:: https://img.shields.io/conda/dn/bioconda/bamclipper.svg?style=flat
   :alt:   (downloads)
.. |docker_bamclipper| image:: https://quay.io/repository/biocontainers/bamclipper/status
   :target: https://quay.io/repository/biocontainers/bamclipper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamclipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamclipper/README.html

