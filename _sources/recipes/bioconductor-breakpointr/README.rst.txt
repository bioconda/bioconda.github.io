:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breakpointr'
.. highlight: bash

bioconductor-breakpointr
========================

.. conda:recipe:: bioconductor-breakpointr
   :replaces_section_title:
   :noindex:

   Find breakpoints in Strand\-seq data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/breakpointR.html
   :license: file LICENSE
   :recipe: /`bioconductor-breakpointr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr/meta.yaml>`_

   This package implements functions for finding breakpoints\, plotting and export of Strand\-seq data.


.. conda:package:: bioconductor-breakpointr

   |downloads_bioconductor-breakpointr| |docker_bioconductor-breakpointr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-breakpointrdata: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breakpointr

   and update with::

      conda update bioconductor-breakpointr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breakpointr:<tag>

   (see `bioconductor-breakpointr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breakpointr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breakpointr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breakpointr
   :alt:   (downloads)
.. |docker_bioconductor-breakpointr| image:: https://quay.io/repository/biocontainers/bioconductor-breakpointr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breakpointr
.. _`bioconductor-breakpointr/tags`: https://quay.io/repository/biocontainers/bioconductor-breakpointr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breakpointr";
        var versions = ["1.10.0","1.8.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html