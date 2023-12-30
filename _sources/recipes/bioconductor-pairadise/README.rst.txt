:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pairadise'
.. highlight: bash

bioconductor-pairadise
======================

.. conda:recipe:: bioconductor-pairadise
   :replaces_section_title:
   :noindex:

   PAIRADISE\: Paired analysis of differential isoform expression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PAIRADISE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pairadise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairadise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairadise/meta.yaml>`_

   This package implements the PAIRADISE procedure for detecting differential isoform expression between matched replicates in paired RNA\-Seq data.


.. conda:package:: bioconductor-pairadise

   |downloads_bioconductor-pairadise| |docker_bioconductor-pairadise|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-nloptr: 
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

      mamba install bioconductor-pairadise

   and update with::

      mamba update bioconductor-pairadise

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pairadise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pairadise:<tag>

   (see `bioconductor-pairadise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pairadise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pairadise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pairadise
   :alt:   (downloads)
.. |docker_bioconductor-pairadise| image:: https://quay.io/repository/biocontainers/bioconductor-pairadise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pairadise
.. _`bioconductor-pairadise/tags`: https://quay.io/repository/biocontainers/bioconductor-pairadise?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pairadise";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pairadise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pairadise/README.html