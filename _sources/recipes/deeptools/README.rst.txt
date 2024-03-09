:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeptools'
.. highlight: bash

deeptools
=========

.. conda:recipe:: deeptools
   :replaces_section_title:
   :noindex:

   A set of user\-friendly tools for normalization and visualzation of deep\-sequencing data

   :homepage: https://github.com/deeptools/deepTools
   :documentation: https://deeptools.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`deeptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools/meta.yaml>`_
   :links: biotools: :biotools:`deeptools`, doi: :doi:`10.1093/nar/gkw257`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_heatmap`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_pca`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_profile`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_correlation`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_coverage`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_fingerprint`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_enrichment`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bam_compare`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bam_pe_fragmentsize`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bigwig_compare`, usegalaxy-eu: :usegalaxy-eu:`deeptools_correct_gc_bias`, usegalaxy-eu: :usegalaxy-eu:`deeptools_multi_bam_summary`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_matrix`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_gc_bias`, usegalaxy-eu: :usegalaxy-eu:`deeptools_multi_bigwig_summary`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_matrix_operations`, usegalaxy-eu: :usegalaxy-eu:`deeptools_alignmentsieve`, usegalaxy-eu: :usegalaxy-eu:`deeptools_estimatereadfiltering`, usegalaxy-eu: :usegalaxy-eu:`hicup_deduplicator`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bigwig_average`

   


.. conda:package:: deeptools

   |downloads_deeptools| |docker_deeptools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.5-0</code>,  <code>3.5.4-1</code>,  <code>3.5.3-0</code>,  <code>3.5.2-1</code>,  <code>3.5.2-0</code>,  <code>3.5.1-1</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.4.3-0</code>,  </span></summary>
      

      ``3.5.5-0``,  ``3.5.4-1``,  ``3.5.3-0``,  ``3.5.2-1``,  ``3.5.2-0``,  ``3.5.1-1``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.6-2``,  ``2.3.6-1``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.9.1-0``,  ``1.5.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends deeptoolsintervals: ``>=0.1.8``
   :depends importlib-metadata: 
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.9.0``
   :depends numpydoc: ``>=0.5``
   :depends plotly: ``>=4.9``
   :depends py2bit: ``>=0.2.0``
   :depends pybigwig: ``>=0.2.3``
   :depends pysam: ``>=0.14.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=0.17.0``
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

      mamba install deeptools

   and update with::

      mamba update deeptools

  To create a new environment, run::

      mamba create --name myenvname deeptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deeptools:<tag>

   (see `deeptools/tags`_ for valid values for ``<tag>``)


.. |downloads_deeptools| image:: https://img.shields.io/conda/dn/bioconda/deeptools.svg?style=flat
   :target: https://anaconda.org/bioconda/deeptools
   :alt:   (downloads)
.. |docker_deeptools| image:: https://quay.io/repository/biocontainers/deeptools/status
   :target: https://quay.io/repository/biocontainers/deeptools
.. _`deeptools/tags`: https://quay.io/repository/biocontainers/deeptools?tab=tags


.. raw:: html

    <script>
        var package = "deeptools";
        var versions = ["3.5.5","3.5.4","3.5.3","3.5.2","3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeptools/README.html