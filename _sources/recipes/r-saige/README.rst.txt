:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-saige'
.. highlight: bash

r-saige
=======

.. conda:recipe:: r-saige
   :replaces_section_title:
   :noindex:

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized mixed model \(Chen\, H. et al. 2016\)

   :homepage: https://github.com/weizhouUMICH/SAIGE
   :license: GPL3 / GNU GPL
   :recipe: /`r-saige <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige/meta.yaml>`_

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized
   mixed model \(Chen\, H. et al. 2016\). It accounts for sample relatedness and is
   feasible for genetic association tests in large cohorts and biobanks \(N \> 400000\).



.. conda:package:: r-saige

   |downloads_r-saige| |docker_r-saige|

   :versions:
      
      

      ``0.43.0-0``,  ``0.42.1-1``,  ``0.42.1-0``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.39.0-1``,  ``0.39.0-0``,  ``0.35.8.8-1``,  ``0.35.8.8-0``

      

   
   :depends bgenix: ``1.1.4.*``
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: 
   :depends libgfortran4: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-spatest: ``3.1.2.*``
   :depends savvy: 
   :depends sqlite: ``>=3.33.0,<4.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :depends zstd: ``>=1.4.5,<1.5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-saige

   and update with::

      conda update r-saige

   or use the docker container::

      docker pull quay.io/biocontainers/r-saige:<tag>

   (see `r-saige/tags`_ for valid values for ``<tag>``)


.. |downloads_r-saige| image:: https://img.shields.io/conda/dn/bioconda/r-saige.svg?style=flat
   :target: https://anaconda.org/bioconda/r-saige
   :alt:   (downloads)
.. |docker_r-saige| image:: https://quay.io/repository/biocontainers/r-saige/status
   :target: https://quay.io/repository/biocontainers/r-saige
.. _`r-saige/tags`: https://quay.io/repository/biocontainers/r-saige?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-saige/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-saige/README.html