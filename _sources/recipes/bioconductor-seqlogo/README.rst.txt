:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqlogo'
.. highlight: bash

bioconductor-seqlogo
====================

.. conda:recipe:: bioconductor-seqlogo
   :replaces_section_title:

   seqLogo takes the position weight matrix of a DNA sequence motif and plots the corresponding sequence logo as introduced by Schneider and Stephens \(1990\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqLogo.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-seqlogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqlogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqlogo/meta.yaml>`_
   :links: biotools: :biotools:`seqlogo`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-seqlogo

   |downloads_bioconductor-seqlogo| |docker_bioconductor-seqlogo|

   :versions: 1.48.0-0, 1.46.0-0, 1.44.0-0, 1.42.0-0, 1.38.0-0, 1.36.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqlogo

   and update with::

      conda update bioconductor-seqlogo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqlogo:<tag>

   (see `bioconductor-seqlogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqlogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqlogo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqlogo| image:: https://quay.io/repository/biocontainers/bioconductor-seqlogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqlogo
.. _`bioconductor-seqlogo/tags`: https://quay.io/repository/biocontainers/bioconductor-seqlogo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqlogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqlogo/README.html