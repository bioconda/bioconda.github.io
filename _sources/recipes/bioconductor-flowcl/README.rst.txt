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

   :versions: 1.20.1, 1.18.1, 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-sparql`  

   :required~by: |required_by_bioconductor-flowcl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcl

   and update with::

      conda update bioconductor-flowcl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowcl


.. |required_by_bioconductor-flowcl| conda:required_by:: bioconductor-flowcl
.. |downloads_bioconductor-flowcl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowcl| image:: https://quay.io/repository/biocontainers/bioconductor-flowcl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcl/README.html

