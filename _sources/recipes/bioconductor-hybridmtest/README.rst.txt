:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hybridmtest'
.. highlight: bash

bioconductor-hybridmtest
========================

.. conda:recipe:: bioconductor-hybridmtest
   :replaces_section_title:
   :noindex:

   Hybrid Multiple Testing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HybridMTest.html
   :license: GPL Version 2 or later
   :recipe: /`bioconductor-hybridmtest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridmtest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridmtest/meta.yaml>`_
   :links: biotools: :biotools:`hybridmtest`, doi: :doi:`10.1038/nmeth.3252`

   Performs hybrid multiple testing that incorporates method selection and assumption evaluations into the analysis using empirical Bayes probability \(EBP\) estimates obtained by Grenander density estimation. For instance\, for 3\-group comparison analysis\, Hybrid Multiple testing considers EBPs as weighted EBPs between F\-test and H\-test with EBPs from Shapiro Wilk test of normality as weigth. Instead of just using EBPs from F\-test only or using H\-test only\, this methodology combines both types of EBPs through EBPs from Shapiro Wilk test of normality. This methodology uses then the law of total EBPs.


.. conda:package:: bioconductor-hybridmtest

   |downloads_bioconductor-hybridmtest| |docker_bioconductor-hybridmtest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-mass: 
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

      mamba install bioconductor-hybridmtest

   and update with::

      mamba update bioconductor-hybridmtest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hybridmtest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hybridmtest:<tag>

   (see `bioconductor-hybridmtest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hybridmtest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hybridmtest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hybridmtest
   :alt:   (downloads)
.. |docker_bioconductor-hybridmtest| image:: https://quay.io/repository/biocontainers/bioconductor-hybridmtest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hybridmtest
.. _`bioconductor-hybridmtest/tags`: https://quay.io/repository/biocontainers/bioconductor-hybridmtest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hybridmtest";
        var versions = ["1.46.0","1.44.0","1.42.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html