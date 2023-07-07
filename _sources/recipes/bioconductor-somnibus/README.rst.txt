:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somnibus'
.. highlight: bash

bioconductor-somnibus
=====================

.. conda:recipe:: bioconductor-somnibus
   :replaces_section_title:
   :noindex:

   Smooth modeling of bisulfite sequencing

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SOMNiBUS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somnibus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somnibus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somnibus/meta.yaml>`_

   This package aims to analyse count\-based methylation data on predefined genomic regions\, such as those obtained by targeted sequencing\, and thus to identify differentially methylated regions \(DMRs\) that are associated with phenotypes or traits. The method is built a rich flexible model that allows for the effects\, on the methylation levels\, of multiple covariates to vary smoothly along genomic regions. At the same time\, this method also allows for sequencing errors and can adjust for variability in cell type mixture.


.. conda:package:: bioconductor-somnibus

   |downloads_bioconductor-somnibus| |docker_bioconductor-somnibus|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-somnibus

   and update with::

      conda update bioconductor-somnibus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-somnibus:<tag>

   (see `bioconductor-somnibus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-somnibus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somnibus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somnibus
   :alt:   (downloads)
.. |docker_bioconductor-somnibus| image:: https://quay.io/repository/biocontainers/bioconductor-somnibus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somnibus
.. _`bioconductor-somnibus/tags`: https://quay.io/repository/biocontainers/bioconductor-somnibus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-somnibus";
        var versions = ["1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somnibus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somnibus/README.html