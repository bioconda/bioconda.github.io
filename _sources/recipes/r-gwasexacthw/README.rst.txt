:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gwasexacthw'
.. highlight: bash

r-gwasexacthw
=============

.. conda:recipe:: r-gwasexacthw
   :replaces_section_title:

   This package contains a function to do exact Hardy\-Weinburg testing \(using Fisher\'s test\) for SNP genotypes as typically obtained in a Genome Wide Association Study \(GWAS\).

   :homepage: https://CRAN.R-project.org/package=GWASExactHW
   :license: GPL3 / GPL-3
   :recipe: /`r-gwasexacthw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwasexacthw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwasexacthw/meta.yaml>`_

   


.. conda:package:: r-gwasexacthw

   |downloads_r-gwasexacthw| |docker_r-gwasexacthw|

   :versions: 1.01-1, 1.01-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gwasexacthw

   and update with::

      conda update r-gwasexacthw

   or use the docker container::

      docker pull quay.io/biocontainers/r-gwasexacthw:<tag>

   (see `r-gwasexacthw/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gwasexacthw| image:: https://img.shields.io/conda/dn/bioconda/r-gwasexacthw.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gwasexacthw
   :alt:   (downloads)
.. |docker_r-gwasexacthw| image:: https://quay.io/repository/biocontainers/r-gwasexacthw/status
   :target: https://quay.io/repository/biocontainers/r-gwasexacthw
.. _`r-gwasexacthw/tags`: https://quay.io/repository/biocontainers/r-gwasexacthw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gwasexacthw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gwasexacthw/README.html