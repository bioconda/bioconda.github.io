:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiannotator'
.. highlight: bash

bioconductor-hiannotator
========================

.. conda:recipe:: bioconductor-hiannotator
   :replaces_section_title:

   hiAnnotator contains set of functions which allow users to annotate a GRanges object with custom set of annotations. The basic philosophy of this package is to take two GRanges objects \(query \& subject\) with common set of seqnames \(i.e. chromosomes\) and return associated annotation per seqnames and rows from the query matching seqnames and rows from the subject \(i.e. genes or cpg islands\). The package comes with three types of annotation functions which calculates if a position from query is\: within a feature\, near a feature\, or count features in defined window sizes. Moreover\, each function is equipped with parallel backend to utilize the foreach package. In addition\, the package is equipped with wrapper functions\, which finds appropriate columns needed to make a GRanges object from a common data frame.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hiAnnotator.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hiannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator/meta.yaml>`_
   :links: biotools: :biotools:`hiannotator`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-hiannotator

   |downloads_bioconductor-hiannotator| |docker_bioconductor-hiannotator|

   :versions: 1.16.0-0, 1.14.0-0, 1.11.1-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: 
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-iterators: 
   
   :depends r-scales: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiannotator

   and update with::

      conda update bioconductor-hiannotator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiannotator:<tag>

   (see `bioconductor-hiannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiannotator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiannotator.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hiannotator| image:: https://quay.io/repository/biocontainers/bioconductor-hiannotator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiannotator
.. _`bioconductor-hiannotator/tags`: https://quay.io/repository/biocontainers/bioconductor-hiannotator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html