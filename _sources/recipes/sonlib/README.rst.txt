:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonlib'
.. highlight: bash

sonlib
======

.. conda:recipe:: sonlib
   :replaces_section_title:

   Small general purpose library for C and Python with focus on bioinformatics.

   :homepage: https://github.com/benedictpaten/sonLib
   :license: MIT
   :recipe: /`sonlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonlib/meta.yaml>`_

   


.. conda:package:: sonlib

   |downloads_sonlib| |docker_sonlib|

   :versions: 1.1.0-1, 1.1.0-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sonlib

   and update with::

      conda update sonlib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sonlib:<tag>

   (see `sonlib/tags`_ for valid values for ``<tag>``)


.. |downloads_sonlib| image:: https://img.shields.io/conda/dn/bioconda/sonlib.svg?style=flat
   :alt:   (downloads)
.. |docker_sonlib| image:: https://quay.io/repository/biocontainers/sonlib/status
   :target: https://quay.io/repository/biocontainers/sonlib
.. _`sonlib/tags`: https://quay.io/repository/biocontainers/sonlib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonlib/README.html