.. title:: Package Recipe 'bioconductor-brainimager'
.. highlight: bash


bioconductor-brainimager
========================

.. conda:recipe:: bioconductor-brainimager
   :replaces_section_title:

   BrainImageR is a package that provides the user with information of where in the human brain their gene set corresponds to. This is provided both as a continuous variable and as a easily\-interpretable image. BrainImageR has additional functionality of identifying approximately when in developmental time that a gene expression dataset corresponds to. Both the spatial gene set enrichment and the developmental time point prediction are assessed in comparison to the Allen Brain Atlas reference data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/brainImageR.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-brainimager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimager/meta.yaml>`_

   


.. conda:package:: bioconductor-brainimager

   |downloads_bioconductor-brainimager| |docker_bioconductor-brainimager|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-randomforest`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-testthat`  

   :required~by: |required_by_bioconductor-brainimager|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainimager

   and update with::

      conda update bioconductor-brainimager

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-brainimager


.. |required_by_bioconductor-brainimager| conda:required_by:: bioconductor-brainimager
.. |downloads_bioconductor-brainimager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainimager.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-brainimager| image:: https://quay.io/repository/biocontainers/bioconductor-brainimager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainimager







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainimager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainimager/README.html

