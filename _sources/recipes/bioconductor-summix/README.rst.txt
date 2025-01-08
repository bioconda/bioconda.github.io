:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summix'
.. highlight: bash

bioconductor-summix
===================

.. conda:recipe:: bioconductor-summix
   :replaces_section_title:
   :noindex:

   Summix2\: A suite of methods to estimate\, adjust\, and leverage substructure in genetic summary data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Summix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-summix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix/meta.yaml>`_

   This package contains the Summix2 method for estimating and adjusting for substructure in genetic summary allele frequency data. The function summix\(\) estimates reference group proportions using a mixture model. The adjAF\(\) function produces adjusted allele frequencies for an observed group with reference group proportions matching a target individual or sample. The summix\_local\(\) function estimates local ancestry mixture proportions and performs selection scans in genetic summary data.


.. conda:package:: bioconductor-summix

   |downloads_bioconductor-summix| |docker_bioconductor-summix|

   :versions:
      
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-nloptr: 
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

      mamba install bioconductor-summix

   and update with::

      mamba update bioconductor-summix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-summix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-summix:<tag>

   (see `bioconductor-summix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-summix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summix
   :alt:   (downloads)
.. |docker_bioconductor-summix| image:: https://quay.io/repository/biocontainers/bioconductor-summix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summix
.. _`bioconductor-summix/tags`: https://quay.io/repository/biocontainers/bioconductor-summix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-summix";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summix/README.html