:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qtlseqr'
.. highlight: bash

r-qtlseqr
=========

.. conda:recipe:: r-qtlseqr
   :replaces_section_title:
   :noindex:

   QTLseqr is an R package for QTL mapping using NGS Bulk Segregant Analysis.

   :homepage: https://github.com/bmansfeld/QTLseqr
   :license: GPL (>= 3)
   :recipe: /`r-qtlseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr/meta.yaml>`_

   


.. conda:package:: r-qtlseqr

   |downloads_r-qtlseqr| |docker_r-qtlseqr|

   :versions:
      
      

      ``0.7.5.2-6``,  ``0.7.5.2-5``,  ``0.7.5.2-4``,  ``0.7.5.2-3``,  ``0.7.5.2-2``,  ``0.7.5.2-1``,  ``0.7.5.2-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-modeest: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qtlseqr

   and update with::

      conda update r-qtlseqr

   or use the docker container::

      docker pull quay.io/biocontainers/r-qtlseqr:<tag>

   (see `r-qtlseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qtlseqr| image:: https://img.shields.io/conda/dn/bioconda/r-qtlseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qtlseqr
   :alt:   (downloads)
.. |docker_r-qtlseqr| image:: https://quay.io/repository/biocontainers/r-qtlseqr/status
   :target: https://quay.io/repository/biocontainers/r-qtlseqr
.. _`r-qtlseqr/tags`: https://quay.io/repository/biocontainers/r-qtlseqr?tab=tags


.. raw:: html

    <script>
        var package = "r-qtlseqr";
        var versions = ["0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qtlseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qtlseqr/README.html