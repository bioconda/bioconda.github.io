:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-txrevise'
.. highlight: bash

r-txrevise
==========

.. conda:recipe:: r-txrevise
   :replaces_section_title:
   :noindex:

   Construct custom transcript annotations for Salmon and kallisto

   :homepage: https://github.com/kauralasoo/txrevise
   :license: Apache / Apache 2.0
   :recipe: /`r-txrevise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-txrevise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-txrevise/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.41673`

   txrevise R package provides utilites to pre\-process Ensembl transcript annotations to
   quantify differences in transcript strucuture \(alternative promoters\, alternative
   splicing\, alternative poly\-adenylation\) either between experimental conditions or
   genotypes \(e.g. for transcript usage quntitative trait loci \(tuQTL\) mapping\).



.. conda:package:: r-txrevise

   |downloads_r-txrevise| |docker_r-txrevise|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-purrrlyr: 
   :depends r-readr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-txrevise

   and update with::

      conda update r-txrevise

   or use the docker container::

      docker pull quay.io/biocontainers/r-txrevise:<tag>

   (see `r-txrevise/tags`_ for valid values for ``<tag>``)


.. |downloads_r-txrevise| image:: https://img.shields.io/conda/dn/bioconda/r-txrevise.svg?style=flat
   :target: https://anaconda.org/bioconda/r-txrevise
   :alt:   (downloads)
.. |docker_r-txrevise| image:: https://quay.io/repository/biocontainers/r-txrevise/status
   :target: https://quay.io/repository/biocontainers/r-txrevise
.. _`r-txrevise/tags`: https://quay.io/repository/biocontainers/r-txrevise?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-txrevise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-txrevise/README.html