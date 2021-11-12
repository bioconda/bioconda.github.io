:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribocrypt'
.. highlight: bash

bioconductor-ribocrypt
======================

.. conda:recipe:: bioconductor-ribocrypt
   :replaces_section_title:
   :noindex:

   Interactive visualization in genomics

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RiboCrypt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ribocrypt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt/meta.yaml>`_

   R Package for interactive visualization and browsing NGS data. It contains a browser for both transcript and genomic coordinate view. In addition a QC and general metaplots are included\, among others differential translation plots and gene expression plots. The package is still under development.


.. conda:package:: bioconductor-ribocrypt

   |downloads_bioconductor-ribocrypt| |docker_bioconductor-ribocrypt|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-orfik: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-plotly: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ribocrypt

   and update with::

      conda update bioconductor-ribocrypt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribocrypt:<tag>

   (see `bioconductor-ribocrypt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribocrypt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribocrypt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribocrypt
   :alt:   (downloads)
.. |docker_bioconductor-ribocrypt| image:: https://quay.io/repository/biocontainers/bioconductor-ribocrypt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribocrypt
.. _`bioconductor-ribocrypt/tags`: https://quay.io/repository/biocontainers/bioconductor-ribocrypt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribocrypt";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html