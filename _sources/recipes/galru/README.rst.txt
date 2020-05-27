:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galru'
.. highlight: bash

galru
=====

.. conda:recipe:: galru
   :replaces_section_title:

   Rapid spoligotyping for Mycobacterium tuberculosis directly from long read sequencing

   :homepage: https://github.com/quadram-institute-bioscience/galru
   :license: GPL3
   :recipe: /`galru <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galru>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galru/meta.yaml>`_

   


.. conda:package:: galru

   |downloads_galru| |docker_galru|

   :versions: 0.0.2-0
   
   :depends biopython: >=1.68
   :depends pyfastaq: >=3.12
   :depends python: >=3
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galru

   and update with::

      conda update galru

   or use the docker container::

      docker pull quay.io/biocontainers/galru:<tag>

   (see `galru/tags`_ for valid values for ``<tag>``)


.. |downloads_galru| image:: https://img.shields.io/conda/dn/bioconda/galru.svg?style=flat
   :target: https://anaconda.org/bioconda/galru
   :alt:   (downloads)
.. |docker_galru| image:: https://quay.io/repository/biocontainers/galru/status
   :target: https://quay.io/repository/biocontainers/galru
.. _`galru/tags`: https://quay.io/repository/biocontainers/galru?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galru/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galru/README.html