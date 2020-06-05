:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapemapper'
.. highlight: bash

shapemapper
===========

.. conda:recipe:: shapemapper
   :replaces_section_title:
   :noindex:

   ShapeMapper converts raw sequencing files into mutational profiles\, creates SHAPE reactivity plots\, and provides extensive diagnostic information useful for experiment analysis and troubleshooting.

   :homepage: http://www.chem.unc.edu/rna/software.html
   :license: GPL
   :recipe: /`shapemapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper/meta.yaml>`_

   


.. conda:package:: shapemapper

   |downloads_shapemapper| |docker_shapemapper|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends bowtie2: 
   :depends httplib2: 
   :depends libgcc-ng: ``>=4.9``
   :depends matplotlib: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends rnastructure: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shapemapper

   and update with::

      conda update shapemapper

   or use the docker container::

      docker pull quay.io/biocontainers/shapemapper:<tag>

   (see `shapemapper/tags`_ for valid values for ``<tag>``)


.. |downloads_shapemapper| image:: https://img.shields.io/conda/dn/bioconda/shapemapper.svg?style=flat
   :target: https://anaconda.org/bioconda/shapemapper
   :alt:   (downloads)
.. |docker_shapemapper| image:: https://quay.io/repository/biocontainers/shapemapper/status
   :target: https://quay.io/repository/biocontainers/shapemapper
.. _`shapemapper/tags`: https://quay.io/repository/biocontainers/shapemapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapemapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapemapper/README.html