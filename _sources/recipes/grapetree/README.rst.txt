:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grapetree'
.. highlight: bash

grapetree
=========

.. conda:recipe:: grapetree
   :replaces_section_title:
   :noindex:

   Web interface of GrapeTree\, which is a program for phylogenetic analysis.

   :homepage: https://github.com/achtman-lab/GrapeTree
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`grapetree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grapetree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grapetree/meta.yaml>`_

   


.. conda:package:: grapetree

   |downloads_grapetree| |docker_grapetree|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends ete3: 
   :depends flask: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends python: 
   :depends requests: 
   :depends unidecode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grapetree

   and update with::

      conda update grapetree

   or use the docker container::

      docker pull quay.io/biocontainers/grapetree:<tag>

   (see `grapetree/tags`_ for valid values for ``<tag>``)


.. |downloads_grapetree| image:: https://img.shields.io/conda/dn/bioconda/grapetree.svg?style=flat
   :target: https://anaconda.org/bioconda/grapetree
   :alt:   (downloads)
.. |docker_grapetree| image:: https://quay.io/repository/biocontainers/grapetree/status
   :target: https://quay.io/repository/biocontainers/grapetree
.. _`grapetree/tags`: https://quay.io/repository/biocontainers/grapetree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grapetree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grapetree/README.html