:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtfparse'
.. highlight: bash

gtfparse
========

.. conda:recipe:: gtfparse
   :replaces_section_title:

   GTF Parsing

   :homepage: https://github.com/openvax/gtfparse
   :license: APACHE / Apache 2.0
   :recipe: /`gtfparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse/meta.yaml>`_

   


.. conda:package:: gtfparse

   |downloads_gtfparse| |docker_gtfparse|

   :versions: 1.2.0-0, 1.0.7-1, 1.0.7-0
   
   :depends numpy: >=1.7,<2.0
   
   :depends pandas: >=0.15
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gtfparse

   and update with::

      conda update gtfparse

   or use the docker container::

      docker pull quay.io/biocontainers/gtfparse:<tag>

   (see `gtfparse/tags`_ for valid values for ``<tag>``)


.. |downloads_gtfparse| image:: https://img.shields.io/conda/dn/bioconda/gtfparse.svg?style=flat
   :alt:   (downloads)
.. |docker_gtfparse| image:: https://quay.io/repository/biocontainers/gtfparse/status
   :target: https://quay.io/repository/biocontainers/gtfparse
.. _`gtfparse/tags`: https://quay.io/repository/biocontainers/gtfparse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtfparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtfparse/README.html