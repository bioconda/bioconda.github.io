:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-grain'
.. highlight: bash

r-grain
=======

.. conda:recipe:: r-grain
   :replaces_section_title:
   :noindex:

   Probability propagation in graphical independence networks\, also known as Bayesian networks or probabilistic expert systems.

   :homepage: http://people.math.aau.dk/~sorenh/software/gR/
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-grain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grain/meta.yaml>`_

   


.. conda:package:: r-grain

   |downloads_r-grain| |docker_r-grain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.14-0</code>,  <code>1.3.13-3</code>,  <code>1.3.13-2</code>,  <code>1.3.13-1</code>,  <code>1.3.13-0</code>,  </span></summary>
      

      ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.14-0``,  ``1.3.13-3``,  ``1.3.13-2``,  ``1.3.13-1``,  ``1.3.13-0``,  ``1.3.12-1``,  ``1.3.12-0``,  ``1.3.11-1``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3_0-6``,  ``1.3_0-5``,  ``1.3_0-4``,  ``1.3_0-3``,  ``1.3_0-2``,  ``1.3_0-1``,  ``1.3_0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-grbase: ``>=1.8.6.6``
   :depends r-grbase: ``>=2.0.2,<3.0a0``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-rcpp: ``>=0.11.1``
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
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

      mamba install r-grain

   and update with::

      mamba update r-grain

  To create a new environment, run::

      mamba create --name myenvname r-grain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-grain:<tag>

   (see `r-grain/tags`_ for valid values for ``<tag>``)


.. |downloads_r-grain| image:: https://img.shields.io/conda/dn/bioconda/r-grain.svg?style=flat
   :target: https://anaconda.org/bioconda/r-grain
   :alt:   (downloads)
.. |docker_r-grain| image:: https://quay.io/repository/biocontainers/r-grain/status
   :target: https://quay.io/repository/biocontainers/r-grain
.. _`r-grain/tags`: https://quay.io/repository/biocontainers/r-grain?tab=tags


.. raw:: html

    <script>
        var package = "r-grain";
        var versions = ["1.4.2","1.4.2","1.4.1","1.4.0","1.3.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grain/README.html