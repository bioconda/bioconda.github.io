:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lme4qtl'
.. highlight: bash

r-lme4qtl
=========

.. conda:recipe:: r-lme4qtl
   :replaces_section_title:
   :noindex:

   Linear mixed models \(lme4\) with flexible covariance structure for qtl and association analysis.

   :homepage: https://CRAN.R-project.org/package=lme4qtl
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-lme4qtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lme4qtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lme4qtl/meta.yaml>`_

   


.. conda:package:: r-lme4qtl

   |downloads_r-lme4qtl| |docker_r-lme4qtl|

   :versions:
      
      

      ``0.1.10-3``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-kinship2: 
   :depends r-lme4: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lme4qtl

   and update with::

      conda update r-lme4qtl

   or use the docker container::

      docker pull quay.io/biocontainers/r-lme4qtl:<tag>

   (see `r-lme4qtl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lme4qtl| image:: https://img.shields.io/conda/dn/bioconda/r-lme4qtl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lme4qtl
   :alt:   (downloads)
.. |docker_r-lme4qtl| image:: https://quay.io/repository/biocontainers/r-lme4qtl/status
   :target: https://quay.io/repository/biocontainers/r-lme4qtl
.. _`r-lme4qtl/tags`: https://quay.io/repository/biocontainers/r-lme4qtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lme4qtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lme4qtl/README.html