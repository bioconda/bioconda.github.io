.. title:: Package Recipe 'bioconductor-spotsegmentation'
.. highlight: bash


bioconductor-spotsegmentation
=============================

.. conda:recipe:: bioconductor-spotsegmentation
   :replaces_section_title:

   Spot segmentation via model\-based clustering and gridding for blocks within microarray slides\, as described in Li et al\, Robust Model\-Based Segmentation of Microarray Images\, Technical Report no. 473\, Department of Statistics\, University of Washington.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/spotSegmentation.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-spotsegmentation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotsegmentation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotsegmentation/meta.yaml>`_
   :links: biotools: :biotools:`spotsegmentation`, doi: :doi:`10.1093/bioinformatics/bti447`

   


.. conda:package:: bioconductor-spotsegmentation

   |downloads_bioconductor-spotsegmentation| |docker_bioconductor-spotsegmentation|

   :versions: 1.56.0, 1.54.0, 1.52.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mclust`  

   :required~by: |required_by_bioconductor-spotsegmentation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spotsegmentation

   and update with::

      conda update bioconductor-spotsegmentation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-spotsegmentation


.. |required_by_bioconductor-spotsegmentation| conda:required_by:: bioconductor-spotsegmentation
.. |downloads_bioconductor-spotsegmentation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spotsegmentation.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-spotsegmentation| image:: https://quay.io/repository/biocontainers/bioconductor-spotsegmentation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spotsegmentation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spotsegmentation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spotsegmentation/README.html

