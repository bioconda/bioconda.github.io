:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncrnatools'
.. highlight: bash

bioconductor-ncrnatools
=======================

.. conda:recipe:: bioconductor-ncrnatools
   :replaces_section_title:
   :noindex:

   An R toolkit for non\-coding RNA

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ncRNAtools.html
   :license: GPL-3
   :recipe: /`bioconductor-ncrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools/meta.yaml>`_

   ncRNAtools provides a set of basic tools for handling and analyzing non\-coding RNAs. These include tools to access the RNAcentral database and to predict and visualize the secondary structure of non\-coding RNAs. The package also provides tools to read\, write and interconvert the file formats most commonly used for representing such secondary structures.


.. conda:package:: bioconductor-ncrnatools

   |downloads_bioconductor-ncrnatools| |docker_bioconductor-ncrnatools|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ncrnatools

   and update with::

      mamba update bioconductor-ncrnatools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ncrnatools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncrnatools:<tag>

   (see `bioconductor-ncrnatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncrnatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncrnatools
   :alt:   (downloads)
.. |docker_bioconductor-ncrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-ncrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncrnatools
.. _`bioconductor-ncrnatools/tags`: https://quay.io/repository/biocontainers/bioconductor-ncrnatools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncrnatools";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html