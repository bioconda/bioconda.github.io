:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fletcher2013b'
.. highlight: bash

bioconductor-fletcher2013b
==========================

.. conda:recipe:: bioconductor-fletcher2013b
   :replaces_section_title:

   Master regulators of FGFR2 signalling and breast cancer risk

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/Fletcher2013b.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fletcher2013b <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013b>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013b/meta.yaml>`_

   This package reproduces the systems biology analysis for the data in package Fletcher2013a using RTN.


.. conda:package:: bioconductor-fletcher2013b

   |downloads_bioconductor-fletcher2013b| |docker_bioconductor-fletcher2013b|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-fletcher2013a: >=1.24.0,<1.25.0
   :depends bioconductor-reder: >=1.36.0,<1.37.0
   :depends bioconductor-rtn: >=2.12.0,<2.13.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fletcher2013b

   and update with::

      conda update bioconductor-fletcher2013b

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fletcher2013b:<tag>

   (see `bioconductor-fletcher2013b/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fletcher2013b| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fletcher2013b.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fletcher2013b
   :alt:   (downloads)
.. |docker_bioconductor-fletcher2013b| image:: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b
.. _`bioconductor-fletcher2013b/tags`: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fletcher2013b/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fletcher2013b/README.html