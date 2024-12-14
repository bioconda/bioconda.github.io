:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scdc'
.. highlight: bash

r-scdc
======

.. conda:recipe:: r-scdc
   :replaces_section_title:
   :noindex:

   SCDC adopts an ENSEMBLE method to integrate deconvolution results from different scRNA\-seq datasets that are produced in different laboratories and at different times\, implicitly addressing the batch\-effect confounding.

   :homepage: https://github.com/omnideconv/SCDC
   :license: MIT / MIT
   :recipe: /`r-scdc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scdc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scdc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbz166`

   


.. conda:package:: r-scdc

   |downloads_r-scdc| |docker_r-scdc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0-10</code>,  <code>0-9</code>,  <code>0-8</code>,  <code>0-7</code>,  <code>0-6</code>,  <code>0-5</code>,  <code>0-4</code>,  <code>0-3</code>,  <code>0-2</code>,  </span></summary>
      

      ``0-10``,  ``0-9``,  ``0-8``,  ``0-7``,  ``0-6``,  ``0-5``,  ``0-4``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.0.5``
   :depends r-cowplot: ``>=1.1.1``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-l1pack: ``>=0.38.196``
   :depends r-nnls: ``>=1.4``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-reshape: ``>=0.8.8``
   :depends xbioc: ``>=0.1.19``
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

      mamba install r-scdc

   and update with::

      mamba update r-scdc

  To create a new environment, run::

      mamba create --name myenvname r-scdc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scdc:<tag>

   (see `r-scdc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scdc| image:: https://img.shields.io/conda/dn/bioconda/r-scdc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scdc
   :alt:   (downloads)
.. |docker_r-scdc| image:: https://quay.io/repository/biocontainers/r-scdc/status
   :target: https://quay.io/repository/biocontainers/r-scdc
.. _`r-scdc/tags`: https://quay.io/repository/biocontainers/r-scdc?tab=tags


.. raw:: html

    <script>
        var package = "r-scdc";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scdc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scdc/README.html