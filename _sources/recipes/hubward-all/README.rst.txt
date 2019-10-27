:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hubward-all'
.. highlight: bash

hubward-all
===========

.. conda:recipe:: hubward-all
   :replaces_section_title:

   Meta\-package for hubward including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`hubward-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward-all/meta.yaml>`_

   


.. conda:package:: hubward-all

   |downloads_hubward-all| |docker_hubward-all|

   :versions: 0.2.1-2, 0.2.1-1, 0.2.1-0
   
   :depends bedtools: 
   :depends crossmap: 
   :depends hubward: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-bigwigtobedgraph: 
   :depends ucsc-bigwigtowig: 
   :depends ucsc-fetchchromsizes: 
   :depends ucsc-liftover: 
   :depends ucsc-wigtobigwig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hubward-all

   and update with::

      conda update hubward-all

   or use the docker container::

      docker pull quay.io/biocontainers/hubward-all:<tag>

   (see `hubward-all/tags`_ for valid values for ``<tag>``)


.. |downloads_hubward-all| image:: https://img.shields.io/conda/dn/bioconda/hubward-all.svg?style=flat
   :target: https://anaconda.org/bioconda/hubward-all
   :alt:   (downloads)
.. |docker_hubward-all| image:: https://quay.io/repository/biocontainers/hubward-all/status
   :target: https://quay.io/repository/biocontainers/hubward-all
.. _`hubward-all/tags`: https://quay.io/repository/biocontainers/hubward-all?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward-all/README.html