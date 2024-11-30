:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-orqa'
.. highlight: bash

r-orqa
======

.. conda:recipe:: r-orqa
   :replaces_section_title:
   :noindex:

   Assess repeatability\, accuracy and corss\-platform agreement of titration microarray data based on order restricted inference procedures

   :homepage: https://CRAN.R-project.org/package=orQA
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-orqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa/meta.yaml>`_

   


.. conda:package:: r-orqa

   |downloads_r-orqa| |docker_r-orqa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-10</code>,  <code>0.2.1-9</code>,  <code>0.2.1-8</code>,  <code>0.2.1-7</code>,  <code>0.2.1-6</code>,  <code>0.2.1-5</code>,  <code>0.2.1-4</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  </span></summary>
      

      ``0.2.1-10``,  ``0.2.1-9``,  ``0.2.1-8``,  ``0.2.1-7``,  ``0.2.1-6``,  ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genefilter: ``>=1.24.3``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: ``>=2.6.1``
   :depends r-nlme: ``>=3.1_96``
   :depends r-rcpp: ``>=0.8.9``
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

      mamba install r-orqa

   and update with::

      mamba update r-orqa

  To create a new environment, run::

      mamba create --name myenvname r-orqa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-orqa:<tag>

   (see `r-orqa/tags`_ for valid values for ``<tag>``)


.. |downloads_r-orqa| image:: https://img.shields.io/conda/dn/bioconda/r-orqa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-orqa
   :alt:   (downloads)
.. |docker_r-orqa| image:: https://quay.io/repository/biocontainers/r-orqa/status
   :target: https://quay.io/repository/biocontainers/r-orqa
.. _`r-orqa/tags`: https://quay.io/repository/biocontainers/r-orqa?tab=tags


.. raw:: html

    <script>
        var package = "r-orqa";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-orqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-orqa/README.html