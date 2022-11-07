:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmspc'
.. highlight: bash

bioconductor-rmspc
==================

.. conda:recipe:: bioconductor-rmspc
   :replaces_section_title:
   :noindex:

   Multiple Sample Peak Calling

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/rmspc.html
   :license: GPL-3
   :recipe: /`bioconductor-rmspc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmspc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmspc/meta.yaml>`_

   The rmspc package runs MSPC \(Multiple Sample Peak Calling\) software using R. The analysis of ChIP\-seq samples outputs a number of enriched regions \(commonly known as \"peaks\"\)\, each indicating a protein\-DNA interaction or a specific chromatin modification. When replicate samples are analyzed\, overlapping peaks are expected. This repeated evidence can therefore be used to locally lower the minimum significance required to accept a peak. MSPC uses combined evidence from replicated experiments to evaluate peak calling output\, rescuing peaks\, and reduce false positives. It takes any number of replicates as input and improves sensitivity and specificity of peak calling on each\, and identifies consensus regions between the input samples.


.. conda:package:: bioconductor-rmspc

   |downloads_bioconductor-rmspc| |docker_bioconductor-rmspc|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-processx: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmspc

   and update with::

      conda update bioconductor-rmspc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmspc:<tag>

   (see `bioconductor-rmspc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmspc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmspc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmspc
   :alt:   (downloads)
.. |docker_bioconductor-rmspc| image:: https://quay.io/repository/biocontainers/bioconductor-rmspc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmspc
.. _`bioconductor-rmspc/tags`: https://quay.io/repository/biocontainers/bioconductor-rmspc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmspc";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmspc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmspc/README.html