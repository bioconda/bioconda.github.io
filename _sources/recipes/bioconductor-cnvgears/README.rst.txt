:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvgears'
.. highlight: bash

bioconductor-cnvgears
=====================

.. conda:recipe:: bioconductor-cnvgears
   :replaces_section_title:
   :noindex:

   A Framework of Functions to Combine\, Analize and Interpret CNVs Calling Results

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CNVgears.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvgears <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgears>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgears/meta.yaml>`_

   This package contains a set of functions to perform several type of processing and analysis on CNVs calling pipelines\/algorithms results in an integrated manner and regardless of the raw data type \(SNPs array or NGS\). It provides functions to combine multiple CNV calling results into a single object\, filter them\, compute CNVRs \(CNV Regions\) and inheritance patterns\, detect genic load\, and more. The package is best suited for studies in human family\-based cohorts.


.. conda:package:: bioconductor-cnvgears

   |downloads_bioconductor-cnvgears| |docker_bioconductor-cnvgears|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvgears

   and update with::

      conda update bioconductor-cnvgears

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvgears:<tag>

   (see `bioconductor-cnvgears/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvgears| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgears.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvgears
   :alt:   (downloads)
.. |docker_bioconductor-cnvgears| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgears/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgears
.. _`bioconductor-cnvgears/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvgears?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvgears";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgears/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgears/README.html