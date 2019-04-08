:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tedna'
.. highlight: bash

tedna
=====

.. conda:recipe:: tedna
   :replaces_section_title:

   Tedna is a lightweight de novo transposable element assembler

   :homepage: https://urgi.versailles.inra.fr/Tools/Tedna
   :license: GNU Affero General Public License
   :recipe: /`tedna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna/meta.yaml>`_

   


.. conda:package:: tedna

   |downloads_tedna| |docker_tedna|

   :versions: 1.2.2-2, 1.2.2-1, 1.2.2-0
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tedna

   and update with::

      conda update tedna

   or use the docker container::

      docker pull quay.io/biocontainers/tedna:<tag>

   (see `tedna/tags`_ for valid values for ``<tag>``)


.. |downloads_tedna| image:: https://img.shields.io/conda/dn/bioconda/tedna.svg?style=flat
   :alt:   (downloads)
.. |docker_tedna| image:: https://quay.io/repository/biocontainers/tedna/status
   :target: https://quay.io/repository/biocontainers/tedna
.. _`tedna/tags`: https://quay.io/repository/biocontainers/tedna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tedna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tedna/README.html