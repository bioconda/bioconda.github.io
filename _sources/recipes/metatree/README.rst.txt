:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metatree'
.. highlight: bash

metatree
========

.. conda:recipe:: metatree
   :replaces_section_title:
   :noindex:

   Visualisation of polyphyletic groups between phylogenetic trees to a reference tree.

   :homepage: https://github.com/aaronmussig/metatree
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`metatree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree/meta.yaml>`_

   


.. conda:package:: metatree

   |downloads_metatree| |docker_metatree|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biolib: ``>=0.1.0``
   :depends biopython: 
   :depends dendropy: ``>=4.1.0``
   :depends ete3: 
   :depends genometreetk: ``>0.1.2``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends phylorank: ``>0.1.0``
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: ``>=4.31.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metatree

   and update with::

      conda update metatree

   or use the docker container::

      docker pull quay.io/biocontainers/metatree:<tag>

   (see `metatree/tags`_ for valid values for ``<tag>``)


.. |downloads_metatree| image:: https://img.shields.io/conda/dn/bioconda/metatree.svg?style=flat
   :target: https://anaconda.org/bioconda/metatree
   :alt:   (downloads)
.. |docker_metatree| image:: https://quay.io/repository/biocontainers/metatree/status
   :target: https://quay.io/repository/biocontainers/metatree
.. _`metatree/tags`: https://quay.io/repository/biocontainers/metatree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metatree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metatree/README.html