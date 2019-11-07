:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plpe'
.. highlight: bash

bioconductor-plpe
=================

.. conda:recipe:: bioconductor-plpe
   :replaces_section_title:

   Local Pooled Error Test for Differential Expression with Paired High\-throughput Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/PLPE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-plpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe/meta.yaml>`_
   :links: biotools: :biotools:`plpe`, doi: :doi:`10.1038/nmeth.3252`

   This package performs tests for paired high\-throughput data.


.. conda:package:: bioconductor-plpe

   |downloads_bioconductor-plpe| |docker_bioconductor-plpe|

   :versions: 1.46.0-0, 1.44.0-1, 1.42.0-0, 1.40.0-0, 1.38.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-lpe: >=1.60.0,<1.61.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plpe

   and update with::

      conda update bioconductor-plpe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plpe:<tag>

   (see `bioconductor-plpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plpe
   :alt:   (downloads)
.. |docker_bioconductor-plpe| image:: https://quay.io/repository/biocontainers/bioconductor-plpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plpe
.. _`bioconductor-plpe/tags`: https://quay.io/repository/biocontainers/bioconductor-plpe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plpe/README.html