:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-breakaway'
.. highlight: bash

r-breakaway
===========

.. conda:recipe:: r-breakaway
   :replaces_section_title:
   :noindex:

   Understanding the drivers of microbial diversity is an important frontier of microbial ecology\, and investigating the diversity of samples from microbial ecosystems is a common step in any microbiome analysis. \'breakaway\' is the premier package for statistical analysis of microbial diversity. \'breakaway\' implements the latest and greatest estimates of species richness\, as well as the most commonly used estimates. Methods uniquely available in this package include objective Bayes estimators described in Barger and Bunge \(2010\) \<doi\:10.1214\/10\-BA527\>\, frequency\-ratio\-based estimators described in Willis and Bunge \(2015\) \<doi\:10.1111\/biom.12332\>\, and as described in Willis\, Whitman\, and Bunge \(2016\) \<doi\:10.1111\/rssc.12206\>\, a linear modeling approach for detecting changes in diversity.

   :homepage: https://adw96.github.io/breakaway/
   :license: GPL2 / GPL-2
   :recipe: /`r-breakaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway/meta.yaml>`_

   


.. conda:package:: r-breakaway

   |downloads_r-breakaway| |docker_r-breakaway|

   :versions:
      
      

      ``4.7.9-2``,  ``4.7.9-1``,  ``4.7.9-0``,  ``3.0-0``

      

   
   :depends bioconductor-phyloseq: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-breakaway

   and update with::

      conda update r-breakaway

   or use the docker container::

      docker pull quay.io/biocontainers/r-breakaway:<tag>

   (see `r-breakaway/tags`_ for valid values for ``<tag>``)


.. |downloads_r-breakaway| image:: https://img.shields.io/conda/dn/bioconda/r-breakaway.svg?style=flat
   :target: https://anaconda.org/bioconda/r-breakaway
   :alt:   (downloads)
.. |docker_r-breakaway| image:: https://quay.io/repository/biocontainers/r-breakaway/status
   :target: https://quay.io/repository/biocontainers/r-breakaway
.. _`r-breakaway/tags`: https://quay.io/repository/biocontainers/r-breakaway?tab=tags


.. raw:: html

    <script>
        var package = "r-breakaway";
        var versions = ["4.7.9","4.7.9","4.7.9","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-breakaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-breakaway/README.html