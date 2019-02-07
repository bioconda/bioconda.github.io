.. title:: Package Recipe 'flash'
.. highlight: bash


flash
=====

.. conda:recipe:: flash
   :replaces_section_title:

   Merge mates from fragments that are shorter than twice the read length

   :homepage: https://ccb.jhu.edu/software/FLASH/
   :license: GPLv3+
   :recipe: /`flash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash/meta.yaml>`_
   :links: biotools: :biotools:`flash`

   


.. conda:package:: flash

   |downloads_flash| |docker_flash|

   :versions: 1.2.11

   :depends: 

   :required~by: |required_by_flash|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flash

   and update with::

      conda update flash

   or use the docker container::

      docker pull quay.io/repository/biocontainers/flash


.. |required_by_flash| conda:required_by:: flash
.. |downloads_flash| image:: https://img.shields.io/conda/dn/bioconda/flash.svg?style=flat
   :alt:   (downloads)
.. |docker_flash| image:: https://quay.io/repository/biocontainers/flash/status
   :target: https://quay.io/repository/biocontainers/flash







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flash/README.html

