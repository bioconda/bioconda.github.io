:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randrotation'
.. highlight: bash

bioconductor-randrotation
=========================

.. conda:recipe:: bioconductor-randrotation
   :replaces_section_title:
   :noindex:

   Random Rotation Methods for High Dimensional Data with Batch Structure

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/randRotation.html
   :license: GPL-3
   :recipe: /`bioconductor-randrotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randrotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randrotation/meta.yaml>`_

   A collection of methods for performing random rotations on high\-dimensional\, normally distributed data \(e.g. microarray or RNA\-seq data\) with batch structure. The random rotation approach allows exact testing of dependent test statistics with linear models following arbitrary batch effect correction methods.


.. conda:package:: bioconductor-randrotation

   |downloads_bioconductor-randrotation| |docker_bioconductor-randrotation|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rdpack: ``>=0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-randrotation

   and update with::

      conda update bioconductor-randrotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-randrotation:<tag>

   (see `bioconductor-randrotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-randrotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randrotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randrotation
   :alt:   (downloads)
.. |docker_bioconductor-randrotation| image:: https://quay.io/repository/biocontainers/bioconductor-randrotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randrotation
.. _`bioconductor-randrotation/tags`: https://quay.io/repository/biocontainers/bioconductor-randrotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randrotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randrotation/README.html