:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lineagespot'
.. highlight: bash

bioconductor-lineagespot
========================

.. conda:recipe:: bioconductor-lineagespot
   :replaces_section_title:
   :noindex:

   Detection of SARS\-CoV\-2 lineages in wastewater samples using next\-generation sequencing

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/lineagespot.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lineagespot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagespot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagespot/meta.yaml>`_

   Lineagespot is a framework written in R\, and aims to identify SARS\-CoV\-2 related mutations based on a single \(or a list\) of variant\(s\) file\(s\) \(i.e.\, variant calling format\). The method can facilitate the detection of SARS\-CoV\-2 lineages in wastewater samples using next generation sequencing\, and attempts to infer the potential distribution of the SARS\-CoV\-2 lineages.


.. conda:package:: bioconductor-lineagespot

   |downloads_bioconductor-lineagespot| |docker_bioconductor-lineagespot|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-matrixgenerics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lineagespot

   and update with::

      conda update bioconductor-lineagespot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lineagespot:<tag>

   (see `bioconductor-lineagespot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lineagespot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagespot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lineagespot
   :alt:   (downloads)
.. |docker_bioconductor-lineagespot| image:: https://quay.io/repository/biocontainers/bioconductor-lineagespot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagespot
.. _`bioconductor-lineagespot/tags`: https://quay.io/repository/biocontainers/bioconductor-lineagespot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lineagespot";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagespot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagespot/README.html