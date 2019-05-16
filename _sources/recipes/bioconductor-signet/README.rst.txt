:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signet'
.. highlight: bash

bioconductor-signet
===================

.. conda:recipe:: bioconductor-signet
   :replaces_section_title:

   An R package to detect selection in biological pathways. Using gene selection scores and biological pathways data\, one can search for high\-scoring subnetworks of genes within pathways and test their significance.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/signet.html
   :license: GPL-2
   :recipe: /`bioconductor-signet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signet/meta.yaml>`_

   


.. conda:package:: bioconductor-signet

   |downloads_bioconductor-signet| |docker_bioconductor-signet|

   :versions: 1.2.2-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signet

   and update with::

      conda update bioconductor-signet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signet:<tag>

   (see `bioconductor-signet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signet
   :alt:   (downloads)
.. |docker_bioconductor-signet| image:: https://quay.io/repository/biocontainers/bioconductor-signet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signet
.. _`bioconductor-signet/tags`: https://quay.io/repository/biocontainers/bioconductor-signet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signet/README.html