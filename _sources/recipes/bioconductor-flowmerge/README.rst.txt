:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmerge'
.. highlight: bash

bioconductor-flowmerge
======================

.. conda:recipe:: bioconductor-flowmerge
   :replaces_section_title:

   Cluster Merging for Flow Cytometry Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/flowMerge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge/meta.yaml>`_

   Merging of mixture components for model\-based automated gating of flow cytometry data using the flowClust framework. Note\: users should have a working copy of flowClust 2.0 installed.


.. conda:package:: bioconductor-flowmerge

   |downloads_bioconductor-flowmerge| |docker_bioconductor-flowmerge|

   :versions: 2.36.0-0, 2.34.0-0, 2.32.0-1, 2.30.1-0
   
   :depends bioconductor-flowclust: >=3.26.0,<3.27.0
   :depends bioconductor-flowcore: >=2.0.0,<2.1.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-rgraphviz: >=2.32.0,<2.33.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-feature: 
   :depends r-foreach: 
   :depends r-rrcov: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowmerge

   and update with::

      conda update bioconductor-flowmerge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmerge:<tag>

   (see `bioconductor-flowmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmerge
   :alt:   (downloads)
.. |docker_bioconductor-flowmerge| image:: https://quay.io/repository/biocontainers/bioconductor-flowmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmerge
.. _`bioconductor-flowmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmerge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html