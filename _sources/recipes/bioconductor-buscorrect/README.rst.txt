:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-buscorrect'
.. highlight: bash

bioconductor-buscorrect
=======================

.. conda:recipe:: bioconductor-buscorrect
   :replaces_section_title:
   :noindex:

   Batch Effects Correction with Unknown Subtypes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BUScorrect.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-buscorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-buscorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-buscorrect/meta.yaml>`_
   :links: biotools: :biotools:`buscorrect`

   High\-throughput experimental data are accumulating exponentially in public databases. However\, mining valid scientific discoveries from these abundant resources is hampered by technical artifacts and inherent biological heterogeneity. The former are usually termed \"batch effects\,\" and the latter is often modelled by \"subtypes.\" The R package BUScorrect fits a Bayesian hierarchical model\, the Batch\-effects\-correction\-with\-Unknown\-Subtypes model \(BUS\)\, to correct batch effects in the presence of unknown subtypes. BUS is capable of \(a\) correcting batch effects explicitly\, \(b\) grouping samples that share similar characteristics into subtypes\, \(c\) identifying features that distinguish subtypes\, and \(d\) enjoying a linear\-order computation complexity.


.. conda:package:: bioconductor-buscorrect

   |downloads_bioconductor-buscorrect| |docker_bioconductor-buscorrect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-buscorrect

   and update with::

      mamba update bioconductor-buscorrect

  To create a new environment, run::

      mamba create --name myenvname bioconductor-buscorrect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-buscorrect:<tag>

   (see `bioconductor-buscorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-buscorrect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-buscorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-buscorrect
   :alt:   (downloads)
.. |docker_bioconductor-buscorrect| image:: https://quay.io/repository/biocontainers/bioconductor-buscorrect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-buscorrect
.. _`bioconductor-buscorrect/tags`: https://quay.io/repository/biocontainers/bioconductor-buscorrect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-buscorrect";
        var versions = ["1.24.0","1.20.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html