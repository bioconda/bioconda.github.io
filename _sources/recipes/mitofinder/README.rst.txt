:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitofinder'
.. highlight: bash

mitofinder
==========

.. conda:recipe:: mitofinder
   :replaces_section_title:
   :noindex:

   Mitofinder is a pipeline to assemble mitochondrial genomes and annotate mitochondrial genes from trimmed read sequencing data.

   :homepage: https://github.com/RemiAllio/MitoFinder
   :license: MIT
   :recipe: /`mitofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder/meta.yaml>`_

   


.. conda:package:: mitofinder

   |downloads_mitofinder| |docker_mitofinder|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends idba: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends megahit: 
   :depends openjdk: 
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends spades: 
   :depends trnascan-se: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mitofinder

   and update with::

      conda update mitofinder

   or use the docker container::

      docker pull quay.io/biocontainers/mitofinder:<tag>

   (see `mitofinder/tags`_ for valid values for ``<tag>``)


.. |downloads_mitofinder| image:: https://img.shields.io/conda/dn/bioconda/mitofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/mitofinder
   :alt:   (downloads)
.. |docker_mitofinder| image:: https://quay.io/repository/biocontainers/mitofinder/status
   :target: https://quay.io/repository/biocontainers/mitofinder
.. _`mitofinder/tags`: https://quay.io/repository/biocontainers/mitofinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitofinder/README.html