:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msa'
.. highlight: bash

bioconductor-msa
================

.. conda:recipe:: bioconductor-msa
   :replaces_section_title:
   :noindex:

   Multiple Sequence Alignment

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/msa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa/meta.yaml>`_

   The \'msa\' package provides a unified R\/Bioconductor interface to the multiple sequence alignment algorithms ClustalW\, ClustalOmega\, and Muscle. All three algorithms are integrated in the package\, therefore\, they do not depend on any external software tools and are available for all major platforms. The multiple sequence alignment algorithms are complemented by a function for pretty\-printing multiple sequence alignments using the LaTeX package TeXshade.


.. conda:package:: bioconductor-msa

   |downloads_bioconductor-msa| |docker_bioconductor-msa|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.11.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msa

   and update with::

      conda update bioconductor-msa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msa:<tag>

   (see `bioconductor-msa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msa
   :alt:   (downloads)
.. |docker_bioconductor-msa| image:: https://quay.io/repository/biocontainers/bioconductor-msa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa
.. _`bioconductor-msa/tags`: https://quay.io/repository/biocontainers/bioconductor-msa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msa";
        var versions = ["1.26.0","1.26.0","1.24.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa/README.html