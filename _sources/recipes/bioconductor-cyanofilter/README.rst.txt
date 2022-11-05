:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cyanofilter'
.. highlight: bash

bioconductor-cyanofilter
========================

.. conda:recipe:: bioconductor-cyanofilter
   :replaces_section_title:
   :noindex:

   Phytoplankton Population Identification using Cell Pigmentation and\/or Complexity

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cyanoFilter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cyanofilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyanofilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyanofilter/meta.yaml>`_

   An approach to filter out and\/or identify phytoplankton cells from all particles measured via flow cytometry pigment and cell complexity information. It does this using a sequence of one\-dimensional gates on pre\-defined channels measuring certain pigmentation and complexity. The package is especially tuned for cyanobacteria\, but will work fine for phytoplankton communities where there is at least one cell characteristic that differentiates every phytoplankton in the community.


.. conda:package:: bioconductor-cyanofilter

   |downloads_bioconductor-cyanofilter| |docker_bioconductor-cyanofilter|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-flowclust: ``>=3.36.0,<3.37.0``
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-flowdensity: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cytometree: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-mrfdepth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cyanofilter

   and update with::

      conda update bioconductor-cyanofilter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cyanofilter:<tag>

   (see `bioconductor-cyanofilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cyanofilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cyanofilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cyanofilter
   :alt:   (downloads)
.. |docker_bioconductor-cyanofilter| image:: https://quay.io/repository/biocontainers/bioconductor-cyanofilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cyanofilter
.. _`bioconductor-cyanofilter/tags`: https://quay.io/repository/biocontainers/bioconductor-cyanofilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cyanofilter";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cyanofilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cyanofilter/README.html