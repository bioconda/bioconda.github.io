:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmrp'
.. highlight: bash

bioconductor-gmrp
=================

.. conda:recipe:: bioconductor-gmrp
   :replaces_section_title:
   :noindex:

   GWAS\-based Mendelian Randomization and Path Analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GMRP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gmrp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp/meta.yaml>`_
   :links: biotools: :biotools:`gmrp`, doi: :doi:`10.1038/nmeth.3252`

   Perform Mendelian randomization analysis of multiple SNPs to determine risk factors causing disease of study and to exclude confounding variabels and perform path analysis to construct path of risk factors to the disease.


.. conda:package:: bioconductor-gmrp

   |downloads_bioconductor-gmrp| |docker_bioconductor-gmrp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-diagram: 
   :depends r-plotrix: 
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

      mamba install bioconductor-gmrp

   and update with::

      mamba update bioconductor-gmrp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gmrp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmrp:<tag>

   (see `bioconductor-gmrp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmrp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmrp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmrp
   :alt:   (downloads)
.. |docker_bioconductor-gmrp| image:: https://quay.io/repository/biocontainers/bioconductor-gmrp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmrp
.. _`bioconductor-gmrp/tags`: https://quay.io/repository/biocontainers/bioconductor-gmrp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gmrp";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmrp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmrp/README.html