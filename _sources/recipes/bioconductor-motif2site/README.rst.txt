:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motif2site'
.. highlight: bash

bioconductor-motif2site
=======================

.. conda:recipe:: bioconductor-motif2site
   :replaces_section_title:
   :noindex:

   Detect binding sites from motifs and ChIP\-seq experiments\, and compare binding sites across conditions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Motif2Site.html
   :license: GPL-2
   :recipe: /`bioconductor-motif2site <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site/meta.yaml>`_

   Detect binding sites using motifs IUPAC sequence or bed coordinates and ChIP\-seq experiments in bed or bam format. Combine\/compare binding sites across experiments\, tissues\, or conditions. All normalization and differential steps are done using TMM\-GLM method. Signal decomposition is done by setting motifs as the centers of the mixture of normal distribution curves.


.. conda:package:: bioconductor-motif2site

   |downloads_bioconductor-motif2site| |docker_bioconductor-motif2site|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-mass: 
   :depends r-mixtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motif2site

   and update with::

      conda update bioconductor-motif2site

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motif2site:<tag>

   (see `bioconductor-motif2site/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motif2site| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motif2site.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motif2site
   :alt:   (downloads)
.. |docker_bioconductor-motif2site| image:: https://quay.io/repository/biocontainers/bioconductor-motif2site/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motif2site
.. _`bioconductor-motif2site/tags`: https://quay.io/repository/biocontainers/bioconductor-motif2site?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motif2site";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motif2site/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motif2site/README.html