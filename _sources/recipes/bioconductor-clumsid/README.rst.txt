:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clumsid'
.. highlight: bash

bioconductor-clumsid
====================

.. conda:recipe:: bioconductor-clumsid
   :replaces_section_title:
   :noindex:

   Clustering of MS2 Spectra for Metabolite Identification

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CluMSID.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clumsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid/meta.yaml>`_

   CluMSID is a tool that aids the identification of features in untargeted LC\-MS\/MS analysis by the use of MS2 spectra similarity and unsupervised statistical methods. It offers functions for a complete and customisable workflow from raw data to visualisations and is interfaceable with the xmcs family of preprocessing packages.


.. conda:package:: bioconductor-clumsid

   |downloads_bioconductor-clumsid| |docker_bioconductor-clumsid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-mzr: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbscan: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-network: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-sna: 
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

      mamba install bioconductor-clumsid

   and update with::

      mamba update bioconductor-clumsid

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clumsid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clumsid:<tag>

   (see `bioconductor-clumsid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clumsid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clumsid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clumsid
   :alt:   (downloads)
.. |docker_bioconductor-clumsid| image:: https://quay.io/repository/biocontainers/bioconductor-clumsid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clumsid
.. _`bioconductor-clumsid/tags`: https://quay.io/repository/biocontainers/bioconductor-clumsid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clumsid";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clumsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clumsid/README.html