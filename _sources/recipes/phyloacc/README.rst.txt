:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloacc'
.. highlight: bash

phyloacc
========

.. conda:recipe:: phyloacc
   :replaces_section_title:
   :noindex:

   Bayesian estimation of substitution rate shifts in non\-coding regions

   :homepage: https://phyloacc.github.io/
   :documentation: https://phyloacc.github.io/readme.html
   
   :developer docs: https://github.com/phyloacc/PhyloAcc
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phyloacc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc/meta.yaml>`_

   Bayesian estimation of substitution rate shifts in non\-coding regions


.. conda:package:: phyloacc

   |downloads_phyloacc| |docker_phyloacc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.3.4-2</code>,  <code>2.3.4-1</code>,  <code>2.3.4-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends armadillo: ``>=14.0,<15.0a0``
   :depends biopython: ``>=1.79``
   :depends blis: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=12``
   :depends matplotlib-base: ``>=3.5``
   :depends numpy: ``>=1.22``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends snakemake-minimal: ``>=7.3,<8.0``
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

      mamba install phyloacc

   and update with::

      mamba update phyloacc

  To create a new environment, run::

      mamba create --name myenvname phyloacc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyloacc:<tag>

   (see `phyloacc/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloacc| image:: https://img.shields.io/conda/dn/bioconda/phyloacc.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloacc
   :alt:   (downloads)
.. |docker_phyloacc| image:: https://quay.io/repository/biocontainers/phyloacc/status
   :target: https://quay.io/repository/biocontainers/phyloacc
.. _`phyloacc/tags`: https://quay.io/repository/biocontainers/phyloacc?tab=tags


.. raw:: html

    <script>
        var package = "phyloacc";
        var versions = ["2.4.0","2.3.4","2.3.4","2.3.4","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloacc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloacc/README.html