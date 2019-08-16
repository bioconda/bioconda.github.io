:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-igvr'
.. highlight: bash

bioconductor-igvr
=================

.. conda:recipe:: bioconductor-igvr
   :replaces_section_title:

   Access to igv.js\, the Integrative Genomics Viewer running in a web browser.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/igvR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-igvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igvr/meta.yaml>`_

   


.. conda:package:: bioconductor-igvr

   |downloads_bioconductor-igvr| |docker_bioconductor-igvr|

   :versions: 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-browserviz: >=2.6.0,<2.7.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-variantannotation: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-httpuv: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-igvr

   and update with::

      conda update bioconductor-igvr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-igvr:<tag>

   (see `bioconductor-igvr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-igvr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-igvr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-igvr
   :alt:   (downloads)
.. |docker_bioconductor-igvr| image:: https://quay.io/repository/biocontainers/bioconductor-igvr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-igvr
.. _`bioconductor-igvr/tags`: https://quay.io/repository/biocontainers/bioconductor-igvr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-igvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-igvr/README.html