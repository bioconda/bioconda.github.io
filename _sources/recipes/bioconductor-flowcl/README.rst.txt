:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcl'
.. highlight: bash

bioconductor-flowcl
===================

.. conda:recipe:: bioconductor-flowcl
   :replaces_section_title:

   Semantic labelling of flow cytometric cell populations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowCL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcl/meta.yaml>`_
   :links: biotools: :biotools:`flowcl`, doi: :doi:`10.1093/bioinformatics/btu807`

   


.. conda:package:: bioconductor-flowcl

   |downloads_bioconductor-flowcl| |docker_bioconductor-flowcl|

   :versions: 1.20.1-0, 1.18.1-0, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-sparql: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcl

   and update with::

      conda update bioconductor-flowcl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcl:<tag>

   (see `bioconductor-flowcl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcl
   :alt:   (downloads)
.. |docker_bioconductor-flowcl| image:: https://quay.io/repository/biocontainers/bioconductor-flowcl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcl
.. _`bioconductor-flowcl/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcl/README.html