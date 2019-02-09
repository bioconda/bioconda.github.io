.. title:: Package Recipe 'bioconductor-cnvtools'
.. highlight: bash


bioconductor-cnvtools
=====================

.. conda:recipe:: bioconductor-cnvtools
   :replaces_section_title:

   This package is meant to facilitate the testing of Copy Number Variant data for genetic association\, typically in case\-control studies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNVtools.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvtools/meta.yaml>`_
   :links: biotools: :biotools:`cnvtools`, doi: :doi:`10.1038/ng.206`

   


.. conda:package:: bioconductor-cnvtools

   |downloads_bioconductor-cnvtools| |docker_bioconductor-cnvtools|

   :versions: 1.76.0, 1.74.0, 1.72.0

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-cnvtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvtools

   and update with::

      conda update bioconductor-cnvtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnvtools


.. |required_by_bioconductor-cnvtools| conda:required_by:: bioconductor-cnvtools
.. |downloads_bioconductor-cnvtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnvtools| image:: https://quay.io/repository/biocontainers/bioconductor-cnvtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvtools/README.html

