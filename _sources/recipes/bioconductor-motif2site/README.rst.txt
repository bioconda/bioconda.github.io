:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motif2site'
.. highlight: bash

bioconductor-motif2site
=======================

.. conda:recipe:: bioconductor-motif2site
   :replaces_section_title:
   :noindex:

   Detect binding sites from motifs and ChIP\-seq experiments\, and compare binding sites across conditions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Motif2Site.html
   :license: GPL-2
   :recipe: /`bioconductor-motif2site <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site/meta.yaml>`_

   Detect binding sites using motifs IUPAC sequence or bed coordinates and ChIP\-seq experiments in bed or bam format. Combine\/compare binding sites across experiments\, tissues\, or conditions. All normalization and differential steps are done using TMM\-GLM method. Signal decomposition is done by setting motifs as the centers of the mixture of normal distribution curves.


.. conda:package:: bioconductor-motif2site

   |downloads_bioconductor-motif2site| |docker_bioconductor-motif2site|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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
        var versions = ["1.4.0","1.2.0"];
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