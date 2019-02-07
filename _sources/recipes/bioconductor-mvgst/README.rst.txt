.. title:: Package Recipe 'bioconductor-mvgst'
.. highlight: bash


bioconductor-mvgst
==================

.. conda:recipe:: bioconductor-mvgst
   :replaces_section_title:

   mvGST provides platform\-independent tools to identify GO terms \(gene sets\) that are differentially active \(up or down\) in multiple contrasts of interest.  Given a matrix of one\-sided p\-values \(rows for genes\, columns for contrasts\)\, mvGST uses meta\-analytic methods to combine p\-values for all genes annotated to each gene set\, and then classify each gene set as being significantly more active \(1\)\, less active \(\-1\)\, or not significantly differentially active \(0\) in each contrast of interest.  With multiple contrasts of interest\, each gene set is assigned to a profile \(across contrasts\) of differential activity.  Tools are also provided for visualizing \(in a GO graph\) the gene sets classified to a given profile.

   :homepage: http://bioconductor.org/packages/3.6/bioc/html/mvGST.html
   :license: GPL-3
   :recipe: /`bioconductor-mvgst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvgst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvgst/meta.yaml>`_
   :links: biotools: :biotools:`mvgst`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mvgst

   |downloads_bioconductor-mvgst| |docker_bioconductor-mvgst|

   :versions: 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-annotate`  :conda:package:`bioconductor-annotationdbi`  :conda:package:`bioconductor-go.db`  :conda:package:`bioconductor-gostats`  :conda:package:`bioconductor-graph`  :conda:package:`bioconductor-rgraphviz`  :conda:package:`bioconductor-topgo`  :conda:package:`r-base` 3.4.1* :conda:package:`r-gprofiler`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-mvgst|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mvgst

   and update with::

      conda update bioconductor-mvgst

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mvgst


.. |required_by_bioconductor-mvgst| conda:required_by:: bioconductor-mvgst
.. |downloads_bioconductor-mvgst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mvgst.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mvgst| image:: https://quay.io/repository/biocontainers/bioconductor-mvgst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mvgst







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mvgst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mvgst/README.html

