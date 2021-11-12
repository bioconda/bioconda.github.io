:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-toast'
.. highlight: bash

bioconductor-toast
==================

.. conda:recipe:: bioconductor-toast
   :replaces_section_title:
   :noindex:

   Tools for the analysis of heterogeneous tissues

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TOAST.html
   :license: GPL-2
   :recipe: /`bioconductor-toast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toast/meta.yaml>`_

   This package is devoted to analyzing high\-throughput data \(e.g. gene expression microarray\, DNA methylation microarray\, RNA\-seq\) from complex tissues. Current functionalities include 1. detect cell\-type specific or cross\-cell type differential signals 2. improve variable selection in reference\-free deconvolution 3. partial reference\-free deconvolution with prior knowledge.


.. conda:package:: bioconductor-toast

   |downloads_bioconductor-toast| |docker_bioconductor-toast|

   :versions:
      
      

      ``1.7.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-epidish: ``>=2.10.0,<2.11.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corpcor: 
   :depends r-nnls: 
   :depends r-reffreeewas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-toast

   and update with::

      conda update bioconductor-toast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-toast:<tag>

   (see `bioconductor-toast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-toast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-toast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-toast
   :alt:   (downloads)
.. |docker_bioconductor-toast| image:: https://quay.io/repository/biocontainers/bioconductor-toast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-toast
.. _`bioconductor-toast/tags`: https://quay.io/repository/biocontainers/bioconductor-toast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-toast";
        var versions = ["1.7.1","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-toast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-toast/README.html