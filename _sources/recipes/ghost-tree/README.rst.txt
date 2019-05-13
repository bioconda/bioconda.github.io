:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghost-tree'
.. highlight: bash

ghost-tree
==========

.. conda:recipe:: ghost-tree
   :replaces_section_title:

   ghost\-tree is a bioinformatics tool that combines sequence data from two
   genetic marker databases into one phylogenetic tree that can be used for
   diversity analyses.


   :homepage: https://github.com/JTFouquier/ghost-tree
   :license: BSD license
   :recipe: /`ghost-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghost-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghost-tree/meta.yaml>`_

   


.. conda:package:: ghost-tree

   |downloads_ghost-tree| |docker_ghost-tree|

   :versions: 0.2.2-1, 0.2.2-0
   
   :depends click: >=4.0
   :depends fasttree: 
   :depends muscle: 
   :depends numpy: 
   :depends python: >=3.4
   :depends scikit-bio: >=0.5.1
   :depends sumaclust: >=1.0.31
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghost-tree

   and update with::

      conda update ghost-tree

   or use the docker container::

      docker pull quay.io/biocontainers/ghost-tree:<tag>

   (see `ghost-tree/tags`_ for valid values for ``<tag>``)


.. |downloads_ghost-tree| image:: https://img.shields.io/conda/dn/bioconda/ghost-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/ghost-tree
   :alt:   (downloads)
.. |docker_ghost-tree| image:: https://quay.io/repository/biocontainers/ghost-tree/status
   :target: https://quay.io/repository/biocontainers/ghost-tree
.. _`ghost-tree/tags`: https://quay.io/repository/biocontainers/ghost-tree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghost-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghost-tree/README.html