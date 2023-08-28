:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moda'
.. highlight: bash

bioconductor-moda
=================

.. conda:recipe:: bioconductor-moda
   :replaces_section_title:
   :noindex:

   MODA\: MOdule Differential Analysis for weighted gene co\-expression network

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MODA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-moda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moda/meta.yaml>`_

   MODA can be used to estimate and construct condition\-specific gene co\-expression networks\, and identify differentially expressed subnetworks as conserved or condition specific modules which are potentially associated with relevant biological processes.


.. conda:package:: bioconductor-moda

   |downloads_bioconductor-moda| |docker_bioconductor-moda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-amountain: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-dynamictreecut: 
   :depends r-igraph: 
   :depends r-rcolorbrewer: 
   :depends r-wgcna: 
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

      mamba install bioconductor-moda

   and update with::

      mamba update bioconductor-moda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moda:<tag>

   (see `bioconductor-moda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moda
   :alt:   (downloads)
.. |docker_bioconductor-moda| image:: https://quay.io/repository/biocontainers/bioconductor-moda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moda
.. _`bioconductor-moda/tags`: https://quay.io/repository/biocontainers/bioconductor-moda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moda";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moda/README.html