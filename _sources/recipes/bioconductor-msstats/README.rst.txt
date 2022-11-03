:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstats'
.. highlight: bash

bioconductor-msstats
====================

.. conda:recipe:: bioconductor-msstats
   :replaces_section_title:
   :noindex:

   Protein Significance Analysis in DDA\, SRM and DIA for Label\-free or Label\-based Proteomics Experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MSstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats/meta.yaml>`_
   :links: biotools: :biotools:`msstats`

   A set of tools for statistical relative protein significance analysis in DDA\, SRM and DIA experiments.


.. conda:package:: bioconductor-msstats

   |downloads_bioconductor-msstats| |docker_bioconductor-msstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.6.0-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.22.1-1</code>,  <code>3.22.1-0</code>,  <code>3.22.0-0</code>,  <code>3.20.1-0</code>,  </span></summary>
      

      ``4.6.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.22.1-1``,  ``3.22.1-0``,  ``3.22.0-0``,  ``3.20.1-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.14.1-0``,  ``3.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends bioconductor-msstatsconvert: ``>=1.8.0,<1.9.0``
   :depends bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-lme4: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstats

   and update with::

      conda update bioconductor-msstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstats:<tag>

   (see `bioconductor-msstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstats
   :alt:   (downloads)
.. |docker_bioconductor-msstats| image:: https://quay.io/repository/biocontainers/bioconductor-msstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstats
.. _`bioconductor-msstats/tags`: https://quay.io/repository/biocontainers/bioconductor-msstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstats";
        var versions = ["4.6.0","4.2.0","4.2.0","4.2.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstats/README.html