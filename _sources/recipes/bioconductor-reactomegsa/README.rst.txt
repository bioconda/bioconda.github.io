:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegsa'
.. highlight: bash

bioconductor-reactomegsa
========================

.. conda:recipe:: bioconductor-reactomegsa
   :replaces_section_title:
   :noindex:

   Client for the Reactome Analysis Service for comparative multi\-omics gene set analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ReactomeGSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-reactomegsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa/meta.yaml>`_

   The ReactomeGSA packages uses Reactome\'s online analysis service to perform a multi\-omics gene set analysis. The main advantage of this package is\, that the retrieved results can be visualized using REACTOME\'s powerful webapplication. Since Reactome\'s analysis service also uses R to perfrom the actual gene set analysis you will get similar results when using the same packages \(such as limma and edgeR\) locally. Therefore\, if you only require a gene set analysis\, different packages are more suited.


.. conda:package:: bioconductor-reactomegsa

   |downloads_bioconductor-reactomegsa| |docker_bioconductor-reactomegsa|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomegsa

   and update with::

      conda update bioconductor-reactomegsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomegsa:<tag>

   (see `bioconductor-reactomegsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomegsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegsa
   :alt:   (downloads)
.. |docker_bioconductor-reactomegsa| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegsa
.. _`bioconductor-reactomegsa/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html