:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tnbc.cms'
.. highlight: bash

bioconductor-tnbc.cms
=====================

.. conda:recipe:: bioconductor-tnbc.cms
   :replaces_section_title:
   :noindex:

   TNBC.CMS\: Prediction of TNBC Consensus Molecular Subtypes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TNBC.CMS.html
   :license: GPL-3
   :recipe: /`bioconductor-tnbc.cms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms/meta.yaml>`_

   This package implements a machine learning\-based classifier for the assignment of consensus molecular subtypes to TNBC samples. It also provides functions to summarize genomic and clinical characteristics.


.. conda:package:: bioconductor-tnbc.cms

   |downloads_bioconductor-tnbc.cms| |docker_bioconductor-tnbc.cms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gsva: ``>=1.50.0,<1.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-forestplot: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-pheatmap: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
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

      mamba install bioconductor-tnbc.cms

   and update with::

      mamba update bioconductor-tnbc.cms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tnbc.cms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tnbc.cms:<tag>

   (see `bioconductor-tnbc.cms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tnbc.cms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnbc.cms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tnbc.cms
   :alt:   (downloads)
.. |docker_bioconductor-tnbc.cms| image:: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms
.. _`bioconductor-tnbc.cms/tags`: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tnbc.cms";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html