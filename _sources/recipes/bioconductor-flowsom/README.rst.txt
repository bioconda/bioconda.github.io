.. title:: Package Recipe 'bioconductor-flowsom'
.. highlight: bash


bioconductor-flowsom
====================

.. conda:recipe:: bioconductor-flowsom
   :replaces_section_title:

   FlowSOM offers visualization options for cytometry data\, by using Self\-Organizing Map clustering and Minimal Spanning Trees.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FlowSOM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flowsom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom/meta.yaml>`_
   :links: biotools: :biotools:`flowsom`, doi: :doi:`10.1002/cyto.a.22625`

   


.. conda:package:: bioconductor-flowsom

   |downloads_bioconductor-flowsom| |docker_bioconductor-flowsom|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-consensusclusterplus` >=1.46.0,<1.47.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowutils` >=1.46.0,<1.47.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  :conda:package:`r-tsne`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-flowsom|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsom

   and update with::

      conda update bioconductor-flowsom

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowsom


.. |required_by_bioconductor-flowsom| conda:required_by:: bioconductor-flowsom
.. |downloads_bioconductor-flowsom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsom.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowsom| image:: https://quay.io/repository/biocontainers/bioconductor-flowsom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsom







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsom/README.html

