:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hummingbird'
.. highlight: bash

bioconductor-hummingbird
========================

.. conda:recipe:: bioconductor-hummingbird
   :replaces_section_title:
   :noindex:

   Bayesian Hidden Markov Model for the detection of differentially methylated regions

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/hummingbird.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-hummingbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hummingbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hummingbird/meta.yaml>`_

   A package for detecting differential methylation. It exploits a Bayesian hidden Markov model that incorporates location dependence among genomic loci\, unlike most existing methods that assume independence among observations. Bayesian priors are applied to permit information sharing across an entire chromosome for improved power of detection. The direct output of our software package is the best sequence of methylation states\, eliminating the use of a subjective\, and most of the time an arbitrary\, threshold of p\-value for determining significance. At last\, our methodology does not require replication in either or both of the two comparison groups.


.. conda:package:: bioconductor-hummingbird

   |downloads_bioconductor-hummingbird| |docker_bioconductor-hummingbird|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hummingbird

   and update with::

      conda update bioconductor-hummingbird

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hummingbird:<tag>

   (see `bioconductor-hummingbird/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hummingbird| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hummingbird.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hummingbird
   :alt:   (downloads)
.. |docker_bioconductor-hummingbird| image:: https://quay.io/repository/biocontainers/bioconductor-hummingbird/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hummingbird
.. _`bioconductor-hummingbird/tags`: https://quay.io/repository/biocontainers/bioconductor-hummingbird?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hummingbird";
        var versions = ["1.4.0","1.2.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hummingbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hummingbird/README.html