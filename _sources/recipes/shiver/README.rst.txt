:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiver'
.. highlight: bash

shiver
======

.. conda:recipe:: shiver
   :replaces_section_title:

   SHIVER \- Sequences from HIV Easily Reconstructed

   :homepage: https://github.com/ChrisHIV/shiver
   :license: GPL / GPL-3.0
   :recipe: /`shiver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiver/meta.yaml>`_

   


.. conda:package:: shiver

   |downloads_shiver| |docker_shiver|

   :versions: 1.3.5-0, 1.2.1-0, 1.1.0-4, 1.1.0-1, 1.1.0-0, 1.0.0-0
   
   :depends biopython: 
   
   :depends blast: >=2.2.28
   
   :depends mafft: 
   
   :depends picard: 
   
   :depends python: 2.7*
   
   :depends samtools: 
   
   :depends smalt: 
   
   :depends trimmomatic: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shiver

   and update with::

      conda update shiver

   or use the docker container::

      docker pull quay.io/biocontainers/shiver:<tag>

   (see `shiver/tags`_ for valid values for ``<tag>``)


.. |downloads_shiver| image:: https://img.shields.io/conda/dn/bioconda/shiver.svg?style=flat
   :alt:   (downloads)
.. |docker_shiver| image:: https://quay.io/repository/biocontainers/shiver/status
   :target: https://quay.io/repository/biocontainers/shiver
.. _`shiver/tags`: https://quay.io/repository/biocontainers/shiver?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiver/README.html