:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dinamic.duo'
.. highlight: bash

r-dinamic.duo
=============

.. conda:recipe:: r-dinamic.duo
   :replaces_section_title:
   :noindex:

   In tumor tissue\, underlying genomic instability can lead to DNA copy number alterations\, e.g.\, copy number gains or losses. Sporadic copy number alterations occur randomly throughout the genome\, whereas recurrent alterations are observed in the same genomic region across multiple independent samples\, perhaps because they provide a selective growth advantage. Here we use cyclic shift permutations to identify recurrent copy number alterations in a single cohort or recurrent copy number differences in two cohorts based on a common set of genomic markers. Additional functionality is provided to perform downstream analyses\, including the creation of summary files and graphics. DiNAMIC.Duo builds upon the original DiNAMIC package of Walter et al. \(2011\) \<doi\:10.1093\/bioinformatics\/btq717\> and leverages the theory developed in Walter et al. \(2015\) \<doi\:10.1093\/biomet\/asv046\>. A manuscript based on DiNAMIC.Duo is currently under development.

   :homepage: https://CRAN.R-project.org/package=DiNAMIC.Duo
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-dinamic.duo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dinamic.duo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dinamic.duo/meta.yaml>`_

   


.. conda:package:: r-dinamic.duo

   |downloads_r-dinamic.duo| |docker_r-dinamic.duo|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-biomart: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dinamic: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dinamic.duo

   and update with::

      conda update r-dinamic.duo

   or use the docker container::

      docker pull quay.io/biocontainers/r-dinamic.duo:<tag>

   (see `r-dinamic.duo/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dinamic.duo| image:: https://img.shields.io/conda/dn/bioconda/r-dinamic.duo.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dinamic.duo
   :alt:   (downloads)
.. |docker_r-dinamic.duo| image:: https://quay.io/repository/biocontainers/r-dinamic.duo/status
   :target: https://quay.io/repository/biocontainers/r-dinamic.duo
.. _`r-dinamic.duo/tags`: https://quay.io/repository/biocontainers/r-dinamic.duo?tab=tags


.. raw:: html

    <script>
        var package = "r-dinamic.duo";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dinamic.duo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dinamic.duo/README.html