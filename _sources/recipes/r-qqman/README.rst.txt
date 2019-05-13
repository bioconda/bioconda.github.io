:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qqman'
.. highlight: bash

r-qqman
=======

.. conda:recipe:: r-qqman
   :replaces_section_title:

   Create Q\-Q and manhattan plots for GWAS data from PLINK results.

   :homepage: https://CRAN.R-project.org/package=qqman
   :license: GPL3 / GPL-3
   :recipe: /`r-qqman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qqman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qqman/meta.yaml>`_

   


.. conda:package:: r-qqman

   |downloads_r-qqman| |docker_r-qqman|

   :versions: 0.1.4-3, 0.1.4-2, 0.1.4-0, 0.1.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-calibrate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qqman

   and update with::

      conda update r-qqman

   or use the docker container::

      docker pull quay.io/biocontainers/r-qqman:<tag>

   (see `r-qqman/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qqman| image:: https://img.shields.io/conda/dn/bioconda/r-qqman.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qqman
   :alt:   (downloads)
.. |docker_r-qqman| image:: https://quay.io/repository/biocontainers/r-qqman/status
   :target: https://quay.io/repository/biocontainers/r-qqman
.. _`r-qqman/tags`: https://quay.io/repository/biocontainers/r-qqman?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qqman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qqman/README.html