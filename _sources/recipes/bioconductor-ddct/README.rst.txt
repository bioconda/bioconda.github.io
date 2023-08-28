:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ddct'
.. highlight: bash

bioconductor-ddct
=================

.. conda:recipe:: bioconductor-ddct
   :replaces_section_title:
   :noindex:

   The ddCt Algorithm for the Analysis of Quantitative Real\-Time PCR \(qRT\-PCR\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ddCt.html
   :license: LGPL-3
   :recipe: /`bioconductor-ddct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddct/meta.yaml>`_
   :links: biotools: :biotools:`ddct`, doi: :doi:`10.1038/nmeth.3252`

   The Delta\-Delta\-Ct \(ddCt\) Algorithm is an approximation method to determine relative gene expression with quantitative real\-time PCR \(qRT\-PCR\) experiments. Compared to other approaches\, it requires no standard curve for each primer\-target pair\, therefore reducing the working load and yet returning accurate enough results as long as the assumptions of the amplification efficiency hold. The ddCt package implements a pipeline to collect\, analyse and visualize qRT\-PCR results\, for example those from TaqMan SDM software\, mainly using the ddCt method. The pipeline can be either invoked by a script in command\-line or through the API consisting of S4\-Classes\, methods and functions.


.. conda:package:: bioconductor-ddct

   |downloads_bioconductor-ddct| |docker_bioconductor-ddct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-rcolorbrewer: ``>=0.1-3``
   :depends r-xtable: 
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

      mamba install bioconductor-ddct

   and update with::

      mamba update bioconductor-ddct

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ddct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ddct:<tag>

   (see `bioconductor-ddct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ddct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ddct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ddct
   :alt:   (downloads)
.. |docker_bioconductor-ddct| image:: https://quay.io/repository/biocontainers/bioconductor-ddct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ddct
.. _`bioconductor-ddct/tags`: https://quay.io/repository/biocontainers/bioconductor-ddct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ddct";
        var versions = ["1.56.0","1.54.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ddct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ddct/README.html