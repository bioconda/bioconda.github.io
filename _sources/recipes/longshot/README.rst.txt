:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longshot'
.. highlight: bash

longshot
========

.. conda:recipe:: longshot
   :replaces_section_title:

   Diploid SNV caller for error\-prone reads.

   :homepage: https://github.com/pjedge/longshot
   :license: MIT
   :recipe: /`longshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longshot/meta.yaml>`_

   


.. conda:package:: longshot

   |downloads_longshot| |docker_longshot|

   :versions: v0.3.4-0, v0.3.3-0, v0.3.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install longshot

   and update with::

      conda update longshot

   or use the docker container::

      docker pull quay.io/biocontainers/longshot:<tag>

   (see `longshot/tags`_ for valid values for ``<tag>``)


.. |downloads_longshot| image:: https://img.shields.io/conda/dn/bioconda/longshot.svg?style=flat
   :alt:   (downloads)
.. |docker_longshot| image:: https://quay.io/repository/biocontainers/longshot/status
   :target: https://quay.io/repository/biocontainers/longshot
.. _`longshot/tags`: https://quay.io/repository/biocontainers/longshot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longshot/README.html