:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedparse'
.. highlight: bash

bedparse
========

.. conda:recipe:: bedparse
   :replaces_section_title:

   A simple library and CLI tool to manipulate BED files

   :homepage: https://github.com/tleonardi/bedparse
   :license: MIT / MIT
   :recipe: /`bedparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedparse/meta.yaml>`_

   


.. conda:package:: bedparse

   |downloads_bedparse| |docker_bedparse|

   :versions: 0.2.3-0
   
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bedparse

   and update with::

      conda update bedparse

   or use the docker container::

      docker pull quay.io/biocontainers/bedparse:<tag>

   (see `bedparse/tags`_ for valid values for ``<tag>``)


.. |downloads_bedparse| image:: https://img.shields.io/conda/dn/bioconda/bedparse.svg?style=flat
   :target: https://anaconda.org/bioconda/bedparse
   :alt:   (downloads)
.. |docker_bedparse| image:: https://quay.io/repository/biocontainers/bedparse/status
   :target: https://quay.io/repository/biocontainers/bedparse
.. _`bedparse/tags`: https://quay.io/repository/biocontainers/bedparse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedparse/README.html