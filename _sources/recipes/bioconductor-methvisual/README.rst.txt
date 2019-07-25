:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methvisual'
.. highlight: bash

bioconductor-methvisual
=======================

.. conda:recipe:: bioconductor-methvisual
   :replaces_section_title:

   The package \'methVisual\' allows the visualization of DNA methylation data after bisulfite sequencing.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/methVisual.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methvisual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methvisual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methvisual/meta.yaml>`_

   


.. conda:package:: bioconductor-methvisual

   |downloads_bioconductor-methvisual| |docker_bioconductor-methvisual|

   :versions: 1.36.0-1, 1.34.0-1, 1.34.0-0
   
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ca: 
   :depends r-gridbase: 
   :depends r-gsubfn: 
   :depends r-plotrix: 
   :depends r-sqldf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methvisual

   and update with::

      conda update bioconductor-methvisual

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methvisual:<tag>

   (see `bioconductor-methvisual/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methvisual| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methvisual.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methvisual
   :alt:   (downloads)
.. |docker_bioconductor-methvisual| image:: https://quay.io/repository/biocontainers/bioconductor-methvisual/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methvisual
.. _`bioconductor-methvisual/tags`: https://quay.io/repository/biocontainers/bioconductor-methvisual?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methvisual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methvisual/README.html