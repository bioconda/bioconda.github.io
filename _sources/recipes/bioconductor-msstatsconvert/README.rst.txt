:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsconvert'
.. highlight: bash

bioconductor-msstatsconvert
===========================

.. conda:recipe:: bioconductor-msstatsconvert
   :replaces_section_title:
   :noindex:

   Import Data from Various Mass Spectrometry Signal Processing Tools to MSstats Format

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MSstatsConvert.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsconvert/meta.yaml>`_

   MSstatsConvert provides tools for importing reports of Mass Spectrometry data processing tools into R format suitable for statistical analysis using the MSstats and MSstatsTMT packages.


.. conda:package:: bioconductor-msstatsconvert

   |downloads_bioconductor-msstatsconvert| |docker_bioconductor-msstatsconvert|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-log4r: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsconvert

   and update with::

      conda update bioconductor-msstatsconvert

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsconvert:<tag>

   (see `bioconductor-msstatsconvert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsconvert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsconvert
   :alt:   (downloads)
.. |docker_bioconductor-msstatsconvert| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert
.. _`bioconductor-msstatsconvert/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsconvert";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsconvert/README.html