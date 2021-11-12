:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatstmtptm'
.. highlight: bash

bioconductor-msstatstmtptm
==========================

.. conda:recipe:: bioconductor-msstatstmtptm
   :replaces_section_title:
   :noindex:

   Post Translational Modification \(PTM\) Significance Analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MSstatsTMTPTM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatstmtptm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmtptm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmtptm/meta.yaml>`_

   Tools for Post Translational Modification \(PTM\) and protein significance analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling. The functions in this package should be used after PTM\/protein summarization. They can be used to both plot the summarized results and model the summarized datasets.


.. conda:package:: bioconductor-msstatstmtptm

   |downloads_bioconductor-msstatstmtptm| |docker_bioconductor-msstatstmtptm|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.2-0``,  ``0.99.3-1``

      

   
   :depends bioconductor-msstatstmt: ``>=2.2.0,<2.3.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatstmtptm

   and update with::

      conda update bioconductor-msstatstmtptm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatstmtptm:<tag>

   (see `bioconductor-msstatstmtptm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatstmtptm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatstmtptm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatstmtptm
   :alt:   (downloads)
.. |docker_bioconductor-msstatstmtptm| image:: https://quay.io/repository/biocontainers/bioconductor-msstatstmtptm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatstmtptm
.. _`bioconductor-msstatstmtptm/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatstmtptm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatstmtptm";
        var versions = ["1.1.2","1.1.2","1.0.2","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatstmtptm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatstmtptm/README.html