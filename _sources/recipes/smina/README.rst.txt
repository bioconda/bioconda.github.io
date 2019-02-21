:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smina'
.. highlight: bash

smina
=====

.. conda:recipe:: smina
   :replaces_section_title:

   A fork of AutoDock Vina that is customized to better support scoring function development and high\-performance energy minimization.

   :homepage: https://sourceforge.net/projects/smina/
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`smina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smina/meta.yaml>`_

   


.. conda:package:: smina

   |downloads_smina| |docker_smina|

   :versions: 2017.11.9-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smina

   and update with::

      conda update smina

   or use the docker container::

      docker pull quay.io/biocontainers/smina:<tag>

   (see `smina/tags`_ for valid values for ``<tag>``)


.. |downloads_smina| image:: https://img.shields.io/conda/dn/bioconda/smina.svg?style=flat
   :alt:   (downloads)
.. |docker_smina| image:: https://quay.io/repository/biocontainers/smina/status
   :target: https://quay.io/repository/biocontainers/smina
.. _`smina/tags`: https://quay.io/repository/biocontainers/smina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smina/README.html