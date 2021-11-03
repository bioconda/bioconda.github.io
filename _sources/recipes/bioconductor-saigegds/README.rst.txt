:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saigegds'
.. highlight: bash

bioconductor-saigegds
=====================

.. conda:recipe:: bioconductor-saigegds
   :replaces_section_title:
   :noindex:

   Scalable Implementation of Generalized mixed models using GDS files in Phenome\-Wide Association Studies

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SAIGEgds.html
   :license: GPL-3
   :recipe: /`bioconductor-saigegds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds/meta.yaml>`_

   Scalable implementation of generalized mixed models with highly optimized C\+\+ implementation and integration with Genomic Data Structure \(GDS\) files. It is designed for single variant tests in large\-scale phenome\-wide association studies \(PheWAS\) with millions of variants and samples\, controlling for sample structure and case\-control imbalance. The implementation is based on the original SAIGE R package \(v0.29.4.4 for single variant tests\, Zhou et al. 2018\). SAIGEgds also implements some of the SPAtest functions in C to speed up the calculation of Saddlepoint approximation. Benchmarks show that SAIGEgds is 5 to 6 times faster than the original SAIGE R package.


.. conda:package:: bioconductor-saigegds

   |downloads_bioconductor-saigegds| |docker_bioconductor-saigegds|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-gdsfmt: ``>=1.30.0,<1.31.0``
   :depends bioconductor-seqarray: ``>=1.34.0,<1.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: ``>=5.0.0``
   :depends r-spatest: ``>=3.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-saigegds

   and update with::

      conda update bioconductor-saigegds

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-saigegds:<tag>

   (see `bioconductor-saigegds/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-saigegds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saigegds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saigegds
   :alt:   (downloads)
.. |docker_bioconductor-saigegds| image:: https://quay.io/repository/biocontainers/bioconductor-saigegds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saigegds
.. _`bioconductor-saigegds/tags`: https://quay.io/repository/biocontainers/bioconductor-saigegds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saigegds";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saigegds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saigegds/README.html