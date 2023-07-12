:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinstability'
.. highlight: bash

bioconductor-genomicinstability
===============================

.. conda:recipe:: bioconductor-genomicinstability
   :replaces_section_title:
   :noindex:

   Genomic Instability estimation for scRNA\-Seq

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/genomicInstability.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinstability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability/meta.yaml>`_

   This package contain functions to run genomic instability analysis \(GIA\) from scRNA\-Seq data. GIA estimates the association between gene expression and genomic location of the coding genes. It uses the aREA algorithm to quantify the enrichment of sets of contiguous genes \(loci\-blocks\) on the gene expression profiles and estimates the Genomic Instability Score \(GIS\) for each analyzed cell.


.. conda:package:: bioconductor-genomicinstability

   |downloads_bioconductor-genomicinstability| |docker_bioconductor-genomicinstability|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-mixtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicinstability

   and update with::

      conda update bioconductor-genomicinstability

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicinstability:<tag>

   (see `bioconductor-genomicinstability/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicinstability| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinstability.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinstability
   :alt:   (downloads)
.. |docker_bioconductor-genomicinstability| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinstability/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinstability
.. _`bioconductor-genomicinstability/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinstability?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinstability";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html