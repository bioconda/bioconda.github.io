:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yarn'
.. highlight: bash

bioconductor-yarn
=================

.. conda:recipe:: bioconductor-yarn
   :replaces_section_title:
   :noindex:

   YARN\: Robust Multi\-Condition RNA\-Seq Preprocessing and Normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/yarn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yarn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yarn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yarn/meta.yaml>`_
   :links: biotools: :biotools:`yarn`, doi: :doi:`10.1101/086587`

   Expedite large RNA\-Seq analyses using a combination of previously developed tools. YARN is meant to make it easier for the user in performing basic mis\-annotation quality control\, filtering\, and condition\-aware normalization. YARN leverages many Bioconductor tools and statistical techniques to account for the large heterogeneity and sparsity found in very large RNA\-seq experiments.


.. conda:package:: bioconductor-yarn

   |downloads_bioconductor-yarn| |docker_bioconductor-yarn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-quantro: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-downloader: 
   :depends r-gplots: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
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

      mamba install bioconductor-yarn

   and update with::

      mamba update bioconductor-yarn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yarn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yarn:<tag>

   (see `bioconductor-yarn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yarn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yarn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yarn
   :alt:   (downloads)
.. |docker_bioconductor-yarn| image:: https://quay.io/repository/biocontainers/bioconductor-yarn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yarn
.. _`bioconductor-yarn/tags`: https://quay.io/repository/biocontainers/bioconductor-yarn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yarn";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yarn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yarn/README.html