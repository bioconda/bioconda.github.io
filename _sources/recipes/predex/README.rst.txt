:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predex'
.. highlight: bash

predex
======

.. conda:recipe:: predex
   :replaces_section_title:
   :noindex:

   Prepare expression data for dgeAnalysis \- LUMC.

   :homepage: https://github.com/tomkuipers1402/predex
   :license: MIT / MIT
   :recipe: /`predex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predex/meta.yaml>`_

   


.. conda:package:: predex

   |downloads_predex| |docker_predex|

   :versions:
      
      

      ``0.9.1-0``

      

   
   :depends bedtools: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install predex

   and update with::

      conda update predex

   or use the docker container::

      docker pull quay.io/biocontainers/predex:<tag>

   (see `predex/tags`_ for valid values for ``<tag>``)


.. |downloads_predex| image:: https://img.shields.io/conda/dn/bioconda/predex.svg?style=flat
   :target: https://anaconda.org/bioconda/predex
   :alt:   (downloads)
.. |docker_predex| image:: https://quay.io/repository/biocontainers/predex/status
   :target: https://quay.io/repository/biocontainers/predex
.. _`predex/tags`: https://quay.io/repository/biocontainers/predex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predex/README.html