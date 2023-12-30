:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netsam'
.. highlight: bash

bioconductor-netsam
===================

.. conda:recipe:: bioconductor-netsam
   :replaces_section_title:
   :noindex:

   Network Seriation And Modularization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NetSAM.html
   :license: LGPL
   :recipe: /`bioconductor-netsam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsam/meta.yaml>`_

   The NetSAM \(Network Seriation and Modularization\) package takes an edge\-list representation of a weighted or unweighted network as an input\, performs network seriation and modularization analysis\, and generates as files that can be used as an input for the one\-dimensional network visualization tool NetGestalt \(http\:\/\/www.netgestalt.org\) or other network analysis. The NetSAM package can also generate correlation network \(e.g. co\-expression network\) based on the input matrix data\, perform seriation and modularization analysis for the correlation network and calculate the associations between the sample features and modules or identify the associated GO terms for the modules.


.. conda:package:: bioconductor-netsam

   |downloads_bioconductor-netsam| |docker_bioconductor-netsam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-netsam

   and update with::

      mamba update bioconductor-netsam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netsam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
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