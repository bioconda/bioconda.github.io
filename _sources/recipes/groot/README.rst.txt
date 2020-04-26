:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'groot'
.. highlight: bash

groot
=====

.. conda:recipe:: groot
   :replaces_section_title:

   A tool for resistome profiling of metagenomic samples.

   :homepage: https://github.com/will-rowe/groot
   :license: MIT
   :recipe: /`groot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot/meta.yaml>`_

   


.. conda:package:: groot

   |downloads_groot| |docker_groot|

   :versions: 1.0.2-0, 0.8.5-1, 0.8.4-1, 0.8.3-1, 0.8.2-1, 0.8.1-1, 0.7.1-1, 0.7-1, 0.7-0, 0.6-0, 0.5-0, 0.4-0, 0.3-0, 0.2-0, 0.1-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install groot

   and update with::

      conda update groot

   or use the docker container::

      docker pull quay.io/biocontainers/groot:<tag>

   (see `groot/tags`_ for valid values for ``<tag>``)


.. |downloads_groot| image:: https://img.shields.io/conda/dn/bioconda/groot.svg?style=flat
   :target: https://anaconda.org/bioconda/groot
   :alt:   (downloads)
.. |docker_groot| image:: https://quay.io/repository/biocontainers/groot/status
   :target: https://quay.io/repository/biocontainers/groot
.. _`groot/tags`: https://quay.io/repository/biocontainers/groot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/groot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/groot/README.html