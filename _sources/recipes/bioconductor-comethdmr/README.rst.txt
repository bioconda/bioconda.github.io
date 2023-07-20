:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comethdmr'
.. highlight: bash

bioconductor-comethdmr
======================

.. conda:recipe:: bioconductor-comethdmr
   :replaces_section_title:
   :noindex:

   Accurate identification of co\-methylated and differentially methylated regions in epigenome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/coMethDMR.html
   :license: GPL-3
   :recipe: /`bioconductor-comethdmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr/meta.yaml>`_

   coMethDMR identifies genomic regions associated with continuous phenotypes by optimally leverages covariations among CpGs within predefined genomic regions. Instead of testing all CpGs within a genomic region\, coMethDMR carries out an additional step that selects co\-methylated sub\-regions first without using any outcome information. Next\, coMethDMR tests association between methylation within the sub\-region and continuous phenotype using a random coefficient mixed effects model\, which models both variations between CpG sites within the region and differential methylation simultaneously.


.. conda:package:: bioconductor-comethdmr

   |downloads_bioconductor-comethdmr| |docker_bioconductor-comethdmr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bumphunter: ``>=1.42.0,<1.43.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lmertest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-comethdmr

   and update with::

      conda update bioconductor-comethdmr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-comethdmr:<tag>

   (see `bioconductor-comethdmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-comethdmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comethdmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comethdmr
   :alt:   (downloads)
.. |docker_bioconductor-comethdmr| image:: https://quay.io/repository/biocontainers/bioconductor-comethdmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comethdmr
.. _`bioconductor-comethdmr/tags`: https://quay.io/repository/biocontainers/bioconductor-comethdmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-comethdmr";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html