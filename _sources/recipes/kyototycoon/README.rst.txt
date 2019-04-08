:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kyototycoon'
.. highlight: bash

kyototycoon
===========

.. conda:recipe:: kyototycoon
   :replaces_section_title:

   a lightweight network server on top of the Kyoto Cabinet key\-value database\, built for high\-performance and concurrency

   :homepage: https://github.com/alticelabs/kyoto
   :license: GNU GPL v3.0
   :recipe: /`kyototycoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon/meta.yaml>`_

   


.. conda:package:: kyototycoon

   |downloads_kyototycoon| |docker_kyototycoon|

   :versions: 2017.04.10-1
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends lzo: >=2.10,<3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kyototycoon

   and update with::

      conda update kyototycoon

   or use the docker container::

      docker pull quay.io/biocontainers/kyototycoon:<tag>

   (see `kyototycoon/tags`_ for valid values for ``<tag>``)


.. |downloads_kyototycoon| image:: https://img.shields.io/conda/dn/bioconda/kyototycoon.svg?style=flat
   :alt:   (downloads)
.. |docker_kyototycoon| image:: https://quay.io/repository/biocontainers/kyototycoon/status
   :target: https://quay.io/repository/biocontainers/kyototycoon
.. _`kyototycoon/tags`: https://quay.io/repository/biocontainers/kyototycoon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kyototycoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kyototycoon/README.html