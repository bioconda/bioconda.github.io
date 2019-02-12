:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blockbuster'
.. highlight: bash

blockbuster
===========

.. conda:recipe:: blockbuster
   :replaces_section_title:

   Blockbuster detects blocks of overlapping reads using a gaussian\-distribution approach.

   :homepage: http://hoffmann.bioinf.uni-leipzig.de/LIFE/blockbuster.html
   :license: The 3-Clause BSD License
   :recipe: /`blockbuster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster/meta.yaml>`_

   


.. conda:package:: blockbuster

   |downloads_blockbuster| |docker_blockbuster|

   :versions: 0.0.1.1-2, 0.0.1.1-1
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blockbuster

   and update with::

      conda update blockbuster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blockbuster:<tag>

   (see `blockbuster/tags`_ for valid values for ``<tag>``)


.. |downloads_blockbuster| image:: https://img.shields.io/conda/dn/bioconda/blockbuster.svg?style=flat
   :alt:   (downloads)
.. |docker_blockbuster| image:: https://quay.io/repository/biocontainers/blockbuster/status
   :target: https://quay.io/repository/biocontainers/blockbuster
.. _`blockbuster/tags`: https://quay.io/repository/biocontainers/blockbuster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockbuster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockbuster/README.html