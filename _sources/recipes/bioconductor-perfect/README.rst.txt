:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-perfect'
.. highlight: bash

bioconductor-perfect
====================

.. conda:recipe:: bioconductor-perfect
   :replaces_section_title:
   :noindex:

   Permutation filtration for microbiome data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PERFect.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-perfect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perfect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perfect/meta.yaml>`_

   PERFect is a novel permutation filtering approach designed to address two unsolved problems in microbiome data processing\: \(i\) define and quantify loss due to filtering by implementing thresholds\, and \(ii\) introduce and evaluate a permutation test for filtering loss to provide a measure of excessive filtering.


.. conda:package:: bioconductor-perfect

   |downloads_bioconductor-perfect| |docker_bioconductor-perfect|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fitdistrplus: ``>=1.0.12``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-matrix: ``>=1.2.14``
   :depends r-psych: ``>=1.8.4``
   :depends r-sn: ``>=1.5.2``
   :depends r-zoo: ``>=1.8.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-perfect

   and update with::

      conda update bioconductor-perfect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-perfect:<tag>

   (see `bioconductor-perfect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-perfect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-perfect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-perfect
   :alt:   (downloads)
.. |docker_bioconductor-perfect| image:: https://quay.io/repository/biocontainers/bioconductor-perfect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-perfect
.. _`bioconductor-perfect/tags`: https://quay.io/repository/biocontainers/bioconductor-perfect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-perfect";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-perfect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-perfect/README.html