:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pythonnet'
.. highlight: bash

pythonnet
=========

.. conda:recipe:: pythonnet
   :replaces_section_title:

   \.Net and Mono integration for Python

   :homepage: https://pythonnet.github.io/
   :license: MIT / MIT License
   :recipe: /`pythonnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythonnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythonnet/meta.yaml>`_

   


.. conda:package:: pythonnet

   |downloads_pythonnet| |docker_pythonnet|

   :versions: 2.3.0-1, 2.3.0-0
   
   :depends glib: 2.55.*
   
   :depends libiconv: >=1.15,<2.0a0
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends mono: 
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends readline: >=7.0,<8.0a0
   
   :depends sqlite: >=3.26.0,<4.0a0
   
   :depends tk: >=8.6.9,<8.7.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pythonnet

   and update with::

      conda update pythonnet

   or use the docker container::

      docker pull quay.io/biocontainers/pythonnet:<tag>

   (see `pythonnet/tags`_ for valid values for ``<tag>``)


.. |downloads_pythonnet| image:: https://img.shields.io/conda/dn/bioconda/pythonnet.svg?style=flat
   :alt:   (downloads)
.. |docker_pythonnet| image:: https://quay.io/repository/biocontainers/pythonnet/status
   :target: https://quay.io/repository/biocontainers/pythonnet
.. _`pythonnet/tags`: https://quay.io/repository/biocontainers/pythonnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythonnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythonnet/README.html