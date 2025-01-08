:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mobilerna'
.. highlight: bash

bioconductor-mobilerna
======================

.. conda:recipe:: bioconductor-mobilerna
   :replaces_section_title:
   :noindex:

   mobileRNA\: Investigate the RNA mobilome \& population\-scale changes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mobileRNA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mobilerna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilerna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilerna/meta.yaml>`_

   Genomic analysis can be utilised to identify differences between RNA populations in two conditions\, both in production and abundance. This includes the identification of RNAs produced by multiple genomes within a biological system. For example\, RNA produced by pathogens within a host or mobile RNAs in plant graft systems. The mobileRNA package provides methods to pre\-process\, analyse and visualise the sRNA and mRNA populations based on the premise of mapping reads to all genotypes at the same time.


.. conda:package:: bioconductor-mobilerna

   |downloads_bioconductor-mobilerna| |docker_bioconductor-mobilerna|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-mobilerna

   and update with::

      mamba update bioconductor-mobilerna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mobilerna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mobilerna:<tag>

   (see `bioconductor-mobilerna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mobilerna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mobilerna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mobilerna
   :alt:   (downloads)
.. |docker_bioconductor-mobilerna| image:: https://quay.io/repository/biocontainers/bioconductor-mobilerna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mobilerna
.. _`bioconductor-mobilerna/tags`: https://quay.io/repository/biocontainers/bioconductor-mobilerna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mobilerna";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mobilerna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mobilerna/README.html