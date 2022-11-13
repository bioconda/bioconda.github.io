:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methcp'
.. highlight: bash

bioconductor-methcp
===================

.. conda:recipe:: bioconductor-methcp
   :replaces_section_title:
   :noindex:

   Differential methylation anlsysis for bisulfite sequencing data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MethCP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methcp/meta.yaml>`_

   MethCP is a differentially methylated region \(DMR\) detecting method for whole\-genome bisulfite sequencing \(WGBS\) data\, which is applicable for a wide range of experimental designs beyond the two\-group comparisons\, such as time\-course data. MethCP identifies DMRs based on change point detection\, which naturally segments the genome and provides region\-level differential analysis.


.. conda:package:: bioconductor-methcp

   |downloads_bioconductor-methcp| |docker_bioconductor-methcp|

   :versions:
      
      

      ``1.11.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-bsseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dnacopy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-dss: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-methylkit: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methcp

   and update with::

      conda update bioconductor-methcp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methcp:<tag>

   (see `bioconductor-methcp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methcp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methcp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methcp
   :alt:   (downloads)
.. |docker_bioconductor-methcp| image:: https://quay.io/repository/biocontainers/bioconductor-methcp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methcp
.. _`bioconductor-methcp/tags`: https://quay.io/repository/biocontainers/bioconductor-methcp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methcp";
        var versions = ["1.11.0","1.7.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methcp/README.html