.. title:: Package Recipe 'bioconductor-delayedarray'
.. highlight: bash


bioconductor-delayedarray
=========================

.. conda:recipe:: bioconductor-delayedarray
   :replaces_section_title:

   Wrapping an array\-like object \(typically an on\-disk object\) in a DelayedArray object allows one to perform common array operations on it without loading the object in memory. In order to reduce memory usage and optimize performance\, operations on the object are either delayed or executed using a block processing mechanism. Note that this also works on in\-memory array\-like objects like DataFrame objects \(typically with Rle columns\)\, Matrix objects\, and ordinary arrays and data frames.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DelayedArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-delayedarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray/meta.yaml>`_

   


.. conda:package:: bioconductor-delayedarray

   |downloads_bioconductor-delayedarray| |docker_bioconductor-delayedarray|

   :versions: 0.8.0, 0.6.6, 0.4.1, 0.2.7

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-delayedarray|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-delayedarray

   and update with::

      conda update bioconductor-delayedarray

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-delayedarray


.. |required_by_bioconductor-delayedarray| conda:required_by:: bioconductor-delayedarray
.. |downloads_bioconductor-delayedarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedarray.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-delayedarray| image:: https://quay.io/repository/biocontainers/bioconductor-delayedarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedarray







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html

