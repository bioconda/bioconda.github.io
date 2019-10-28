:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ops'
.. highlight: bash

galaxy-ops
==========

.. conda:recipe:: galaxy-ops
   :replaces_section_title:

   Galaxy interval operations

   :homepage: https://github.com/galaxyproject/gops
   :license: Academic Free License version 3.0
   :recipe: /`galaxy-ops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops/meta.yaml>`_

   


.. conda:package:: galaxy-ops

   |downloads_galaxy-ops| |docker_galaxy-ops|

   :versions: 1.1.0-2, 1.1.0-1, 1.1.0-0, 1.0.0-0
   
   :depends bx-python: 
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-ops

   and update with::

      conda update galaxy-ops

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-ops:<tag>

   (see `galaxy-ops/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-ops| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ops.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ops
   :alt:   (downloads)
.. |docker_galaxy-ops| image:: https://quay.io/repository/biocontainers/galaxy-ops/status
   :target: https://quay.io/repository/biocontainers/galaxy-ops
.. _`galaxy-ops/tags`: https://quay.io/repository/biocontainers/galaxy-ops?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ops/README.html