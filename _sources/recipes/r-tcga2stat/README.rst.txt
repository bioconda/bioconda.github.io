:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tcga2stat'
.. highlight: bash

r-tcga2stat
===========

.. conda:recipe:: r-tcga2stat
   :replaces_section_title:
   :noindex:

   Automatically downloads and processes TCGA genomics and clinical data into a format convenient for statistical analyses in the R environment.

   :homepage: http://www.liuzlab.org/TCGA2STAT/
   :license: GPL2 / GPL-2
   :recipe: /`r-tcga2stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat/meta.yaml>`_

   


.. conda:package:: r-tcga2stat

   |downloads_r-tcga2stat| |docker_r-tcga2stat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-11</code>,  <code>1.2-10</code>,  <code>1.2-9</code>,  <code>1.2-8</code>,  <code>1.2-7</code>,  <code>1.2-6</code>,  <code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  </span></summary>
      

      ``1.2-11``,  ``1.2-10``,  ``1.2-9``,  ``1.2-8``,  ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cntools: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-xml: 
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

      mamba install r-tcga2stat

   and update with::

      mamba update r-tcga2stat

  To create a new environment, run::

      mamba create --name myenvname r-tcga2stat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tcga2stat:<tag>

   (see `r-tcga2stat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tcga2stat| image:: https://img.shields.io/conda/dn/bioconda/r-tcga2stat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tcga2stat
   :alt:   (downloads)
.. |docker_r-tcga2stat| image:: https://quay.io/repository/biocontainers/r-tcga2stat/status
   :target: https://quay.io/repository/biocontainers/r-tcga2stat
.. _`r-tcga2stat/tags`: https://quay.io/repository/biocontainers/r-tcga2stat?tab=tags


.. raw:: html

    <script>
        var package = "r-tcga2stat";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcga2stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcga2stat/README.html