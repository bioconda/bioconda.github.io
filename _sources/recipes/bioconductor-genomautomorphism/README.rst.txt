:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomautomorphism'
.. highlight: bash

bioconductor-genomautomorphism
==============================

.. conda:recipe:: bioconductor-genomautomorphism
   :replaces_section_title:
   :noindex:

   Compute the automorphisms between DNA\'s Abelian group representations

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GenomAutomorphism.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomautomorphism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomautomorphism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomautomorphism/meta.yaml>`_

   This is a R package to compute the automorphisms between pairwise aligned DNA sequences represented as elements from a Genomic Abelian group. In a general scenario\, from genomic regions till the whole genomes from a given population \(from any species or close related species\) can be algebraically represented as a direct sum of cyclic groups or more specifically Abelian p\-groups. Basically\, we propose the representation of multiple sequence alignments of length N bp as element of a finite Abelian group created by the direct sum of homocyclic Abelian group of prime\-power order.


.. conda:package:: bioconductor-genomautomorphism

   |downloads_bioconductor-genomautomorphism| |docker_bioconductor-genomautomorphism|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-numbers: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomautomorphism

   and update with::

      conda update bioconductor-genomautomorphism

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomautomorphism:<tag>

   (see `bioconductor-genomautomorphism/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomautomorphism| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomautomorphism.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomautomorphism
   :alt:   (downloads)
.. |docker_bioconductor-genomautomorphism| image:: https://quay.io/repository/biocontainers/bioconductor-genomautomorphism/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomautomorphism
.. _`bioconductor-genomautomorphism/tags`: https://quay.io/repository/biocontainers/bioconductor-genomautomorphism?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomautomorphism";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomautomorphism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomautomorphism/README.html