:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eacon'
.. highlight: bash

r-eacon
=======

.. conda:recipe:: r-eacon
   :replaces_section_title:
   :noindex:

   Easy Copy Number. EaCoN aims to be an all\-packed in\, user\-friendly solution to perform relative or absolute copy\-number analysis for multiple sources of data\, with three different segmenters available \(and corresponding three copy\-number modelization methods\)

   :homepage: https://github.com/gustaveroussy/EaCoN
   :license: MIT
   :recipe: /`r-eacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eacon/meta.yaml>`_

   


.. conda:package:: r-eacon

   |downloads_r-eacon| |docker_r-eacon|

   :versions:
      
      

      ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4_1-1``,  ``0.3.4_1-0``

      

   
   :depends ascat: ``>=3``
   :depends bioconductor-affxparser: 
   :depends bioconductor-aroma.light: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome.hsapiens.1000genomes.hs37d5: 
   :depends bioconductor-copynumber: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-limma: 
   :depends bioconductor-rhdf5: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bedr: 
   :depends r-changepoint: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-facets: 
   :depends r-foreach: 
   :depends r-iotools: 
   :depends r-mclust: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-sequenza: 
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

      mamba install r-eacon

   and update with::

      mamba update r-eacon

  To create a new environment, run::

      mamba create --name myenvname r-eacon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-eacon:<tag>

   (see `r-eacon/tags`_ for valid values for ``<tag>``)


.. |downloads_r-eacon| image:: https://img.shields.io/conda/dn/bioconda/r-eacon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eacon
   :alt:   (downloads)
.. |docker_r-eacon| image:: https://quay.io/repository/biocontainers/r-eacon/status
   :target: https://quay.io/repository/biocontainers/r-eacon
.. _`r-eacon/tags`: https://quay.io/repository/biocontainers/r-eacon?tab=tags


.. raw:: html

    <script>
        var package = "r-eacon";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eacon/README.html