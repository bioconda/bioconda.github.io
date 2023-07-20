:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netsam'
.. highlight: bash

bioconductor-netsam
===================

.. conda:recipe:: bioconductor-netsam
   :replaces_section_title:
   :noindex:

   Network Seriation And Modularization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NetSAM.html
   :license: LGPL
   :recipe: /`bioconductor-netsam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam/meta.yaml>`_

   The NetSAM \(Network Seriation and Modularization\) package takes an edge\-list representation of a weighted or unweighted network as an input\, performs network seriation and modularization analysis\, and generates as files that can be used as an input for the one\-dimensional network visualization tool NetGestalt \(http\:\/\/www.netgestalt.org\) or other network analysis. The NetSAM package can also generate correlation network \(e.g. co\-expression network\) based on the input matrix data\, perform seriation and modularization analysis for the correlation network and calculate the associations between the sample features and modules or identify the associated GO terms for the modules.


.. conda:package:: bioconductor-netsam

   |downloads_bioconductor-netsam| |docker_bioconductor-netsam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: ``>=0.5-1``
   :depends r-doparallel: ``>=1.0.10``
   :depends r-foreach: ``>=1.4.0``
   :depends r-igraph: ``>=0.6-1``
   :depends r-r2html: ``>=2.2.0``
   :depends r-seriation: ``>=1.0-6``
   :depends r-survival: ``>=2.37-7``
   :depends r-wgcna: ``>=1.34.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netsam

   and update with::

      conda update bioconductor-netsam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netsam:<tag>

   (see `bioconductor-netsam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netsam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netsam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netsam
   :alt:   (downloads)
.. |docker_bioconductor-netsam| image:: https://quay.io/repository/biocontainers/bioconductor-netsam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netsam
.. _`bioconductor-netsam/tags`: https://quay.io/repository/biocontainers/bioconductor-netsam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netsam";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netsam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netsam/README.html