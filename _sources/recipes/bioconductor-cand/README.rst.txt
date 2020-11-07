:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cand'
.. highlight: bash

bioconductor-cand
=================

.. conda:recipe:: bioconductor-cand
   :replaces_section_title:
   :noindex:

   Perform Chromosomal Ancestry Differences \(CAnD\) Analyses

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CAnD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cand/meta.yaml>`_
   :links: biotools: :biotools:`cand`, doi: :doi:`10.1534/genetics.115.184184`

   Functions to perform the CAnD test on a set of ancestry proportions. For a particular ancestral subpopulation\, a user will supply the estimated ancestry proportion for each sample\, and each chromosome or chromosomal segment of interest. A p\-value for each chromosome as well as an overall CAnD p\-value will be returned for each test. Plotting functions are also available.


.. conda:package:: bioconductor-cand

   |downloads_bioconductor-cand| |docker_bioconductor-cand|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cand

   and update with::

      conda update bioconductor-cand

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cand:<tag>

   (see `bioconductor-cand/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cand| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cand.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cand
   :alt:   (downloads)
.. |docker_bioconductor-cand| image:: https://quay.io/repository/biocontainers/bioconductor-cand/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cand
.. _`bioconductor-cand/tags`: https://quay.io/repository/biocontainers/bioconductor-cand?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cand/README.html