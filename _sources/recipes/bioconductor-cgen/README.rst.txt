:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cgen'
.. highlight: bash

bioconductor-cgen
=================

.. conda:recipe:: bioconductor-cgen
   :replaces_section_title:
   :noindex:

   An R package for analysis of case\-control studies in genetic epidemiology

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CGEN.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-cgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen/meta.yaml>`_

   This is a package for analysis of case\-control data in genetic epidemiology. It provides a set of statistical methods for evaluating gene\-environment \(or gene\-genes\) interactions under multiplicative and additive risk models\, with or without assuming gene\-environment \(or gene\-gene\) independence in the underlying population.


.. conda:package:: bioconductor-cgen

   |downloads_bioconductor-cgen| |docker_bioconductor-cgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.42.0-0</code>,  <code>3.38.0-1</code>,  <code>3.38.0-0</code>,  <code>3.36.1-0</code>,  <code>3.34.0-1</code>,  <code>3.34.0-0</code>,  <code>3.30.0-2</code>,  <code>3.30.0-1</code>,  <code>3.30.0-0</code>,  </span></summary>
      

      ``3.42.0-0``,  ``3.38.0-1``,  ``3.38.0-0``,  ``3.36.1-0``,  ``3.34.0-1``,  ``3.34.0-0``,  ``3.30.0-2``,  ``3.30.0-1``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.23.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mvtnorm: 
   :depends r-survival: 
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

      mamba install bioconductor-cgen

   and update with::

      mamba update bioconductor-cgen

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cgen:<tag>

   (see `bioconductor-cgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cgen
   :alt:   (downloads)
.. |docker_bioconductor-cgen| image:: https://quay.io/repository/biocontainers/bioconductor-cgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cgen
.. _`bioconductor-cgen/tags`: https://quay.io/repository/biocontainers/bioconductor-cgen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cgen";
        var versions = ["3.42.0","3.38.0","3.38.0","3.36.1","3.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cgen/README.html