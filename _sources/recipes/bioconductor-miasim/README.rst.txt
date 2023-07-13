:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miasim'
.. highlight: bash

bioconductor-miasim
===================

.. conda:recipe:: bioconductor-miasim
   :replaces_section_title:
   :noindex:

   Microbiome Data Simulation

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miaSim.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-miasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim/meta.yaml>`_

   Microbiome time series simulation with generalized Lotka\-Volterra model\, Self\-Organized Instability \(SOI\)\, and other models. Hubbell\'s Neutral model is used to determine the abundance matrix. The resulting abundance matrix is applied to SummarizedExperiment or TreeSummarizedExperiment objects.


.. conda:package:: bioconductor-miasim

   |downloads_bioconductor-miasim| |docker_bioconductor-miasim|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-desolve: 
   :depends r-powerlaw: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-miasim

   and update with::

      conda update bioconductor-miasim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-miasim:<tag>

   (see `bioconductor-miasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-miasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miasim
   :alt:   (downloads)
.. |docker_bioconductor-miasim| image:: https://quay.io/repository/biocontainers/bioconductor-miasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miasim
.. _`bioconductor-miasim/tags`: https://quay.io/repository/biocontainers/bioconductor-miasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miasim";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miasim/README.html