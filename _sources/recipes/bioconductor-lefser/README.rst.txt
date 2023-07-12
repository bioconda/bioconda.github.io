:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lefser'
.. highlight: bash

bioconductor-lefser
===================

.. conda:recipe:: bioconductor-lefser
   :replaces_section_title:
   :noindex:

   R implementation of the LEfSE method for microbiome biomarker discovery

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/lefser.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lefser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lefser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lefser/meta.yaml>`_

   lefser is an implementation in R of the popular \"LDA Effect Size \(LEfSe\)\" method for microbiome biomarker discovery. It uses the Kruskal\-Wallis test\, Wilcoxon\-Rank Sum test\, and Linear Discriminant Analysis to find biomarkers of groups and sub\-groups.


.. conda:package:: bioconductor-lefser

   |downloads_bioconductor-lefser| |docker_bioconductor-lefser|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coin: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lefser

   and update with::

      conda update bioconductor-lefser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lefser:<tag>

   (see `bioconductor-lefser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lefser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lefser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lefser
   :alt:   (downloads)
.. |docker_bioconductor-lefser| image:: https://quay.io/repository/biocontainers/bioconductor-lefser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lefser
.. _`bioconductor-lefser/tags`: https://quay.io/repository/biocontainers/bioconductor-lefser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lefser";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lefser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lefser/README.html