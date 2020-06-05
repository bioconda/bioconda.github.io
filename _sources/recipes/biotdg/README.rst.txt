:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotdg'
.. highlight: bash

biotdg
======

.. conda:recipe:: biotdg
   :replaces_section_title:
   :noindex:

   Bioinformatics Test Data Generator

   :homepage: https://github.com/biowdl/biotdg
   :license: MIT / MIT
   :recipe: /`biotdg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotdg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotdg/meta.yaml>`_

   


.. conda:package:: biotdg

   |downloads_biotdg| |docker_biotdg|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: 
   :depends cyvcf2: 
   :depends dwgsim: 
   :depends python: ``>=3.6,<3.8``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biotdg

   and update with::

      conda update biotdg

   or use the docker container::

      docker pull quay.io/biocontainers/biotdg:<tag>

   (see `biotdg/tags`_ for valid values for ``<tag>``)


.. |downloads_biotdg| image:: https://img.shields.io/conda/dn/bioconda/biotdg.svg?style=flat
   :target: https://anaconda.org/bioconda/biotdg
   :alt:   (downloads)
.. |docker_biotdg| image:: https://quay.io/repository/biocontainers/biotdg/status
   :target: https://quay.io/repository/biocontainers/biotdg
.. _`biotdg/tags`: https://quay.io/repository/biocontainers/biotdg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotdg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotdg/README.html