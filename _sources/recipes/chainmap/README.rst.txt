:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chainmap'
.. highlight: bash

chainmap
========

.. conda:recipe:: chainmap
   :replaces_section_title:

   Backport\/clone of ChainMap for py26\, py32\, and pypy3.

   :homepage: https://bitbucket.org/jeunice/chainmap
   :license: Python Software Foundation License
   :recipe: /`chainmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chainmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chainmap/meta.yaml>`_

   


.. conda:package:: chainmap

   |downloads_chainmap| |docker_chainmap|

   :versions: 1.0.2-1, 1.0.2-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chainmap

   and update with::

      conda update chainmap

   or use the docker container::

      docker pull quay.io/biocontainers/chainmap:<tag>

   (see `chainmap/tags`_ for valid values for ``<tag>``)


.. |downloads_chainmap| image:: https://img.shields.io/conda/dn/bioconda/chainmap.svg?style=flat
   :alt:   (downloads)
.. |docker_chainmap| image:: https://quay.io/repository/biocontainers/chainmap/status
   :target: https://quay.io/repository/biocontainers/chainmap
.. _`chainmap/tags`: https://quay.io/repository/biocontainers/chainmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chainmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chainmap/README.html