.. title:: Package Recipe 'vcftoolbox'
.. highlight: bash


vcftoolbox
==========

.. conda:recipe:: vcftoolbox
   :replaces_section_title:

   Tools for manipulating and parsing vcf files

   :homepage: http://github.com/moonso/vcftoolbox
   :license: MIT / MIT License
   :recipe: /`vcftoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftoolbox/meta.yaml>`_

   


.. conda:package:: vcftoolbox

   |downloads_vcftoolbox| |docker_vcftoolbox|

   :versions: 1.5.1, 0.1

   :depends: :conda:package:`python`  

   :required~by: |required_by_vcftoolbox|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcftoolbox

   and update with::

      conda update vcftoolbox

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcftoolbox


.. |required_by_vcftoolbox| conda:required_by:: vcftoolbox
.. |downloads_vcftoolbox| image:: https://img.shields.io/conda/dn/bioconda/vcftoolbox.svg?style=flat
   :alt:   (downloads)
.. |docker_vcftoolbox| image:: https://quay.io/repository/biocontainers/vcftoolbox/status
   :target: https://quay.io/repository/biocontainers/vcftoolbox







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftoolbox/README.html

