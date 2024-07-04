:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasnv'
.. highlight: bash

metasnv
=======

.. conda:recipe:: metasnv
   :replaces_section_title:
   :noindex:

   SNV calling software

   :homepage: http://metasnv.embl.de
   :license: GPLv3
   :recipe: /`metasnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv/meta.yaml>`_

   


.. conda:package:: metasnv

   |downloads_metasnv| |docker_metasnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-8</code>,  <code>2.0.4-6</code>,  <code>2.0.4-5</code>,  <code>2.0.4-4</code>,  <code>2.0.4-3</code>,  <code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``2.0.4-8``,  ``2.0.4-6``,  ``2.0.4-5``,  ``2.0.4-4``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.26``
   :depends htslib: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends pandoc: ``>=2.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-ape: 
   :depends r-base: ``>=4.0``
   :depends r-batchtools: 
   :depends r-cairo: 
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-fpc: 
   :depends r-futile.logger: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-optparse: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tidyr: 
   :depends samtools: ``>=1.12``
   :depends zlib: 
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

      mamba install metasnv

   and update with::

      mamba update metasnv

  To create a new environment, run::

      mamba create --name myenvname metasnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metasnv:<tag>

   (see `metasnv/tags`_ for valid values for ``<tag>``)


.. |downloads_metasnv| image:: https://img.shields.io/conda/dn/bioconda/metasnv.svg?style=flat
   :target: https://anaconda.org/bioconda/metasnv
   :alt:   (downloads)
.. |docker_metasnv| image:: https://quay.io/repository/biocontainers/metasnv/status
   :target: https://quay.io/repository/biocontainers/metasnv
.. _`metasnv/tags`: https://quay.io/repository/biocontainers/metasnv?tab=tags


.. raw:: html

    <script>
        var package = "metasnv";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnv/README.html