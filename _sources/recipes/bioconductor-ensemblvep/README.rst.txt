:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensemblvep'
.. highlight: bash

bioconductor-ensemblvep
=======================

.. conda:recipe:: bioconductor-ensemblvep
   :replaces_section_title:
   :noindex:

   R Interface to Ensembl Variant Effect Predictor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ensemblVEP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensemblvep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep/meta.yaml>`_
   :links: biotools: :biotools:`ensemblvep`, doi: :doi:`10.1186/s13059-016-0974-4`

   Query the Ensembl Variant Effect Predictor via the perl API.


.. conda:package:: bioconductor-ensemblvep

   |downloads_bioconductor-ensemblvep| |docker_bioconductor-ensemblvep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.1-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ensemblvep

   and update with::

      mamba update bioconductor-ensemblvep

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ensemblvep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensemblvep:<tag>

   (see `bioconductor-ensemblvep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensemblvep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensemblvep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensemblvep
   :alt:   (downloads)
.. |docker_bioconductor-ensemblvep| image:: https://quay.io/repository/biocontainers/bioconductor-ensemblvep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensemblvep
.. _`bioconductor-ensemblvep/tags`: https://quay.io/repository/biocontainers/bioconductor-ensemblvep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensemblvep";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html