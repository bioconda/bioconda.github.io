:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isogene'
.. highlight: bash

r-isogene
=========

.. conda:recipe:: r-isogene
   :replaces_section_title:
   :noindex:

   Offers framework for testing for monotonic relationship between gene expression.

   :homepage: https://CRAN.R-project.org/package=IsoGene
   :license: GPL3 / GPL-3
   :recipe: /`r-isogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene/meta.yaml>`_

   


.. conda:package:: r-isogene

   |downloads_r-isogene| |docker_r-isogene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0_24-9</code>,  <code>1.0_24-8</code>,  <code>1.0_24-7</code>,  <code>1.0_24-6</code>,  <code>1.0_24-5</code>,  <code>1.0_24-4</code>,  <code>1.0_24-3</code>,  <code>1.0_24-2</code>,  <code>1.0_24-1</code>,  </span></summary>
      

      ``1.0_24-9``,  ``1.0_24-8``,  ``1.0_24-7``,  ``1.0_24-6``,  ``1.0_24-5``,  ``1.0_24-4``,  ``1.0_24-3``,  ``1.0_24-2``,  ``1.0_24-1``,  ``1.0_24-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: 
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ff: ``>=2.0.0``
   :depends r-iso: 
   :depends r-xtable: 
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

      mamba install r-isogene

   and update with::

      mamba update r-isogene

  To create a new environment, run::

      mamba create --name myenvname r-isogene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-isogene:<tag>

   (see `r-isogene/tags`_ for valid values for ``<tag>``)


.. |downloads_r-isogene| image:: https://img.shields.io/conda/dn/bioconda/r-isogene.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isogene
   :alt:   (downloads)
.. |docker_r-isogene| image:: https://quay.io/repository/biocontainers/r-isogene/status
   :target: https://quay.io/repository/biocontainers/r-isogene
.. _`r-isogene/tags`: https://quay.io/repository/biocontainers/r-isogene?tab=tags


.. raw:: html

    <script>
        var package = "r-isogene";
        var versions = ["1.0_24","1.0_24","1.0_24","1.0_24","1.0_24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isogene/README.html