:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsbig'
.. highlight: bash

bioconductor-msstatsbig
=======================

.. conda:recipe:: bioconductor-msstatsbig
   :replaces_section_title:
   :noindex:

   MSstats Preprocessing for Larger than Memory Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSstatsBig.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsbig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbig/meta.yaml>`_

   MSstats package provide tools for preprocessing\, summarization and differential analysis of mass spectrometry \(MS\) proteomics data. Recently\, some MS protocols enable acquisition of data sets that result in larger than memory quantitative data. MSstats functions are not able to process such data. MSstatsBig package provides additional converter functions that enable processing larger than memory data sets.


.. conda:package:: bioconductor-msstatsbig

   |downloads_bioconductor-msstatsbig| |docker_bioconductor-msstatsbig|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-msstats: ``>=4.10.0,<4.11.0``
   :depends bioconductor-msstatsconvert: ``>=1.12.0,<1.13.0``
   :depends r-arrow: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-readr: 
   :depends r-sparklyr: 
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

      mamba install bioconductor-msstatsbig

   and update with::

      mamba update bioconductor-msstatsbig

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatsbig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsbig:<tag>

   (see `bioconductor-msstatsbig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsbig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsbig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsbig
   :alt:   (downloads)
.. |docker_bioconductor-msstatsbig| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsbig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsbig
.. _`bioconductor-msstatsbig/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsbig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsbig";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsbig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsbig/README.html