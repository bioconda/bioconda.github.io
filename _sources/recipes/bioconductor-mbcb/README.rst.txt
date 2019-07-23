:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbcb'
.. highlight: bash

bioconductor-mbcb
=================

.. conda:recipe:: bioconductor-mbcb
   :replaces_section_title:

   This package provides a model\-based background correction method\, which incorporates the negative control beads to pre\-process Illumina BeadArray data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MBCB.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mbcb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbcb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbcb/meta.yaml>`_

   


.. conda:package:: bioconductor-mbcb

   |downloads_bioconductor-mbcb| |docker_bioconductor-mbcb|

   :versions: 1.38.0-1, 1.38.0-0, 1.36.0-1, 1.36.0-0
   
   :depends bioconductor-preprocesscore: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-tcltk2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbcb

   and update with::

      conda update bioconductor-mbcb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbcb:<tag>

   (see `bioconductor-mbcb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbcb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbcb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbcb
   :alt:   (downloads)
.. |docker_bioconductor-mbcb| image:: https://quay.io/repository/biocontainers/bioconductor-mbcb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbcb
.. _`bioconductor-mbcb/tags`: https://quay.io/repository/biocontainers/bioconductor-mbcb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbcb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbcb/README.html