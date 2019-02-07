.. title:: Package Recipe 'bioconductor-flowmap'
.. highlight: bash


bioconductor-flowmap
====================

.. conda:recipe:: bioconductor-flowmap
   :replaces_section_title:

   flowMap quantifies the similarity of cell populations across multiple flow cytometry samples using a nonparametric multivariate statistical test. The method is able to map cell populations of different size\, shape\, and proportion across multiple flow cytometry samples. The algorithm can be incorporate in any flow cytometry work flow that requires accurat quantification of similarity between cell populations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowMap.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-flowmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmap/meta.yaml>`_
   :links: biotools: :biotools:`flowmap`, doi: :doi:`10.1002/cyto.a.22735`

   


.. conda:package:: bioconductor-flowmap

   |downloads_bioconductor-flowmap| |docker_bioconductor-flowmap|

   :versions: 1.20.1, 1.18.0, 1.14.0

   :depends: :conda:package:`r-abind` >=1.4.0 :conda:package:`r-ade4` >=1.5-2 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel` >=1.0.3 :conda:package:`r-matrix` >=1.1-4 :conda:package:`r-reshape2` >=1.2.2 :conda:package:`r-scales` >=0.2.3 

   :required~by: |required_by_bioconductor-flowmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowmap

   and update with::

      conda update bioconductor-flowmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowmap


.. |required_by_bioconductor-flowmap| conda:required_by:: bioconductor-flowmap
.. |downloads_bioconductor-flowmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowmap| image:: https://quay.io/repository/biocontainers/bioconductor-flowmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmap/README.html

