:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiiragi2013'
.. highlight: bash

bioconductor-hiiragi2013
========================

.. conda:recipe:: bioconductor-hiiragi2013
   :replaces_section_title:
   :noindex:

   Cell\-to\-cell expression variability followed by signal reinforcement progressively segregates early mouse lineages

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/Hiiragi2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hiiragi2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiiragi2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiiragi2013/meta.yaml>`_

   This package contains the experimental data and a complete executable transcript \(vignette\) of the statistical analysis presented in the paper \"Cell\-to\-cell expression variability followed by signal reinforcement progressively segregates early mouse lineages\" by Y. Ohnishi\, W. Huber\, A. Tsumura\, M. Kang\, P. Xenopoulos\, K. Kurimoto\, A. K. Oles\, M. J. Arauzo\-Bravo\, M. Saitou\, A.\-K. Hadjantonakis and T. Hiiragi\; Nature Cell Biology \(2014\) 16\(1\)\: 27\-37. doi\: 10.1038\/ncb2881.\"


.. conda:package:: bioconductor-hiiragi2013

   |downloads_bioconductor-hiiragi2013| |docker_bioconductor-hiiragi2013|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-geneplotter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-mouse4302.db: ``>=3.13.0,<3.14.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-xtable: 
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

      mamba install bioconductor-hiiragi2013

   and update with::

      mamba update bioconductor-hiiragi2013

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hiiragi2013

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiiragi2013:<tag>

   (see `bioconductor-hiiragi2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiiragi2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiiragi2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiiragi2013
   :alt:   (downloads)
.. |docker_bioconductor-hiiragi2013| image:: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013
.. _`bioconductor-hiiragi2013/tags`: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiiragi2013";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiiragi2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiiragi2013/README.html