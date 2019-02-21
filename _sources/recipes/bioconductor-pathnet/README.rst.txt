:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathnet'
.. highlight: bash

bioconductor-pathnet
====================

.. conda:recipe:: bioconductor-pathnet
   :replaces_section_title:

   PathNet uses topological information present in pathways and differential expression levels of genes \(obtained from microarray experiment\) to identify pathways that are 1\) significantly enriched and 2\) associated with each other in the context of differential expression. The algorithm is described in\: PathNet\: A tool for pathway analysis using topological information. Dutta B\, Wallqvist A\, and Reifman J. Source Code for Biology and Medicine 2012 Sep 24\;7\(1\)\:10.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PathNet.html
   :license: GPL-3
   :recipe: /`bioconductor-pathnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnet/meta.yaml>`_
   :links: biotools: :biotools:`pathnet`

   


.. conda:package:: bioconductor-pathnet

   |downloads_bioconductor-pathnet| |docker_bioconductor-pathnet|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathnet

   and update with::

      conda update bioconductor-pathnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathnet:<tag>

   (see `bioconductor-pathnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathnet| image:: https://quay.io/repository/biocontainers/bioconductor-pathnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathnet
.. _`bioconductor-pathnet/tags`: https://quay.io/repository/biocontainers/bioconductor-pathnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathnet/README.html