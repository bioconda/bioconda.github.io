:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ldrtools'
.. highlight: bash

r-ldrtools
==========

.. conda:recipe:: r-ldrtools
   :replaces_section_title:

   Linear dimension reduction subspaces can be uniquely defined using orthogonal projection matrices. This package provides tools to compute distances between such subspaces and to compute the average subspace. For details see Liski\, E.Nordhausen K.\, Oja H.\, Ruiz\-Gazen A. \(2016\) Combining Linear Dimension Reduction Subspaces \<doi\:10.1007\/978\-81\-322\-3643\-6\_7\>.

   :homepage: https://CRAN.R-project.org/package=LDRTools
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-ldrtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ldrtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ldrtools/meta.yaml>`_

   


.. conda:package:: r-ldrtools

   |downloads_r-ldrtools| |docker_r-ldrtools|

   :versions: 0.2_1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ldrtools

   and update with::

      conda update r-ldrtools

   or use the docker container::

      docker pull quay.io/biocontainers/r-ldrtools:<tag>

   (see `r-ldrtools/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ldrtools| image:: https://img.shields.io/conda/dn/bioconda/r-ldrtools.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ldrtools
   :alt:   (downloads)
.. |docker_r-ldrtools| image:: https://quay.io/repository/biocontainers/r-ldrtools/status
   :target: https://quay.io/repository/biocontainers/r-ldrtools
.. _`r-ldrtools/tags`: https://quay.io/repository/biocontainers/r-ldrtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ldrtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ldrtools/README.html