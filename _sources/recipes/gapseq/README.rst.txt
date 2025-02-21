:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapseq'
.. highlight: bash

gapseq
======

.. conda:recipe:: gapseq
   :replaces_section_title:
   :noindex:

   Informed prediction and analysis of bacterial metabolic pathways and genome\-scale networks

   :homepage: https://github.com/jotech/gapseq
   :license: GPL / AGPL-3.0-only
   :recipe: /`gapseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapseq/meta.yaml>`_

   


.. conda:package:: gapseq

   |downloads_gapseq| |docker_gapseq|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends barrnap: 
   :depends bc: 
   :depends bedtools: 
   :depends bioconductor-biostrings: 
   :depends blast: 
   :depends coreutils: 
   :depends exonerate: 
   :depends gawk: 
   :depends git: 
   :depends glpk: 
   :depends grep: 
   :depends hmmer: 
   :depends libsbml: 
   :depends openssl: 
   :depends parallel: 
   :depends perl: 
   :depends r-base: 
   :depends r-biocmanager: 
   :depends r-cobrar: 
   :depends r-data.table: 
   :depends r-getopt: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-renv: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends sed: 
   :depends wget: 
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

      mamba install gapseq

   and update with::

      mamba update gapseq

  To create a new environment, run::

      mamba create --name myenvname gapseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gapseq:<tag>

   (see `gapseq/tags`_ for valid values for ``<tag>``)


.. |downloads_gapseq| image:: https://img.shields.io/conda/dn/bioconda/gapseq.svg?style=flat
   :target: https://anaconda.org/bioconda/gapseq
   :alt:   (downloads)
.. |docker_gapseq| image:: https://quay.io/repository/biocontainers/gapseq/status
   :target: https://quay.io/repository/biocontainers/gapseq
.. _`gapseq/tags`: https://quay.io/repository/biocontainers/gapseq?tab=tags


.. raw:: html

    <script>
        var package = "gapseq";
        var versions = ["1.4.0","1.4.0","1.3.1","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapseq/README.html