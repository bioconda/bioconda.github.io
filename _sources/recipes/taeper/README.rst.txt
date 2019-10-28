:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taeper'
.. highlight: bash

taeper
======

.. conda:recipe:: taeper
   :replaces_section_title:

   Simulate repeating a nanopore experiment.

   :homepage: https://github.com/mbhall88/taeper
   :license: MIT / MIT License
   :recipe: /`taeper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taeper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taeper/meta.yaml>`_

   


.. conda:package:: taeper

   |downloads_taeper| |docker_taeper|

   :versions: 0.1.0-2, 0.1.0-1, 0.1.0-0
   
   :depends numpy: 
   :depends ont-fast5-api: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taeper

   and update with::

      conda update taeper

   or use the docker container::

      docker pull quay.io/biocontainers/taeper:<tag>

   (see `taeper/tags`_ for valid values for ``<tag>``)


.. |downloads_taeper| image:: https://img.shields.io/conda/dn/bioconda/taeper.svg?style=flat
   :target: https://anaconda.org/bioconda/taeper
   :alt:   (downloads)
.. |docker_taeper| image:: https://quay.io/repository/biocontainers/taeper/status
   :target: https://quay.io/repository/biocontainers/taeper
.. _`taeper/tags`: https://quay.io/repository/biocontainers/taeper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taeper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taeper/README.html