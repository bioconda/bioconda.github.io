:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiergwas'
.. highlight: bash

bioconductor-hiergwas
=====================

.. conda:recipe:: bioconductor-hiergwas
   :replaces_section_title:
   :noindex:

   Asessing statistical significance in predictive GWA studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/hierGWAS.html
   :license: GPL-3
   :recipe: /`bioconductor-hiergwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas/meta.yaml>`_

   Testing individual SNPs\, as well as arbitrarily large groups of SNPs in GWA studies\, using a joint model of all SNPs. The method controls the FWER\, and provides an automatic\, data\-driven refinement of the SNP clusters to smaller groups or single markers.


.. conda:package:: bioconductor-hiergwas

   |downloads_bioconductor-hiergwas| |docker_bioconductor-hiergwas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fastcluster: 
   :depends r-fmsb: 
   :depends r-glmnet: 
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

      mamba install bioconductor-hiergwas

   and update with::

      mamba update bioconductor-hiergwas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hiergwas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiergwas:<tag>

   (see `bioconductor-hiergwas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiergwas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiergwas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiergwas
   :alt:   (downloads)
.. |docker_bioconductor-hiergwas| image:: https://quay.io/repository/biocontainers/bioconductor-hiergwas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiergwas
.. _`bioconductor-hiergwas/tags`: https://quay.io/repository/biocontainers/bioconductor-hiergwas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiergwas";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html