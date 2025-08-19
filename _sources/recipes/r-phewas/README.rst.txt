:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phewas'
.. highlight: bash

r-phewas
========

.. conda:recipe:: r-phewas
   :replaces_section_title:
   :noindex:

   Phenome Wide Association Studies \(PheWAS\) \- Functions to perform Phenome Wide Association Studies \(PheWAS\). These functions include the conversion of ICD9 codes to PheWAS codes \(v1.2\)\, statistical analysis\, and plotting.

   :homepage: https://github.com/PheWAS/PheWAS
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-phewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phewas/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu197`

   


.. conda:package:: r-phewas

   |downloads_r-phewas| |docker_r-phewas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.6-2</code>,  <code>0.99.6-1</code>,  <code>0.99.6-0</code>,  <code>0.12.1-8</code>,  <code>0.12.1-7</code>,  <code>0.12.1-6</code>,  <code>0.12.1-5</code>,  <code>0.12.1-4</code>,  <code>0.12.1-3</code>,  </span></summary>
      

      ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.12.1-8``,  ``0.12.1-7``,  ``0.12.1-6``,  ``0.12.1-5``,  ``0.12.1-4``,  ``0.12.1-3``,  ``0.12.1-2``,  ``0.12.1-1``,  ``0.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.4.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-ggrepel: 
   :depends r-lmtest: 
   :depends r-logistf: 
   :depends r-mass: 
   :depends r-meta: 
   :depends r-survival: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-phewas

   and update with::

      mamba update r-phewas

  To create a new environment, run::

      mamba create --name myenvname r-phewas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-phewas:<tag>

   (see `r-phewas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phewas| image:: https://img.shields.io/conda/dn/bioconda/r-phewas.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phewas
   :alt:   (downloads)
.. |docker_r-phewas| image:: https://quay.io/repository/biocontainers/r-phewas/status
   :target: https://quay.io/repository/biocontainers/r-phewas
.. _`r-phewas/tags`: https://quay.io/repository/biocontainers/r-phewas?tab=tags


.. raw:: html

    <script>
        var package = "r-phewas";
        var versions = ["0.99.6","0.99.6","0.99.6","0.12.1","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phewas/README.html