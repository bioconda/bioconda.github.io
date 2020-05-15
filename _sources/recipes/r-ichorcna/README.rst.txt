:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ichorcna'
.. highlight: bash

r-ichorcna
==========

.. conda:recipe:: r-ichorcna
   :replaces_section_title:

   Estimating tumor fraction in cell\-free DNA from ultra\-low\-pass whole genome sequencing.

   :homepage: https://github.com/broadinstitute/ichorCNA
   :license: GPL-3
   :recipe: /`r-ichorcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna/meta.yaml>`_

   


.. conda:package:: r-ichorcna

   |downloads_r-ichorcna| |docker_r-ichorcna|

   :versions: 0.2.0-1, 0.2.0-0, 0.1.0.20180710-0
   
   :depends bioconductor-genomeinfodb: >=1.8.7
   :depends bioconductor-hmmcopy: >=1.14.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-optparse: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ichorcna

   and update with::

      conda update r-ichorcna

   or use the docker container::

      docker pull quay.io/biocontainers/r-ichorcna:<tag>

   (see `r-ichorcna/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ichorcna| image:: https://img.shields.io/conda/dn/bioconda/r-ichorcna.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ichorcna
   :alt:   (downloads)
.. |docker_r-ichorcna| image:: https://quay.io/repository/biocontainers/r-ichorcna/status
   :target: https://quay.io/repository/biocontainers/r-ichorcna
.. _`r-ichorcna/tags`: https://quay.io/repository/biocontainers/r-ichorcna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ichorcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ichorcna/README.html