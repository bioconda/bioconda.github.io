:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gchromvar'
.. highlight: bash

r-gchromvar
===========

.. conda:recipe:: r-gchromvar
   :replaces_section_title:
   :noindex:

   R package for computing cell\-type specific GWAS enrichments from Finemapping data and quantitative epigenomic data.

   :homepage: https://caleblareau.github.io/gchromVAR/
   :developer docs: https://github.com/caleblareau/gchromVAR
   :license: MIT / MIT
   :recipe: /`r-gchromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gchromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gchromvar/meta.yaml>`_

   


.. conda:package:: r-gchromvar

   |downloads_r-gchromvar| |docker_r-gchromvar|

   :versions:
      
      

      ``0.3.2-0``

      

   
   :depends bioconductor-biocparallel: 
   :depends bioconductor-chromvar: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install r-gchromvar

   and update with::

      mamba update r-gchromvar

  To create a new environment, run::

      mamba create --name myenvname r-gchromvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-gchromvar:<tag>

   (see `r-gchromvar/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gchromvar| image:: https://img.shields.io/conda/dn/bioconda/r-gchromvar.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gchromvar
   :alt:   (downloads)
.. |docker_r-gchromvar| image:: https://quay.io/repository/biocontainers/r-gchromvar/status
   :target: https://quay.io/repository/biocontainers/r-gchromvar
.. _`r-gchromvar/tags`: https://quay.io/repository/biocontainers/r-gchromvar?tab=tags


.. raw:: html

    <script>
        var package = "r-gchromvar";
        var versions = ["0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gchromvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gchromvar/README.html