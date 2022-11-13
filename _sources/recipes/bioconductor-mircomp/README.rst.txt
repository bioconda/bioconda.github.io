:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mircomp'
.. highlight: bash

bioconductor-mircomp
====================

.. conda:recipe:: bioconductor-mircomp
   :replaces_section_title:
   :noindex:

   Tools to assess and compare miRNA expression estimatation methods

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miRcomp.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-mircomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp/meta.yaml>`_

   Based on a large miRNA dilution study\, this package provides tools to read in the raw amplification data and use these data to assess the performance of methods that estimate expression from the amplification curves.


.. conda:package:: bioconductor-mircomp

   |downloads_bioconductor-mircomp| |docker_bioconductor-mircomp|

   :versions:
      
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-mircompdata: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mircomp

   and update with::

      conda update bioconductor-mircomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mircomp:<tag>

   (see `bioconductor-mircomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mircomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mircomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mircomp
   :alt:   (downloads)
.. |docker_bioconductor-mircomp| image:: https://quay.io/repository/biocontainers/bioconductor-mircomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mircomp
.. _`bioconductor-mircomp/tags`: https://quay.io/repository/biocontainers/bioconductor-mircomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mircomp";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mircomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mircomp/README.html