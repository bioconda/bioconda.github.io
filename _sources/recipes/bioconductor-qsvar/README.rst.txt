:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsvar'
.. highlight: bash

bioconductor-qsvar
==================

.. conda:recipe:: bioconductor-qsvar
   :replaces_section_title:
   :noindex:

   Generate Quality Surrogate Variable Analysis for Degradation Correction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/qsvaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qsvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar/meta.yaml>`_

   The qsvaR package contains functions for removing the effect of degration in rna\-seq data from postmortem brain tissue. The package is equipped to help users generate principal components associated with degradation. The components can be used in differential expression analysis to remove the effects of degradation.


.. conda:package:: bioconductor-qsvar

   |downloads_bioconductor-qsvar| |docker_bioconductor-qsvar|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qsvar

   and update with::

      conda update bioconductor-qsvar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsvar:<tag>

   (see `bioconductor-qsvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsvar
   :alt:   (downloads)
.. |docker_bioconductor-qsvar| image:: https://quay.io/repository/biocontainers/bioconductor-qsvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsvar
.. _`bioconductor-qsvar/tags`: https://quay.io/repository/biocontainers/bioconductor-qsvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsvar";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsvar/README.html