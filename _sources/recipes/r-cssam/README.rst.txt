:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cssam'
.. highlight: bash

r-cssam
=======

.. conda:recipe:: r-cssam
   :replaces_section_title:
   :noindex:

   Cell\-type specific differential expression of a microarray experiment of heterogeneous tissue samples\, using SAM.

   :homepage: https://github.com/shenorrLab/csSAM
   :license: GPL / LGPL
   :recipe: /`r-cssam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.1439`

   


.. conda:package:: r-cssam

   |downloads_r-cssam| |docker_r-cssam|

   :versions:
      
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.0.5``
   :depends r-formula: ``>=1.2_4``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-pkgmaker: ``>=0.32.2``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-rngtools: ``>=1.5.2``
   :depends r-scales: ``>=1.1.1``
   :depends xbioc: ``>=0.1.19``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cssam

   and update with::

      conda update r-cssam

   or use the docker container::

      docker pull quay.io/biocontainers/r-cssam:<tag>

   (see `r-cssam/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cssam| image:: https://img.shields.io/conda/dn/bioconda/r-cssam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cssam
   :alt:   (downloads)
.. |docker_r-cssam| image:: https://quay.io/repository/biocontainers/r-cssam/status
   :target: https://quay.io/repository/biocontainers/r-cssam
.. _`r-cssam/tags`: https://quay.io/repository/biocontainers/r-cssam?tab=tags


.. raw:: html

    <script>
        var package = "r-cssam";
        var versions = ["1.4","1.4","1.4","1.4","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cssam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cssam/README.html