.. title:: Package Recipe 'bioconductor-gdsarray'
.. highlight: bash


bioconductor-gdsarray
=====================

.. conda:recipe:: bioconductor-gdsarray
   :replaces_section_title:

   GDS files are widely used to represent genotyping or sequence data. The GDSArray package implements the \`GDSArray\` class to represent nodes in GDS files in a matrix\-like representation that allows easy manipulation \(e.g.\, subsetting\, mathematical transformation\) in \_R\_. The data remains on disk until needed\, so that very large files can be processed.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GDSArray.html
   :license: GPL-3
   :recipe: /`bioconductor-gdsarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsarray/meta.yaml>`_

   


.. conda:package:: bioconductor-gdsarray

   |downloads_bioconductor-gdsarray| |docker_bioconductor-gdsarray|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-gdsfmt` >=1.18.0,<1.19.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqarray` >=1.22.0,<1.23.0 :conda:package:`bioconductor-snprelate` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-gdsarray|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gdsarray

   and update with::

      conda update bioconductor-gdsarray

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gdsarray


.. |required_by_bioconductor-gdsarray| conda:required_by:: bioconductor-gdsarray
.. |downloads_bioconductor-gdsarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdsarray.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gdsarray| image:: https://quay.io/repository/biocontainers/bioconductor-gdsarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdsarray







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdsarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdsarray/README.html

