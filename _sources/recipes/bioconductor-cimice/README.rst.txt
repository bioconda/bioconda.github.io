:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cimice'
.. highlight: bash

bioconductor-cimice
===================

.. conda:recipe:: bioconductor-cimice
   :replaces_section_title:
   :noindex:

   CIMICE\-R\: \(Markov\) Chain Method to Inferr Cancer Evolution

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CIMICE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cimice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice/meta.yaml>`_

   CIMICE is a tool in the field of tumor phylogenetics and its goal is to build a Markov Chain \(called Cancer Progression Markov Chain\, CPMC\) in order to model tumor subtypes evolution. The input of CIMICE is a Mutational Matrix\, so a boolean matrix representing altered genes in a collection of samples. These samples are assumed to be obtained with single\-cell DNA analysis techniques and the tool is specifically written to use the peculiarities of this data for the CMPC construction.


.. conda:package:: bioconductor-cimice

   |downloads_bioconductor-cimice| |docker_bioconductor-cimice|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-maftools: ``>=2.10.0,<2.11.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggcorrplot: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glue: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-networkd3: 
   :depends r-purrr: 
   :depends r-relations: 
   :depends r-tidyr: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cimice

   and update with::

      conda update bioconductor-cimice

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cimice:<tag>

   (see `bioconductor-cimice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cimice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cimice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cimice
   :alt:   (downloads)
.. |docker_bioconductor-cimice| image:: https://quay.io/repository/biocontainers/bioconductor-cimice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cimice
.. _`bioconductor-cimice/tags`: https://quay.io/repository/biocontainers/bioconductor-cimice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cimice";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cimice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cimice/README.html