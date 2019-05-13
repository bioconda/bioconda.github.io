:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeshifter-cli'
.. highlight: bash

shapeshifter-cli
================

.. conda:recipe:: shapeshifter-cli
   :replaces_section_title:

   A command\-line tool for transforming large data sets

   :homepage: https://github.com/srp33/ShapeShifter-CLI
   :license: MIT
   :recipe: /`shapeshifter-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter-cli/meta.yaml>`_

   


.. conda:package:: shapeshifter-cli

   |downloads_shapeshifter-cli| |docker_shapeshifter-cli|

   :versions: 1.0.0-0, 0.0.3-0
   
   :depends pandas: 
   :depends python: >3
   :depends shapeshifter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shapeshifter-cli

   and update with::

      conda update shapeshifter-cli

   or use the docker container::

      docker pull quay.io/biocontainers/shapeshifter-cli:<tag>

   (see `shapeshifter-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeshifter-cli| image:: https://img.shields.io/conda/dn/bioconda/shapeshifter-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeshifter-cli
   :alt:   (downloads)
.. |docker_shapeshifter-cli| image:: https://quay.io/repository/biocontainers/shapeshifter-cli/status
   :target: https://quay.io/repository/biocontainers/shapeshifter-cli
.. _`shapeshifter-cli/tags`: https://quay.io/repository/biocontainers/shapeshifter-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeshifter-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeshifter-cli/README.html