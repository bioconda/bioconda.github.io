:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsprint'
.. highlight: bash

bioconductor-omicsprint
=======================

.. conda:recipe:: bioconductor-omicsprint
   :replaces_section_title:
   :noindex:

   Cross omic genetic fingerprinting

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/omicsPrint.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-omicsprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsprint/meta.yaml>`_

   omicsPrint provides functionality for cross omic genetic fingerprinting\, for example\, to verify sample relationships between multiple omics data types\, i.e. genomic\, transcriptomic and epigenetic \(DNA methylation\).


.. conda:package:: bioconductor-omicsprint

   |downloads_bioconductor-omicsprint| |docker_bioconductor-omicsprint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-raggedexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-omicsprint

   and update with::

      mamba update bioconductor-omicsprint

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicsprint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicsprint:<tag>

   (see `bioconductor-omicsprint/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicsprint| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsprint.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicsprint
   :alt:   (downloads)
.. |docker_bioconductor-omicsprint| image:: https://quay.io/repository/biocontainers/bioconductor-omicsprint/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsprint
.. _`bioconductor-omicsprint/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsprint?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicsprint";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicsprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicsprint/README.html