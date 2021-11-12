:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cllmethylation'
.. highlight: bash

bioconductor-cllmethylation
===========================

.. conda:recipe:: bioconductor-cllmethylation
   :replaces_section_title:
   :noindex:

   Methylation data of primary CLL samples in PACE project

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/CLLmethylation.html
   :license: LGPL
   :recipe: /`bioconductor-cllmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation/meta.yaml>`_

   The package includes DNA methylation data for the primary Chronic Lymphocytic Leukemia samples included in the Primary Blood Cancer Encyclopedia \(PACE\) project. Raw data from the 450k DNA methylation arrays is stored in the European Genome\-Phenome Archive \(EGA\) under accession number EGAS0000100174. For more information concerning the project please refer to the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) and R\/Bioconductor package BloodCancerMultiOmics2017.


.. conda:package:: bioconductor-cllmethylation

   |downloads_bioconductor-cllmethylation| |docker_bioconductor-cllmethylation|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cllmethylation

   and update with::

      conda update bioconductor-cllmethylation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cllmethylation:<tag>

   (see `bioconductor-cllmethylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cllmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cllmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cllmethylation
   :alt:   (downloads)
.. |docker_bioconductor-cllmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-cllmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cllmethylation
.. _`bioconductor-cllmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-cllmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cllmethylation";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html