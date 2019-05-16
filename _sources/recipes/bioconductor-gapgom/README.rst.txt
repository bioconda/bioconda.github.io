:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gapgom'
.. highlight: bash

bioconductor-gapgom
===================

.. conda:recipe:: bioconductor-gapgom
   :replaces_section_title:

   Collection of various measures and tools for lncRNA annotation prediction put inside a redistributable R package. The package contains two main algorithms\; lncRNA2GOA and TopoICSim. lncRNA2GOA tries to annotate novel genes \(in this specific case lncRNAs\) by using various correlation\/geometric scoring methods on correlated expression data. After correlating\/scoring\, the results are annotated and enriched. TopoICSim is a topologically based method\, that compares gene similarity based on the topology of the GO DAG by information content \(IC\) between GO terms.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GAPGOM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gapgom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gapgom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gapgom/meta.yaml>`_

   


.. conda:package:: bioconductor-gapgom

   |downloads_bioconductor-gapgom| |docker_bioconductor-gapgom|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gapgom

   and update with::

      conda update bioconductor-gapgom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gapgom:<tag>

   (see `bioconductor-gapgom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gapgom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gapgom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gapgom
   :alt:   (downloads)
.. |docker_bioconductor-gapgom| image:: https://quay.io/repository/biocontainers/bioconductor-gapgom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gapgom
.. _`bioconductor-gapgom/tags`: https://quay.io/repository/biocontainers/bioconductor-gapgom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gapgom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gapgom/README.html