:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gramm4r'
.. highlight: bash

bioconductor-gramm4r
====================

.. conda:recipe:: bioconductor-gramm4r
   :replaces_section_title:

   Generalized correlation analysis and model construction strategy for metabolome and microbiome

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/gramm4R.html
   :license: GPL-2
   :recipe: /`bioconductor-gramm4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gramm4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gramm4r/meta.yaml>`_

   Generalized Correlation Analysis for Metabolome and Microbiome \(GRaMM\)\, for inter\-correlation pairs discovery among metabolome and microbiome.


.. conda:package:: bioconductor-gramm4r

   |downloads_bioconductor-gramm4r| |docker_bioconductor-gramm4r|

   :versions: 1.0.0-0
   
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends bioconductor-phyloseq: >=1.30.0,<1.31.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basictrendline: 
   :depends r-dmwr: 
   :depends r-investr: 
   :depends r-minerva: 
   :depends r-psych: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gramm4r

   and update with::

      conda update bioconductor-gramm4r

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gramm4r:<tag>

   (see `bioconductor-gramm4r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gramm4r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gramm4r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gramm4r
   :alt:   (downloads)
.. |docker_bioconductor-gramm4r| image:: https://quay.io/repository/biocontainers/bioconductor-gramm4r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gramm4r
.. _`bioconductor-gramm4r/tags`: https://quay.io/repository/biocontainers/bioconductor-gramm4r?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gramm4r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gramm4r/README.html