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

   :versions: 1.40.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-class`  :conda:package:`r-e1071`  :conda:package:`r-foreign`  :conda:package:`r-ipred`  :conda:package:`r-klar`  :conda:package:`r-nnet`  :conda:package:`r-party`  :conda:package:`r-randomforest`  :conda:package:`r-rpart`  :conda:package:`r-scatterplot3d`  :conda:package:`r-tree`  

   :required~by: |required_by_bioconductor-bioseqclass|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioseqclass

   and update with::

      conda update bioconductor-bioseqclass

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bioseqclass


.. |required_by_bioconductor-bioseqclass| conda:required_by:: bioconductor-bioseqclass
.. |downloads_bioconductor-bioseqclass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioseqclass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bioseqclass| image:: https://quay.io/repository/biocontainers/bioconductor-bioseqclass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioseqclass







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioseqclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioseqclass/README.html

