:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netsam'
.. highlight: bash

bioconductor-netsam
===================

.. conda:recipe:: bioconductor-netsam
   :replaces_section_title:

   The NetSAM \(Network Seriation and Modularization\) package takes an edge\-list representation of a network as an input\, performs network seriation and modularization analysis\, and generates as files that can be used as an input for the one\-dimensional network visualization tool NetGestalt \(http\:\/\/www.netgestalt.org\) or other network analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NetSAM.html
   :license: LGPL
   :recipe: /`bioconductor-netsam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam/meta.yaml>`_

   


.. conda:package:: bioconductor-netsam

   |downloads_bioconductor-netsam| |docker_bioconductor-netsam|

   :versions: 1.22.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-igraph: >=0.6-1
   
   :depends r-seriation: >=1.0-6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netsam

   and update with::

      conda update bioconductor-netsam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netsam:<tag>

   (see `bioconductor-netsam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netsam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netsam.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netsam| image:: https://quay.io/repository/biocontainers/bioconductor-netsam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netsam
.. _`bioconductor-netsam/tags`: https://quay.io/repository/biocontainers/bioconductor-netsam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netsam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netsam/README.html