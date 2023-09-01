:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tigre'
.. highlight: bash

bioconductor-tigre
==================

.. conda:recipe:: bioconductor-tigre
   :replaces_section_title:
   :noindex:

   Transcription factor Inference through Gaussian process Reconstruction of Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tigre.html
   :license: AGPL-3
   :recipe: /`bioconductor-tigre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tigre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tigre/meta.yaml>`_
   :links: biotools: :biotools:`tigre`

   The tigre package implements our methodology of Gaussian process differential equation models for analysis of gene expression time series from single input motif networks. The package can be used for inferring unobserved transcription factor \(TF\) protein concentrations from expression measurements of known target genes\, or for ranking candidate targets of a TF.


.. conda:package:: bioconductor-tigre

   |downloads_bioconductor-tigre| |docker_bioconductor-tigre|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-gplots: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-tigre

   and update with::

      mamba update bioconductor-tigre

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tigre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tigre:<tag>

   (see `bioconductor-tigre/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tigre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tigre.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tigre
   :alt:   (downloads)
.. |docker_bioconductor-tigre| image:: https://quay.io/repository/biocontainers/bioconductor-tigre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tigre
.. _`bioconductor-tigre/tags`: https://quay.io/repository/biocontainers/bioconductor-tigre?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tigre";
        var versions = ["1.54.0","1.52.0","1.52.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tigre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tigre/README.html