:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaeditr'
.. highlight: bash

bioconductor-rnaeditr
=====================

.. conda:recipe:: bioconductor-rnaeditr
   :replaces_section_title:
   :noindex:

   Statistical analysis of RNA editing sites and hyper\-editing regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rnaEditr.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaeditr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaeditr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaeditr/meta.yaml>`_

   RNAeditr analyzes site\-specific RNA editing events\, as well as hyper\-editing regions. The editing frequencies can be tested against binary\, continuous or survival outcomes. Multiple covariate variables as well as interaction effects can also be incorporated in the statistical models.


.. conda:package:: bioconductor-rnaeditr

   |downloads_bioconductor-rnaeditr| |docker_bioconductor-rnaeditr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-bumphunter: ``>=1.48.0,<1.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-corrplot: 
   :depends r-logistf: 
   :depends r-plyr: 
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

      mamba install bioconductor-rnaeditr

   and update with::

      mamba update bioconductor-rnaeditr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnaeditr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaeditr:<tag>

   (see `bioconductor-rnaeditr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaeditr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaeditr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaeditr
   :alt:   (downloads)
.. |docker_bioconductor-rnaeditr| image:: https://quay.io/repository/biocontainers/bioconductor-rnaeditr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaeditr
.. _`bioconductor-rnaeditr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaeditr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaeditr";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaeditr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaeditr/README.html