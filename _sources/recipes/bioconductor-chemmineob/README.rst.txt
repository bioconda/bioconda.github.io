:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chemmineob'
.. highlight: bash

bioconductor-chemmineob
=======================

.. conda:recipe:: bioconductor-chemmineob
   :replaces_section_title:
   :noindex:

   R interface to a subset of OpenBabel functionalities

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ChemmineOB.html
   :license: file LICENSE
   :recipe: /`bioconductor-chemmineob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemmineob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemmineob/meta.yaml>`_

   ChemmineOB provides an R interface to a subset of cheminformatics functionalities implemented by the OpelBabel C\+\+ project. OpenBabel is an open source cheminformatics toolbox that includes utilities for structure format interconversions\, descriptor calculations\, compound similarity searching and more. ChemineOB aims to make a subset of these utilities available from within R. For non\-developers\, ChemineOB is primarily intended to be used from ChemmineR as an add\-on package rather than used directly.


.. conda:package:: bioconductor-chemmineob

   |downloads_bioconductor-chemmineob| |docker_bioconductor-chemmineob|

   :versions:
      
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends eigen: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends openbabel: ``>=3``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-rcpp: ``>=0.11.0``
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

      mamba install bioconductor-chemmineob

   and update with::

      mamba update bioconductor-chemmineob

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chemmineob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chemmineob:<tag>

   (see `bioconductor-chemmineob/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chemmineob| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemmineob.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chemmineob
   :alt:   (downloads)
.. |docker_bioconductor-chemmineob| image:: https://quay.io/repository/biocontainers/bioconductor-chemmineob/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemmineob
.. _`bioconductor-chemmineob/tags`: https://quay.io/repository/biocontainers/bioconductor-chemmineob?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chemmineob";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemmineob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemmineob/README.html