:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xde'
.. highlight: bash

bioconductor-xde
================

.. conda:recipe:: bioconductor-xde
   :replaces_section_title:
   :noindex:

   XDE\: a Bayesian hierarchical model for cross\-study analysis of differential gene expression

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/XDE.html
   :license: LGPL-2
   :recipe: /`bioconductor-xde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xde/meta.yaml>`_
   :links: biotools: :biotools:`xde`

   Multi\-level model for cross\-study detection of differential gene expression.


.. conda:package:: bioconductor-xde

   |downloads_bioconductor-xde| |docker_bioconductor-xde|

   :versions:
      
      

      ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genemeta: ``>=1.60.0,<1.61.0``
   :depends bioconductor-mergemaid: ``>=2.59.0,<2.60.0``
   :depends bioconductor-siggenes: ``>=1.62.0,<1.63.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gtools: 
   :depends r-mvtnorm: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xde

   and update with::

      conda update bioconductor-xde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xde:<tag>

   (see `bioconductor-xde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xde
   :alt:   (downloads)
.. |docker_bioconductor-xde| image:: https://quay.io/repository/biocontainers/bioconductor-xde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xde
.. _`bioconductor-xde/tags`: https://quay.io/repository/biocontainers/bioconductor-xde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xde/README.html