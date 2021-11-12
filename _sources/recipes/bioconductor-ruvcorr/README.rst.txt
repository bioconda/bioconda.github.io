:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvcorr'
.. highlight: bash

bioconductor-ruvcorr
====================

.. conda:recipe:: bioconductor-ruvcorr
   :replaces_section_title:
   :noindex:

   Removal of unwanted variation for gene\-gene correlations and related analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RUVcorr.html
   :license: GPL-2
   :recipe: /`bioconductor-ruvcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr/meta.yaml>`_

   RUVcorr allows to apply global removal of unwanted variation \(ridged version of RUV\) to real and simulated gene expression data.


.. conda:package:: bioconductor-ruvcorr

   |downloads_bioconductor-ruvcorr| |docker_bioconductor-ruvcorr|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-bladderbatch: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corrplot: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-psych: 
   :depends r-reshape2: 
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvcorr

   and update with::

      conda update bioconductor-ruvcorr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvcorr:<tag>

   (see `bioconductor-ruvcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvcorr
   :alt:   (downloads)
.. |docker_bioconductor-ruvcorr| image:: https://quay.io/repository/biocontainers/bioconductor-ruvcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvcorr
.. _`bioconductor-ruvcorr/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvcorr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvcorr";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html