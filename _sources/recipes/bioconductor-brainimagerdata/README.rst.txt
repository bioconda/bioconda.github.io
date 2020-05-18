:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainimagerdata'
.. highlight: bash

bioconductor-brainimagerdata
============================

.. conda:recipe:: bioconductor-brainimagerdata
   :replaces_section_title:

   Image masks and expression data for use with BrainImageR

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/brainImageRdata.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-brainimagerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimagerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimagerdata/meta.yaml>`_

   brainImageRdata contains image masks for the developing human and the adult human brain. These masks can be used in conjunction with the gene expression data to generate spatial gene set enrichment plots. It also contains the expression data for the 15 pcw human brain\, the adult human brain\, and the developing human brain.


.. conda:package:: bioconductor-brainimagerdata

   |downloads_bioconductor-brainimagerdata| |docker_bioconductor-brainimagerdata|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-experimenthub: >=1.14.0,<1.15.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainimagerdata

   and update with::

      conda update bioconductor-brainimagerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brainimagerdata:<tag>

   (see `bioconductor-brainimagerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brainimagerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainimagerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainimagerdata
   :alt:   (downloads)
.. |docker_bioconductor-brainimagerdata| image:: https://quay.io/repository/biocontainers/bioconductor-brainimagerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainimagerdata
.. _`bioconductor-brainimagerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-brainimagerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainimagerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainimagerdata/README.html