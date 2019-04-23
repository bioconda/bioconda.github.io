:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minepy'
.. highlight: bash

minepy
======

.. conda:recipe:: minepy
   :replaces_section_title:

   minepy \- Maximal Information\-based Nonparametric Exploration

   :homepage: http://minepy.readthedocs.io
   :license: GPL / GNU General Public License (GPL)
   :recipe: /`minepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minepy/meta.yaml>`_

   


.. conda:package:: minepy

   |downloads_minepy| |docker_minepy|

   :versions: 1.2.3-0, 1.2.2-0, 1.2.0-1, 1.2.0-0
   
   :depends numpy: >=1.3.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minepy

   and update with::

      conda update minepy

   or use the docker container::

      docker pull quay.io/biocontainers/minepy:<tag>

   (see `minepy/tags`_ for valid values for ``<tag>``)


.. |downloads_minepy| image:: https://img.shields.io/conda/dn/bioconda/minepy.svg?style=flat
   :alt:   (downloads)
.. |docker_minepy| image:: https://quay.io/repository/biocontainers/minepy/status
   :target: https://quay.io/repository/biocontainers/minepy
.. _`minepy/tags`: https://quay.io/repository/biocontainers/minepy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minepy/README.html