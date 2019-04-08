:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-scripts'
.. highlight: bash

scanpy-scripts
==============

.. conda:recipe:: scanpy-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the scanpy package. Functions in python packages are hard to call when building workflows outside of python\, so this package adds a set of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/scanpy-scripts
   :license: GPL / GPL-3
   :recipe: /`scanpy-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts/meta.yaml>`_

   


.. conda:package:: scanpy-scripts

   |downloads_scanpy-scripts| |docker_scanpy-scripts|

   :versions: 0.0.5-2, 0.0.5-1, 0.0.5-0, 0.0.4-2, 0.0.4-1, 0.0.3-1, 0.0.2-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends libffi: >=3.2.1,<3.3.0a0
   :depends loompy: 
   :depends matplotlib: >=3.0.0
   :depends multicore-tsne: 0.1_d4ff4aab
   :depends openssl: >=1.1.1b,<1.1.2a
   :depends pandas: >=0.21,<0.24
   :depends python: >=3.6
   :depends readline: >=7.0,<8.0a0
   :depends scanpy: 1.3.2
   :depends sqlite: >=3.26.0,<4.0a0
   :depends tk: >=8.6.9,<8.7.0a0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanpy-scripts

   and update with::

      conda update scanpy-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/scanpy-scripts:<tag>

   (see `scanpy-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_scanpy-scripts| image:: https://img.shields.io/conda/dn/bioconda/scanpy-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_scanpy-scripts| image:: https://quay.io/repository/biocontainers/scanpy-scripts/status
   :target: https://quay.io/repository/biocontainers/scanpy-scripts
.. _`scanpy-scripts/tags`: https://quay.io/repository/biocontainers/scanpy-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-scripts/README.html