.. title:: Package Recipe 'ped_parser'
.. highlight: bash


ped_parser
==========

.. conda:recipe:: ped_parser
   :replaces_section_title:

   A ped file parser.

   :homepage: https://github.com/moonso/ped_parser
   :license: BSD License
   :recipe: /`ped_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser/meta.yaml>`_

   


.. conda:package:: ped_parser

   |downloads_ped_parser| |docker_ped_parser|

   :versions: 1.6.6, 1.6.5

   :depends: :conda:package:`click`  :conda:package:`pytest`  :conda:package:`python` 2.7* 

   :required~by: |required_by_ped_parser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ped_parser

   and update with::

      conda update ped_parser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ped_parser


.. |required_by_ped_parser| conda:required_by:: ped_parser
.. |downloads_ped_parser| image:: https://img.shields.io/conda/dn/bioconda/ped_parser.svg?style=flat
   :alt:   (downloads)
.. |docker_ped_parser| image:: https://quay.io/repository/biocontainers/ped_parser/status
   :target: https://quay.io/repository/biocontainers/ped_parser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ped_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ped_parser/README.html

