:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgardenerdata'
.. highlight: bash

bioconductor-plotgardenerdata
=============================

.. conda:recipe:: bioconductor-plotgardenerdata
   :replaces_section_title:
   :noindex:

   Datasets and test data files for the plotgardener package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/plotgardenerData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-plotgardenerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardenerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardenerdata/meta.yaml>`_

   This is a supplemental data package for the plotgardener package. Includes example datasets used in plotgardener vignettes and example raw data files. For details on how to use these datasets\, see the plotgardener package vignettes.


.. conda:package:: bioconductor-plotgardenerdata

   |downloads_bioconductor-plotgardenerdata| |docker_bioconductor-plotgardenerdata|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plotgardenerdata

   and update with::

      conda update bioconductor-plotgardenerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plotgardenerdata:<tag>

   (see `bioconductor-plotgardenerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plotgardenerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgardenerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plotgardenerdata
   :alt:   (downloads)
.. |docker_bioconductor-plotgardenerdata| image:: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata
.. _`bioconductor-plotgardenerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plotgardenerdata";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plotgardenerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plotgardenerdata/README.html