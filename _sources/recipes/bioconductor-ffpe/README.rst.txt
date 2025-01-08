:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ffpe'
.. highlight: bash

bioconductor-ffpe
=================

.. conda:recipe:: bioconductor-ffpe
   :replaces_section_title:
   :noindex:

   Quality assessment and control for FFPE microarray expression data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ffpe.html
   :license: GPL (>2)
   :recipe: /`bioconductor-ffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpe/meta.yaml>`_
   :links: biotools: :biotools:`ffpe`

   Identify low\-quality data using metrics developed for expression data derived from Formalin\-Fixed\, Paraffin\-Embedded \(FFPE\) data.  Also a function for making Concordance at the Top plots \(CAT\-plots\).


.. conda:package:: bioconductor-ffpe

   |downloads_bioconductor-ffpe| |docker_bioconductor-ffpe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-lumi: ``>=2.58.0,<2.59.0``
   :depends bioconductor-methylumi: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-sfsmisc: 
   :depends r-ttr: 
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

      mamba install bioconductor-ffpe

   and update with::

      mamba update bioconductor-ffpe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ffpe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ffpe:<tag>

   (see `bioconductor-ffpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ffpe
   :alt:   (downloads)
.. |docker_bioconductor-ffpe| image:: https://quay.io/repository/biocontainers/bioconductor-ffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpe
.. _`bioconductor-ffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-ffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ffpe";
        var versions = ["1.50.0","1.46.0","1.44.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpe/README.html