.. title:: Package Recipe 'bioconductor-mcrestimate'
.. highlight: bash


bioconductor-mcrestimate
========================

.. conda:recipe:: bioconductor-mcrestimate
   :replaces_section_title:

   This package includes a function for combining preprocessing and classification methods to calculate misclassification errors

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MCRestimate.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mcrestimate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcrestimate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcrestimate/meta.yaml>`_
   :links: biotools: :biotools:`mcrestimate`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mcrestimate

   |downloads_bioconductor-mcrestimate| |docker_bioconductor-mcrestimate|

   :versions: 2.38.0, 2.36.0, 2.34.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-golubesets` >=1.24.0,<1.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071` >=1.5-12 :conda:package:`r-pamr` >=1.22 :conda:package:`r-randomforest` >=3.9-6 :conda:package:`r-rcolorbrewer` >=0.1-3 

   :required~by: |required_by_bioconductor-mcrestimate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcrestimate

   and update with::

      conda update bioconductor-mcrestimate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mcrestimate


.. |required_by_bioconductor-mcrestimate| conda:required_by:: bioconductor-mcrestimate
.. |downloads_bioconductor-mcrestimate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcrestimate.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mcrestimate| image:: https://quay.io/repository/biocontainers/bioconductor-mcrestimate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcrestimate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcrestimate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcrestimate/README.html

