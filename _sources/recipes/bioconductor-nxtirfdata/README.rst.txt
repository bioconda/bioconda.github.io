:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nxtirfdata'
.. highlight: bash

bioconductor-nxtirfdata
=======================

.. conda:recipe:: bioconductor-nxtirfdata
   :replaces_section_title:
   :noindex:

   Data for NxtIRF

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/NxtIRFdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-nxtirfdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfdata/meta.yaml>`_

   NxtIRFdata is a companion package for SpliceWiz\, an interactive analysis and visualization tool for alternative splicing quantitation \(including intron retention\) for RNA\-seq BAM files. NxtIRFdata contains Mappability files required for the generation of human and mouse references. NxtIRFdata also contains a synthetic genome reference and example BAM files used to demonstrate SpliceWiz\'s functionality. BAM files are based on 6 samples from the Leucegene dataset provided by NCBI Gene Expression Omnibus under accession number GSE67039.


.. conda:package:: bioconductor-nxtirfdata

   |downloads_bioconductor-nxtirfdata| |docker_bioconductor-nxtirfdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-r.utils: 
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

      mamba install bioconductor-nxtirfdata

   and update with::

      mamba update bioconductor-nxtirfdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nxtirfdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nxtirfdata:<tag>

   (see `bioconductor-nxtirfdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nxtirfdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nxtirfdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nxtirfdata
   :alt:   (downloads)
.. |docker_bioconductor-nxtirfdata| image:: https://quay.io/repository/biocontainers/bioconductor-nxtirfdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nxtirfdata
.. _`bioconductor-nxtirfdata/tags`: https://quay.io/repository/biocontainers/bioconductor-nxtirfdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nxtirfdata";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nxtirfdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nxtirfdata/README.html