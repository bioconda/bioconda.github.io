:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ringo'
.. highlight: bash

bioconductor-ringo
==================

.. conda:recipe:: bioconductor-ringo
   :replaces_section_title:
   :noindex:

   R Investigation of ChIP\-chip Oligoarrays

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Ringo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ringo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ringo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ringo/meta.yaml>`_
   :links: biotools: :biotools:`ringo`

   The package Ringo facilitates the primary analysis of ChIP\-chip data. The main functionalities of the package are data read\-in\, quality assessment\, data visualisation and identification of genomic regions showing enrichment in ChIP\-chip. The package has functions to deal with two\-color oligonucleotide microarrays from NimbleGen used in ChIP\-chip projects\, but also contains more general functions for ChIP\-chip data analysis\, given that the data is supplied as RGList \(raw\) or ExpressionSet \(pre\- processed\). The package employs functions from various other packages of the Bioconductor project and provides additional ChIP\-chip\-specific and NimbleGen\-specific functionalities.


.. conda:package:: bioconductor-ringo

   |downloads_bioconductor-ringo| |docker_bioconductor-ringo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-vsn: ``>=3.68.0,<3.69.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ringo

   and update with::

      conda update bioconductor-ringo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ringo:<tag>

   (see `bioconductor-ringo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ringo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ringo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ringo
   :alt:   (downloads)
.. |docker_bioconductor-ringo| image:: https://quay.io/repository/biocontainers/bioconductor-ringo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ringo
.. _`bioconductor-ringo/tags`: https://quay.io/repository/biocontainers/bioconductor-ringo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ringo";
        var versions = ["1.64.0","1.62.0","1.62.0","1.58.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ringo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ringo/README.html