:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biggr'
.. highlight: bash

bioconductor-biggr
==================

.. conda:recipe:: bioconductor-biggr
   :replaces_section_title:

   This package provides an interface to simulate metabolic reconstruction from the BiGG database\(http\:\/\/bigg.ucsd.edu\/\) and other metabolic reconstruction databases. The package facilitates flux balance analysis \(FBA\) and the sampling of feasible flux distributions. Metabolic networks and estimated fluxes can be visualized with hypergraphs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiGGR.html
   :license: file LICENSE
   :recipe: /`bioconductor-biggr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr/meta.yaml>`_

   


.. conda:package:: bioconductor-biggr

   |downloads_bioconductor-biggr| |docker_bioconductor-biggr|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biggr

   and update with::

      conda update bioconductor-biggr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biggr:<tag>

   (see `bioconductor-biggr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biggr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biggr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biggr| image:: https://quay.io/repository/biocontainers/bioconductor-biggr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biggr
.. _`bioconductor-biggr/tags`: https://quay.io/repository/biocontainers/bioconductor-biggr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biggr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biggr/README.html