:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sapfinder'
.. highlight: bash

bioconductor-sapfinder
======================

.. conda:recipe:: bioconductor-sapfinder
   :replaces_section_title:

   sapFinder is developed to automate \(1\) variation\-associated database construction\, \(2\) database searching\, \(3\) post\-processing\, \(4\) HTML\-based report generation in shotgun proteomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sapFinder.html
   :license: GPL-2
   :recipe: /`bioconductor-sapfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sapfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sapfinder/meta.yaml>`_

   


.. conda:package:: bioconductor-sapfinder

   |downloads_bioconductor-sapfinder| |docker_bioconductor-sapfinder|

   :versions: 1.20.1-0, 1.20.0-0
   
   :depends bioconductor-rtandem: >=1.22.0,<1.23.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-pheatmap: 
   
   :depends r-rcpp: >=0.10.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sapfinder

   and update with::

      conda update bioconductor-sapfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sapfinder:<tag>

   (see `bioconductor-sapfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sapfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sapfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sapfinder| image:: https://quay.io/repository/biocontainers/bioconductor-sapfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sapfinder
.. _`bioconductor-sapfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-sapfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sapfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sapfinder/README.html