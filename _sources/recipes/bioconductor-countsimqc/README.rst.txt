:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-countsimqc'
.. highlight: bash

bioconductor-countsimqc
=======================

.. conda:recipe:: bioconductor-countsimqc
   :replaces_section_title:
   :noindex:

   Compare Characteristic Features of Count Data Sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/countsimQC.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-countsimqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countsimqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countsimqc/meta.yaml>`_

   countsimQC provides functionality to create a comprehensive report comparing a broad range of characteristics across a collection of count matrices. One important use case is the comparison of one or more synthetic count matrices to a real count matrix\, possibly the one underlying the simulations. However\, any collection of count matrices can be compared.


.. conda:package:: bioconductor-countsimqc

   |downloads_bioconductor-countsimqc| |docker_bioconductor-countsimqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catools: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ragg: 
   :depends r-randtests: 
   :depends r-rmarkdown: ``>=2.5``
   :depends r-tidyr: 
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

      mamba install bioconductor-countsimqc

   and update with::

      mamba update bioconductor-countsimqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-countsimqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-countsimqc:<tag>

   (see `bioconductor-countsimqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-countsimqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-countsimqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-countsimqc
   :alt:   (downloads)
.. |docker_bioconductor-countsimqc| image:: https://quay.io/repository/biocontainers/bioconductor-countsimqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-countsimqc
.. _`bioconductor-countsimqc/tags`: https://quay.io/repository/biocontainers/bioconductor-countsimqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-countsimqc";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-countsimqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-countsimqc/README.html