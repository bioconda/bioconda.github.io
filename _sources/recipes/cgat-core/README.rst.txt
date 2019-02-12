:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgatcore'
.. highlight: bash

cgatcore
========

.. conda:recipe:: cgat-core
   :replaces_section_title:

   CGAT \: the Computational Genomics Analysis Toolkit

   :homepage: https://github.com/cgat-developers/cgat-core
   :license: MIT / MIT
   :recipe: /`cgat-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core/meta.yaml>`_

   


.. conda:package:: cgatcore

   |downloads_cgatcore| |docker_cgatcore|

   :versions: 0.5.6-0, 0.5.4-0, 0.5.2-0, 0.5.1-0
   
   :depends coreutils: 
   
   :depends gevent: 
   
   :depends pandas: 
   
   :depends paramiko: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends python-drmaa: 
   
   :depends pyyaml: 
   
   :depends ruffus: 
   
   :depends setuptools: 
   
   :depends six: 
   
   :depends sqlalchemy: 
   
   :depends time: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgatcore

   and update with::

      conda update cgatcore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgatcore:<tag>

   (see `cgatcore/tags`_ for valid values for ``<tag>``)


.. |downloads_cgatcore| image:: https://img.shields.io/conda/dn/bioconda/cgatcore.svg?style=flat
   :alt:   (downloads)
.. |docker_cgatcore| image:: https://quay.io/repository/biocontainers/cgatcore/status
   :target: https://quay.io/repository/biocontainers/cgatcore
.. _`cgatcore/tags`: https://quay.io/repository/biocontainers/cgatcore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgatcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgatcore/README.html