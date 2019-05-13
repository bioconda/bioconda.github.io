:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-kaos'
.. highlight: bash

r-kaos
======

.. conda:recipe:: r-kaos
   :replaces_section_title:

   Sequences encoding by using the chaos game representation. Löchel et al. \(2019\) \<doi\:10.1101\/575324\>.

   :homepage: https://CRAN.R-project.org/package=kaos
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-kaos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-kaos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-kaos/meta.yaml>`_

   


.. conda:package:: r-kaos

   |downloads_r-kaos| |docker_r-kaos|

   :versions: 0.1.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-kaos

   and update with::

      conda update r-kaos

   or use the docker container::

      docker pull quay.io/biocontainers/r-kaos:<tag>

   (see `r-kaos/tags`_ for valid values for ``<tag>``)


.. |downloads_r-kaos| image:: https://img.shields.io/conda/dn/bioconda/r-kaos.svg?style=flat
   :target: https://anaconda.org/bioconda/r-kaos
   :alt:   (downloads)
.. |docker_r-kaos| image:: https://quay.io/repository/biocontainers/r-kaos/status
   :target: https://quay.io/repository/biocontainers/r-kaos
.. _`r-kaos/tags`: https://quay.io/repository/biocontainers/r-kaos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-kaos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-kaos/README.html