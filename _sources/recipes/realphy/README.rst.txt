:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'realphy'
.. highlight: bash

realphy
=======

.. conda:recipe:: realphy
   :replaces_section_title:

   The Reference sequence Alignment based Phylogeny

   :homepage: https://realphy.unibas.ch/fcgi/realphy
   :license: GPL >=3
   :recipe: /`realphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realphy/meta.yaml>`_

   


.. conda:package:: realphy

   |downloads_realphy| |docker_realphy|

   :versions: 1.12-1, 1.12-0
   
   :depends openjdk: >8.0.121
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install realphy

   and update with::

      conda update realphy

   or use the docker container::

      docker pull quay.io/biocontainers/realphy:<tag>

   (see `realphy/tags`_ for valid values for ``<tag>``)


.. |downloads_realphy| image:: https://img.shields.io/conda/dn/bioconda/realphy.svg?style=flat
   :alt:   (downloads)
.. |docker_realphy| image:: https://quay.io/repository/biocontainers/realphy/status
   :target: https://quay.io/repository/biocontainers/realphy
.. _`realphy/tags`: https://quay.io/repository/biocontainers/realphy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/realphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/realphy/README.html