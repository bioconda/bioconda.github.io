:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mace'
.. highlight: bash

mace
====

.. conda:recipe:: mace
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-exo data

   :homepage: http://chipexo.sourceforge.net
   :license: GPL3 / GPL3
   :recipe: /`mace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mace/meta.yaml>`_

   


.. conda:package:: mace

   |downloads_mace| |docker_mace|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends bx-python: 
   :depends gsl: ``>=2.5,<2.6.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends ucsc-wigtobigwig: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mace

   and update with::

      conda update mace

   or use the docker container::

      docker pull quay.io/biocontainers/mace:<tag>

   (see `mace/tags`_ for valid values for ``<tag>``)


.. |downloads_mace| image:: https://img.shields.io/conda/dn/bioconda/mace.svg?style=flat
   :target: https://anaconda.org/bioconda/mace
   :alt:   (downloads)
.. |docker_mace| image:: https://quay.io/repository/biocontainers/mace/status
   :target: https://quay.io/repository/biocontainers/mace
.. _`mace/tags`: https://quay.io/repository/biocontainers/mace?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mace/README.html