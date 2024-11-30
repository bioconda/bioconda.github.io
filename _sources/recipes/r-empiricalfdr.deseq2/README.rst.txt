:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-empiricalfdr.deseq2'
.. highlight: bash

r-empiricalfdr.deseq2
=====================

.. conda:recipe:: r-empiricalfdr.deseq2
   :replaces_section_title:
   :noindex:

   Auxiliary functions for the DESeq2 package to simulate read counts according to the null hypothesis \(i.e.\, with empirical sample size factors\, per\-gene total counts and dispersions\, but without effects of predictor variables\) and to compute the empirical false discovery rate.

   :homepage: https://CRAN.R-project.org/package=empiricalFDR.DESeq2
   :license: GPL3 / GPL-3
   :recipe: /`r-empiricalfdr.deseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-empiricalfdr.deseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-empiricalfdr.deseq2/meta.yaml>`_

   


.. conda:package:: r-empiricalfdr.deseq2

   |downloads_r-empiricalfdr.deseq2| |docker_r-empiricalfdr.deseq2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-10</code>,  <code>1.0.3-9</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  </span></summary>
      

      ``1.0.3-10``,  ``1.0.3-9``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomicranges: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-empiricalfdr.deseq2

   and update with::

      mamba update r-empiricalfdr.deseq2

  To create a new environment, run::

      mamba create --name myenvname r-empiricalfdr.deseq2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-empiricalfdr.deseq2:<tag>

   (see `r-empiricalfdr.deseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-empiricalfdr.deseq2| image:: https://img.shields.io/conda/dn/bioconda/r-empiricalfdr.deseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-empiricalfdr.deseq2
   :alt:   (downloads)
.. |docker_r-empiricalfdr.deseq2| image:: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2/status
   :target: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2
.. _`r-empiricalfdr.deseq2/tags`: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2?tab=tags


.. raw:: html

    <script>
        var package = "r-empiricalfdr.deseq2";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-empiricalfdr.deseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-empiricalfdr.deseq2/README.html