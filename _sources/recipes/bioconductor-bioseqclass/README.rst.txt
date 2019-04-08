:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioseqclass'
.. highlight: bash

bioconductor-bioseqclass
========================

.. conda:recipe:: bioconductor-bioseqclass
   :replaces_section_title:

   Extracting Features from Biological Sequences and Building Classification Model

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BioSeqClass.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-bioseqclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioseqclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioseqclass/meta.yaml>`_

   


.. conda:package:: bioconductor-bioseqclass

   |downloads_bioconductor-bioseqclass| |docker_bioconductor-bioseqclass|

   :versions: 1.40.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-class: 
   :depends r-e1071: 
   :depends r-foreign: 
   :depends r-ipred: 
   :depends r-klar: 
   :depends r-nnet: 
   :depends r-party: 
   :depends r-randomforest: 
   :depends r-rpart: 
   :depends r-scatterplot3d: 
   :depends r-tree: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioseqclass

   and update with::

      conda update bioconductor-bioseqclass

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioseqclass:<tag>

   (see `bioconductor-bioseqclass/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioseqclass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioseqclass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bioseqclass| image:: https://quay.io/repository/biocontainers/bioconductor-bioseqclass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioseqclass
.. _`bioconductor-bioseqclass/tags`: https://quay.io/repository/biocontainers/bioconductor-bioseqclass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioseqclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioseqclass/README.html