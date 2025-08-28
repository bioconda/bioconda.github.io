:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosbi'
.. highlight: bash

bioconductor-mosbi
==================

.. conda:recipe:: bioconductor-mosbi
   :replaces_section_title:
   :noindex:

   Molecular Signature identification using Biclustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mosbi.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-mosbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosbi/meta.yaml>`_

   This package is a implementation of biclustering ensemble method MoSBi \(Molecular signature Identification from Biclustering\). MoSBi provides standardized interfaces for biclustering results and can combine their results with a multi\-algorithm ensemble approach to compute robust ensemble biclusters on molecular omics data. This is done by computing similarity networks of biclusters and filtering for overlaps using a custom error model. After that\, the louvain modularity it used to extract bicluster communities from the similarity network\, which can then be converted to ensemble biclusters. Additionally\, MoSBi includes several network visualization methods to give an intuitive and scalable overview of the results. MoSBi comes with several biclustering algorithms\, but can be easily extended to new biclustering algorithms.


.. conda:package:: bioconductor-mosbi

   |downloads_bioconductor-mosbi| |docker_bioconductor-mosbi|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-fabia: ``>=2.52.0,<2.53.0``
   :depends bioconductor-fabia: ``>=2.52.0,<2.53.0a0``
   :depends bioconductor-qubic: ``>=1.34.0,<1.35.0``
   :depends bioconductor-qubic: ``>=1.34.0,<1.35.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-akmbiclust: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-biclust: 
   :depends r-igraph: 
   :depends r-isa2: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-xml2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mosbi

   and update with::

      mamba update bioconductor-mosbi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosbi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosbi:<tag>

   (see `bioconductor-mosbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosbi
   :alt:   (downloads)
.. |docker_bioconductor-mosbi| image:: https://quay.io/repository/biocontainers/bioconductor-mosbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosbi
.. _`bioconductor-mosbi/tags`: https://quay.io/repository/biocontainers/bioconductor-mosbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosbi";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosbi/README.html