:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsr'
.. highlight: bash

bioconductor-macsr
==================

.. conda:recipe:: bioconductor-macsr
   :replaces_section_title:
   :noindex:

   MACS\: Model\-based Analysis for ChIP\-Seq

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MACSr.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-macsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr/meta.yaml>`_

   The Model\-based Analysis of ChIP\-Seq \(MACS\) is a widely used toolkit for identifying transcript factor binding sites. This package is an R wrapper of the lastest MACS3.


.. conda:package:: bioconductor-macsr

   |downloads_bioconductor-macsr| |docker_bioconductor-macsr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-basilisk: ``>=1.9.0,<1.10.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macsr

   and update with::

      conda update bioconductor-macsr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macsr:<tag>

   (see `bioconductor-macsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsr
   :alt:   (downloads)
.. |docker_bioconductor-macsr| image:: https://quay.io/repository/biocontainers/bioconductor-macsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsr
.. _`bioconductor-macsr/tags`: https://quay.io/repository/biocontainers/bioconductor-macsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macsr";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsr/README.html