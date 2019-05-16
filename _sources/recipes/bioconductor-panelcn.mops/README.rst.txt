:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panelcn.mops'
.. highlight: bash

bioconductor-panelcn.mops
=========================

.. conda:recipe:: bioconductor-panelcn.mops
   :replaces_section_title:

   CNV detection tool for targeted NGS panel data. Extension of the cn.mops package.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/panelcn.mops.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-panelcn.mops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panelcn.mops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panelcn.mops/meta.yaml>`_

   


.. conda:package:: bioconductor-panelcn.mops

   |downloads_bioconductor-panelcn.mops| |docker_bioconductor-panelcn.mops|

   :versions: 1.4.0-0
   
   :depends bioconductor-cn.mops: >=1.28.0,<1.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panelcn.mops

   and update with::

      conda update bioconductor-panelcn.mops

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panelcn.mops:<tag>

   (see `bioconductor-panelcn.mops/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panelcn.mops| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panelcn.mops.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panelcn.mops
   :alt:   (downloads)
.. |docker_bioconductor-panelcn.mops| image:: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops
.. _`bioconductor-panelcn.mops/tags`: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panelcn.mops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panelcn.mops/README.html