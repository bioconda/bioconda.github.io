.. title:: Package Recipe 'bioconductor-normqpcr'
.. highlight: bash


bioconductor-normqpcr
=====================

.. conda:recipe:: bioconductor-normqpcr
   :replaces_section_title:

   Functions for the selection of optimal reference genes and the normalisation of real\-time quantitative PCR data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NormqPCR.html
   :license: LGPL-3
   :recipe: /`bioconductor-normqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr/meta.yaml>`_

   


.. conda:package:: bioconductor-normqpcr

   |downloads_bioconductor-normqpcr| |docker_bioconductor-normqpcr|

   :versions: 1.28.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-readqpcr` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-qpcr`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-normqpcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-normqpcr

   and update with::

      conda update bioconductor-normqpcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-normqpcr


.. |required_by_bioconductor-normqpcr| conda:required_by:: bioconductor-normqpcr
.. |downloads_bioconductor-normqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normqpcr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-normqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-normqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normqpcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html

