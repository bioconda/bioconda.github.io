:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'outrigger'
.. highlight: bash

outrigger
=========

.. conda:recipe:: outrigger
   :replaces_section_title:

   Outrigger detects \*de novo\* exons and quantifies their percent spliced\-in

   :homepage: https://yeolab.github.io/outrigger
   :license: BSD / BSD License
   :recipe: /`outrigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger/meta.yaml>`_

   


.. conda:package:: outrigger

   |downloads_outrigger| |docker_outrigger|

   :versions: 1.1.1-1, 1.1.1-0
   
   :depends biopython: 
   
   :depends coverage: 
   
   :depends gffutils: >=0.8.7.1
   
   :depends graphlite: 
   
   :depends joblib: 
   
   :depends pandas: >=0.17.0
   
   :depends pybedtools: 
   
   :depends pysam: 
   
   :depends pytest: >=3.0.0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install outrigger

   and update with::

      conda update outrigger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/outrigger:<tag>

   (see `outrigger/tags`_ for valid values for ``<tag>``)


.. |downloads_outrigger| image:: https://img.shields.io/conda/dn/bioconda/outrigger.svg?style=flat
   :alt:   (downloads)
.. |docker_outrigger| image:: https://quay.io/repository/biocontainers/outrigger/status
   :target: https://quay.io/repository/biocontainers/outrigger
.. _`outrigger/tags`: https://quay.io/repository/biocontainers/outrigger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/outrigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/outrigger/README.html