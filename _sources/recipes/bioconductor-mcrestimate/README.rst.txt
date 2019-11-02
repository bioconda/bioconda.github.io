:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcrestimate'
.. highlight: bash

bioconductor-mcrestimate
========================

.. conda:recipe:: bioconductor-mcrestimate
   :replaces_section_title:

   This package includes a function for combining preprocessing and classification methods to calculate misclassification errors

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MCRestimate.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mcrestimate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcrestimate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcrestimate/meta.yaml>`_
   :links: biotools: :biotools:`mcrestimate`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mcrestimate

   |downloads_bioconductor-mcrestimate| |docker_bioconductor-mcrestimate|

   :versions: 2.42.0-0, 2.40.0-1, 2.38.0-0, 2.36.0-0, 2.34.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-golubesets: >=1.27.0,<1.28.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-e1071: >=1.5-12
   :depends r-pamr: >=1.22
   :depends r-randomforest: >=3.9-6
   :depends r-rcolorbrewer: >=0.1-3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcrestimate

   and update with::

      conda update bioconductor-mcrestimate

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcrestimate:<tag>

   (see `bioconductor-mcrestimate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcrestimate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcrestimate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcrestimate
   :alt:   (downloads)
.. |docker_bioconductor-mcrestimate| image:: https://quay.io/repository/biocontainers/bioconductor-mcrestimate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcrestimate
.. _`bioconductor-mcrestimate/tags`: https://quay.io/repository/biocontainers/bioconductor-mcrestimate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcrestimate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcrestimate/README.html