:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scaledmatrix'
.. highlight: bash

bioconductor-scaledmatrix
=========================

.. conda:recipe:: bioconductor-scaledmatrix
   :replaces_section_title:
   :noindex:

   Creating a DelayedMatrix of Scaled and Centered Values

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ScaledMatrix.html
   :license: GPL-3
   :recipe: /`bioconductor-scaledmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix/meta.yaml>`_

   Provides delayed computation of a matrix of scaled and centered values. The result is equivalent to using the scale\(\) function but avoids explicit realization of a dense matrix during block processing. This permits greater efficiency in common operations\, most notably matrix multiplication.


.. conda:package:: bioconductor-scaledmatrix

   |downloads_bioconductor-scaledmatrix| |docker_bioconductor-scaledmatrix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scaledmatrix

   and update with::

      conda update bioconductor-scaledmatrix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scaledmatrix:<tag>

   (see `bioconductor-scaledmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scaledmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scaledmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scaledmatrix
   :alt:   (downloads)
.. |docker_bioconductor-scaledmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix
.. _`bioconductor-scaledmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html