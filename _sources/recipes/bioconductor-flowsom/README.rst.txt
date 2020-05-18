:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsom'
.. highlight: bash

bioconductor-flowsom
====================

.. conda:recipe:: bioconductor-flowsom
   :replaces_section_title:

   Using self\-organizing maps for visualization and interpretation of cytometry data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/FlowSOM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flowsom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom/meta.yaml>`_
   :links: biotools: :biotools:`flowsom`, doi: :doi:`10.1002/cyto.a.22625`

   FlowSOM offers visualization options for cytometry data\, by using Self\-Organizing Map clustering and Minimal Spanning Trees.


.. conda:package:: bioconductor-flowsom

   |downloads_bioconductor-flowsom| |docker_bioconductor-flowsom|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.1-0, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-consensusclusterplus: >=1.52.0,<1.53.0
   :depends bioconductor-cytoml: >=2.0.0,<2.1.0
   :depends bioconductor-flowcore: >=2.0.0,<2.1.0
   :depends bioconductor-flowworkspace: >=4.0.0,<4.1.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.5.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: 
   :depends r-rcolorbrewer: 
   :depends r-tsne: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsom

   and update with::

      conda update bioconductor-flowsom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsom:<tag>

   (see `bioconductor-flowsom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsom
   :alt:   (downloads)
.. |docker_bioconductor-flowsom| image:: https://quay.io/repository/biocontainers/bioconductor-flowsom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsom
.. _`bioconductor-flowsom/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsom/README.html