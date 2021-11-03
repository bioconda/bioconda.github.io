:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vc'
.. highlight: bash

bioconductor-h5vc
=================

.. conda:recipe:: bioconductor-h5vc
   :replaces_section_title:
   :noindex:

   Managing alignment tallies using a hdf5 backend

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/h5vc.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc/meta.yaml>`_

   This package contains functions to interact with tally data from NGS experiments that is stored in HDF5 files.


.. conda:package:: bioconductor-h5vc

   |downloads_bioconductor-h5vc| |docker_bioconductor-h5vc|

   :versions:
      
      

      ``2.28.0-0``,  ``2.26.1-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-1``,  ``2.16.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-h5vcdata: ``>=2.14.0,<2.15.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-batchjobs: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-h5vc

   and update with::

      conda update bioconductor-h5vc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vc:<tag>

   (see `bioconductor-h5vc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5vc
   :alt:   (downloads)
.. |docker_bioconductor-h5vc| image:: https://quay.io/repository/biocontainers/bioconductor-h5vc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vc
.. _`bioconductor-h5vc/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h5vc";
        var versions = ["2.28.0","2.26.1","2.24.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vc/README.html