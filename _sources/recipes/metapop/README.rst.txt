:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapop'
.. highlight: bash

metapop
=======

.. conda:recipe:: metapop
   :replaces_section_title:
   :noindex:

   A pipeline for the macro\- and micro\-diversity analyses and visualization of metagenomic\-derived populations

   :homepage: https://https://github.com/metaGmetapop/metapop
   :license: GPL / GPL-2.0
   :recipe: /`metapop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop/meta.yaml>`_

   


.. conda:package:: metapop

   |downloads_metapop| |docker_metapop|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends bcftools: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.0,<4.1``
   :depends r-bit64: 
   :depends r-compositions: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
   :depends r-vegan: 
   :depends samtools: 
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

      mamba install metapop

   and update with::

      mamba update metapop

  To create a new environment, run::

      mamba create --name myenvname metapop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metapop:<tag>

   (see `metapop/tags`_ for valid values for ``<tag>``)


.. |downloads_metapop| image:: https://img.shields.io/conda/dn/bioconda/metapop.svg?style=flat
   :target: https://anaconda.org/bioconda/metapop
   :alt:   (downloads)
.. |docker_metapop| image:: https://quay.io/repository/biocontainers/metapop/status
   :target: https://quay.io/repository/biocontainers/metapop
.. _`metapop/tags`: https://quay.io/repository/biocontainers/metapop?tab=tags


.. raw:: html

    <script>
        var package = "metapop";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapop/README.html