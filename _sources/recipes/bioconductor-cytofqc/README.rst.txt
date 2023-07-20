:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofqc'
.. highlight: bash

bioconductor-cytofqc
====================

.. conda:recipe:: bioconductor-cytofqc
   :replaces_section_title:
   :noindex:

   Labels normalized cells for CyTOF data and assigns probabilities for each label

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cytofQC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytofqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc/meta.yaml>`_

   cytofQC is a package for initial cleaning of CyTOF data. It uses a semi\-supervised approach for labeling cells with their most likely data type \(bead\, doublet\, debris\, dead\) and the probability that they belong to each label type. This package does not remove data from the dataset\, but provides labels and information to aid the data user in cleaning their data. Our algorithm is able to distinguish between doublets and large cells.


.. conda:package:: bioconductor-cytofqc

   |downloads_bioconductor-cytofqc| |docker_bioconductor-cytofqc|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-catalyst: ``>=1.24.0,<1.25.0``
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-eztune: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-hrbrthemes: 
   :depends r-matrixstats: 
   :depends r-randomforest: 
   :depends r-rmarkdown: 
   :depends r-ssc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytofqc

   and update with::

      conda update bioconductor-cytofqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytofqc:<tag>

   (see `bioconductor-cytofqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytofqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofqc
   :alt:   (downloads)
.. |docker_bioconductor-cytofqc| image:: https://quay.io/repository/biocontainers/bioconductor-cytofqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofqc
.. _`bioconductor-cytofqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofqc";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html