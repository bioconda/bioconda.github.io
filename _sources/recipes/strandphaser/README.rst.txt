:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strandphaser'
.. highlight: bash

strandphaser
============

.. conda:recipe:: strandphaser
   :replaces_section_title:
   :noindex:

   Phase Strand\-seq data

   :homepage: https://github.com/daewoooo/StrandPhaseR/
   :license: MIT
   :recipe: /`strandphaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strandphaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strandphaser/meta.yaml>`_

   R Package for phasing of single cell Strand\-seq data


.. conda:package:: strandphaser

   |downloads_strandphaser| |docker_strandphaser|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-bamsignals: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-breakpointr: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-fastseg: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-variantannotation: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-r.methodss3: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :depends r-zoo: 
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

      mamba install strandphaser

   and update with::

      mamba update strandphaser

  To create a new environment, run::

      mamba create --name myenvname strandphaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strandphaser:<tag>

   (see `strandphaser/tags`_ for valid values for ``<tag>``)


.. |downloads_strandphaser| image:: https://img.shields.io/conda/dn/bioconda/strandphaser.svg?style=flat
   :target: https://anaconda.org/bioconda/strandphaser
   :alt:   (downloads)
.. |docker_strandphaser| image:: https://quay.io/repository/biocontainers/strandphaser/status
   :target: https://quay.io/repository/biocontainers/strandphaser
.. _`strandphaser/tags`: https://quay.io/repository/biocontainers/strandphaser?tab=tags


.. raw:: html

    <script>
        var package = "strandphaser";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strandphaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strandphaser/README.html