:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbn'
.. highlight: bash

bioconductor-scbn
=================

.. conda:recipe:: bioconductor-scbn
   :replaces_section_title:
   :noindex:

   A statistical normalization method and differential expression analysis for RNA\-seq data between different species

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCBN.html
   :license: GPL-2
   :recipe: /`bioconductor-scbn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbn/meta.yaml>`_

   This package provides a scale based normalization \(SCBN\) method to identify genes with differential expression between different species. It takes into account the available knowledge of conserved orthologous genes and the hypothesis testing framework to detect differentially expressed orthologous genes. The method on this package are described in the article \'A statistical normalization method and differential expression analysis for RNA\-seq data between different species\' by Yan Zhou\, Jiadi Zhu\, Tiejun Tong\, Junhui Wang\, Bingqing Lin\, Jun Zhang \(2018\, pending publication\).


.. conda:package:: bioconductor-scbn

   |downloads_bioconductor-scbn| |docker_bioconductor-scbn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-scbn

   and update with::

      mamba update bioconductor-scbn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scbn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scbn:<tag>

   (see `bioconductor-scbn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scbn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scbn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scbn
   :alt:   (downloads)
.. |docker_bioconductor-scbn| image:: https://quay.io/repository/biocontainers/bioconductor-scbn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scbn
.. _`bioconductor-scbn/tags`: https://quay.io/repository/biocontainers/bioconductor-scbn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scbn";
        var versions = ["1.20.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scbn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scbn/README.html