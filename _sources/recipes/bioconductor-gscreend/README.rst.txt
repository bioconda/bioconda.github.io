:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gscreend'
.. highlight: bash

bioconductor-gscreend
=====================

.. conda:recipe:: bioconductor-gscreend
   :replaces_section_title:
   :noindex:

   Analysis of pooled genetic screens

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/gscreend.html
   :license: GPL-3
   :recipe: /`bioconductor-gscreend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gscreend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gscreend/meta.yaml>`_

   Package for the analysis of pooled genetic screens \(e.g. CRISPR\-KO\). The analysis of such screens is based on the comparison of gRNA abundances before and after a cell proliferation phase. The gscreend packages takes gRNA counts as input and allows detection of genes whose knockout decreases or increases cell proliferation.


.. conda:package:: bioconductor-gscreend

   |downloads_bioconductor-gscreend| |docker_bioconductor-gscreend|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fgarch: 
   :depends r-nloptr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gscreend

   and update with::

      conda update bioconductor-gscreend

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gscreend:<tag>

   (see `bioconductor-gscreend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gscreend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gscreend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gscreend
   :alt:   (downloads)
.. |docker_bioconductor-gscreend| image:: https://quay.io/repository/biocontainers/bioconductor-gscreend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gscreend
.. _`bioconductor-gscreend/tags`: https://quay.io/repository/biocontainers/bioconductor-gscreend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gscreend";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gscreend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gscreend/README.html