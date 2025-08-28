:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revbayes'
.. highlight: bash

revbayes
========

.. conda:recipe:: revbayes
   :replaces_section_title:
   :noindex:

   Bayesian Phylogenetic Inference Using Graphical Models and an Interactive Model\-Specification Language.

   :homepage: https://revbayes.github.io
   :documentation: https://revbayes.github.io/tutorials
   
   :developer docs: https://github.com/revbayes/revbayes
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`revbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes/meta.yaml>`_
   :links: biotools: :biotools:`revbayes`, doi: :doi:`10.1093/sysbio/syw021`, doi: :doi:`10.1093/sysbio/syu039`

   


.. conda:package:: revbayes

   |downloads_revbayes| |docker_revbayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.0.13-7</code>,  <code>1.0.13-6</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.0.13-7``,  ``1.0.13-6``,  ``1.0.13-5``,  ``1.0.13-4``,  ``1.0.13-3``,  ``1.0.13-2``,  ``1.0.13-1``,  ``1.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.71``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install revbayes

   and update with::

      mamba update revbayes

  To create a new environment, run::

      mamba create --name myenvname revbayes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/revbayes:<tag>

   (see `revbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_revbayes| image:: https://img.shields.io/conda/dn/bioconda/revbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/revbayes
   :alt:   (downloads)
.. |docker_revbayes| image:: https://quay.io/repository/biocontainers/revbayes/status
   :target: https://quay.io/repository/biocontainers/revbayes
.. _`revbayes/tags`: https://quay.io/repository/biocontainers/revbayes?tab=tags


.. raw:: html

    <script>
        var package = "revbayes";
        var versions = ["1.3.1","1.3.0","1.3.0","1.2.5","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revbayes/README.html