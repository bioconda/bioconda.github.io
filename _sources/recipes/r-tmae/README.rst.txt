:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tmae'
.. highlight: bash

r-tmae
======

.. conda:recipe:: r-tmae
   :replaces_section_title:
   :noindex:

   Tests and visualizations for mono\-allelicly expressed variants.

   :homepage: https://github.com/gagneurlab/tMAE
   :license: MIT / MIT
   :recipe: /`r-tmae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tmae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tmae/meta.yaml>`_

   


.. conda:package:: r-tmae

   |downloads_r-tmae| |docker_r-tmae|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-genomicscores: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
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

      mamba install r-tmae

   and update with::

      mamba update r-tmae

  To create a new environment, run::

      mamba create --name myenvname r-tmae

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tmae:<tag>

   (see `r-tmae/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tmae| image:: https://img.shields.io/conda/dn/bioconda/r-tmae.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tmae
   :alt:   (downloads)
.. |docker_r-tmae| image:: https://quay.io/repository/biocontainers/r-tmae/status
   :target: https://quay.io/repository/biocontainers/r-tmae
.. _`r-tmae/tags`: https://quay.io/repository/biocontainers/r-tmae?tab=tags


.. raw:: html

    <script>
        var package = "r-tmae";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tmae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tmae/README.html