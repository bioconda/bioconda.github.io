:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bigmelon'
.. highlight: bash

bioconductor-bigmelon
=====================

.. conda:recipe:: bioconductor-bigmelon
   :replaces_section_title:
   :noindex:

   Illumina methylation array analysis for large experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/bigmelon.html
   :license: GPL-3
   :recipe: /`bioconductor-bigmelon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon/meta.yaml>`_

   Methods for working with Illumina arrays using gdsfmt.


.. conda:package:: bioconductor-bigmelon

   |downloads_bioconductor-bigmelon| |docker_bioconductor-bigmelon|

   :versions:
      
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-gdsfmt: ``>=1.34.0,<1.35.0``
   :depends bioconductor-geoquery: ``>=2.66.0,<2.67.0``
   :depends bioconductor-illuminaio: ``>=0.40.0,<0.41.0``
   :depends bioconductor-methylumi: ``>=2.44.0,<2.45.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-watermelon: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bigmelon

   and update with::

      conda update bioconductor-bigmelon

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bigmelon:<tag>

   (see `bioconductor-bigmelon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bigmelon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigmelon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bigmelon
   :alt:   (downloads)
.. |docker_bioconductor-bigmelon| image:: https://quay.io/repository/biocontainers/bioconductor-bigmelon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigmelon
.. _`bioconductor-bigmelon/tags`: https://quay.io/repository/biocontainers/bioconductor-bigmelon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bigmelon";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html