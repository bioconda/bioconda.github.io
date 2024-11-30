:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smite'
.. highlight: bash

bioconductor-smite
==================

.. conda:recipe:: bioconductor-smite
   :replaces_section_title:
   :noindex:

   Significance\-based Modules Integrating the Transcriptome and Epigenome

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SMITE.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-smite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smite/meta.yaml>`_
   :links: biotools: :biotools:`smite`, doi: :doi:`10.1186/s12859-017-1477-3`

   This package builds on the Epimods framework which facilitates finding weighted subnetworks \(\"modules\"\) on Illumina Infinium 27k arrays using the SpinGlass algorithm\, as implemented in the iGraph package. We have created a class of gene centric annotations associated with p\-values and effect sizes and scores from any researchers prior statistical results to find functional modules.


.. conda:package:: bioconductor-smite

   |downloads_bioconductor-smite| |docker_bioconductor-smite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bionet: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genelendatabase: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-goseq: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-reactome.db: ``>=1.86.0,<1.87.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-plyr: 
   :depends r-scales: 
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

      mamba install bioconductor-smite

   and update with::

      mamba update bioconductor-smite

  To create a new environment, run::

      mamba create --name myenvname bioconductor-smite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smite:<tag>

   (see `bioconductor-smite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smite
   :alt:   (downloads)
.. |docker_bioconductor-smite| image:: https://quay.io/repository/biocontainers/bioconductor-smite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smite
.. _`bioconductor-smite/tags`: https://quay.io/repository/biocontainers/bioconductor-smite?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smite";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smite/README.html