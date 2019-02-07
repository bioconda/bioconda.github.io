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

   :versions: 0.2.2

   :depends: :conda:package:`click` >=4.0 :conda:package:`fasttree`  :conda:package:`muscle`  :conda:package:`numpy`  :conda:package:`python` >=3.4 :conda:package:`scikit-bio` >=0.5.1 :conda:package:`sumaclust` >=1.0.31 

   :required~by: |required_by_ghost-tree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghost-tree

   and update with::

      conda update ghost-tree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ghost-tree


.. |required_by_ghost-tree| conda:required_by:: ghost-tree
.. |downloads_ghost-tree| image:: https://img.shields.io/conda/dn/bioconda/ghost-tree.svg?style=flat
   :alt:   (downloads)
.. |docker_ghost-tree| image:: https://quay.io/repository/biocontainers/ghost-tree/status
   :target: https://quay.io/repository/biocontainers/ghost-tree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghost-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghost-tree/README.html

