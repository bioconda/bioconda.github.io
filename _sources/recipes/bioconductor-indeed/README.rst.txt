:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-indeed'
.. highlight: bash

bioconductor-indeed
===================

.. conda:recipe:: bioconductor-indeed
   :replaces_section_title:
   :noindex:

   Interactive Visualization of Integrated Differential Expression and Differential Network Analysis for Biomarker Candidate Selection Package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/INDEED.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-indeed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indeed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indeed/meta.yaml>`_

   An R package for integrated differential expression and differential network analysis based on omic data for cancer biomarker discovery. Both correlation and partial correlation can be used to generate differential network to aid the traditional differential expression analysis to identify changes between biomolecules on both their expression and pairwise association levels. A detailed description of the methodology has been published in Methods journal \(PMID\: 27592383\). An interactive visualization feature allows for the exploration and selection of candidate biomarkers.


.. conda:package:: bioconductor-indeed

   |downloads_bioconductor-indeed| |docker_bioconductor-indeed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: ``>=1.13.0``
   :depends r-glasso: ``>=1.8``
   :depends r-igraph: ``>=1.2.4``
   :depends r-visnetwork: ``>=2.0.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-indeed

   and update with::

      mamba update bioconductor-indeed

  To create a new environment, run::

      mamba create --name myenvname bioconductor-indeed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-indeed:<tag>

   (see `bioconductor-indeed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-indeed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-indeed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-indeed
   :alt:   (downloads)
.. |docker_bioconductor-indeed| image:: https://quay.io/repository/biocontainers/bioconductor-indeed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-indeed
.. _`bioconductor-indeed/tags`: https://quay.io/repository/biocontainers/bioconductor-indeed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-indeed";
        var versions = ["2.14.0","2.12.0","2.8.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-indeed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-indeed/README.html