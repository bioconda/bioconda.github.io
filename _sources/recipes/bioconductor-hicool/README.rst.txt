:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicool'
.. highlight: bash

bioconductor-hicool
===================

.. conda:recipe:: bioconductor-hicool
   :replaces_section_title:
   :noindex:

   HiCool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HiCool.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicool/meta.yaml>`_

   HiCool provides an R interface to process and normalize Hi\-C paired\-end fastq reads into .\(m\)cool files. .\(m\)cool is a compact\, indexed HDF5 file format specifically tailored for efficiently storing HiC\-based data. On top of processing fastq reads\, HiCool provides a convenient reporting function to generate shareable reports summarizing Hi\-C experiments and including quality controls.


.. conda:package:: bioconductor-hicool

   |downloads_bioconductor-hicool| |docker_bioconductor-hicool|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocio: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hicexperiment: ``>=1.0.0,<1.1.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-plotly: 
   :depends r-reticulate: 
   :depends r-rmarkdown: 
   :depends r-rmdformats: 
   :depends r-sessioninfo: 
   :depends r-stringr: 
   :depends r-vroom: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicool

   and update with::

      conda update bioconductor-hicool

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicool:<tag>

   (see `bioconductor-hicool/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicool.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicool
   :alt:   (downloads)
.. |docker_bioconductor-hicool| image:: https://quay.io/repository/biocontainers/bioconductor-hicool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicool
.. _`bioconductor-hicool/tags`: https://quay.io/repository/biocontainers/bioconductor-hicool?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicool";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicool/README.html