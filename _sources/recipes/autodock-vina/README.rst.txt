:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autodock-vina'
.. highlight: bash

autodock-vina
=============

.. conda:recipe:: autodock-vina
   :replaces_section_title:

   AutoDock Vina is an open\-source program for doing molecular docking

   :homepage: http://vina.scripps.edu/
   :license: Apache License 2.0
   :recipe: /`autodock-vina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autodock-vina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autodock-vina/meta.yaml>`_

   


.. conda:package:: autodock-vina

   |downloads_autodock-vina| |docker_autodock-vina|

   :versions: 1.1.2-1, 1.1.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install autodock-vina

   and update with::

      conda update autodock-vina

   or use the docker container::

      docker pull quay.io/biocontainers/autodock-vina:<tag>

   (see `autodock-vina/tags`_ for valid values for ``<tag>``)


.. |downloads_autodock-vina| image:: https://img.shields.io/conda/dn/bioconda/autodock-vina.svg?style=flat
   :alt:   (downloads)
.. |docker_autodock-vina| image:: https://quay.io/repository/biocontainers/autodock-vina/status
   :target: https://quay.io/repository/biocontainers/autodock-vina
.. _`autodock-vina/tags`: https://quay.io/repository/biocontainers/autodock-vina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autodock-vina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autodock-vina/README.html