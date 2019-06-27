:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-core'
.. highlight: bash

cgat-core
=========

.. conda:recipe:: cgat-core
   :replaces_section_title:

   CGAT \: the Computational Genomics Analysis Toolkit

   :homepage: https://github.com/cgat-developers/cgat-core
   :license: MIT / MIT
   :recipe: /`cgat-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core/meta.yaml>`_

   


.. conda:package:: cgat-core

   |downloads_cgat-core| |docker_cgat-core|

   :versions: 0.5.14-0
   
   :depends coreutils: 
   :depends drmaa: 
   :depends gevent: 
   :depends nomkl: 
   :depends pandas: 
   :depends paramiko: 
   :depends python: >=3
   :depends pyyaml: 
   :depends ruffus: 
   :depends setuptools: 
   :depends six: 
   :depends sqlalchemy: 
   :depends time: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-core

   and update with::

      conda update cgat-core

   or use the docker container::

      docker pull quay.io/biocontainers/cgat-core:<tag>

   (see `cgat-core/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-core| image:: https://img.shields.io/conda/dn/bioconda/cgat-core.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-core
   :alt:   (downloads)
.. |docker_cgat-core| image:: https://quay.io/repository/biocontainers/cgat-core/status
   :target: https://quay.io/repository/biocontainers/cgat-core
.. _`cgat-core/tags`: https://quay.io/repository/biocontainers/cgat-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-core/README.html