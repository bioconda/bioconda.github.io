:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-motifbinner'
.. highlight: bash

r-motifbinner
=============

.. conda:recipe:: r-motifbinner
   :replaces_section_title:
   :noindex:

   MotifBinner processes high\-throughput sequencing data of an RNA virus population.

   :homepage: https://github.com/HIVDiversity/MotifBinner2, http://biom-format.org/
   :license: GPL3
   :recipe: /`r-motifbinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-motifbinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-motifbinner/meta.yaml>`_

   


.. conda:package:: r-motifbinner

   |downloads_r-motifbinner| |docker_r-motifbinner|

   :versions:
      
      

      ``2.0.0-7``,  ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-shortread: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-formattable: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringdist: 
   :depends r-tidyr: 
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

      mamba install r-motifbinner

   and update with::

      mamba update r-motifbinner

  To create a new environment, run::

      mamba create --name myenvname r-motifbinner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-motifbinner:<tag>

   (see `r-motifbinner/tags`_ for valid values for ``<tag>``)


.. |downloads_r-motifbinner| image:: https://img.shields.io/conda/dn/bioconda/r-motifbinner.svg?style=flat
   :target: https://anaconda.org/bioconda/r-motifbinner
   :alt:   (downloads)
.. |docker_r-motifbinner| image:: https://quay.io/repository/biocontainers/r-motifbinner/status
   :target: https://quay.io/repository/biocontainers/r-motifbinner
.. _`r-motifbinner/tags`: https://quay.io/repository/biocontainers/r-motifbinner?tab=tags


.. raw:: html

    <script>
        var package = "r-motifbinner";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-motifbinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-motifbinner/README.html