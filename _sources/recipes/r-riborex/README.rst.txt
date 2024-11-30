:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-riborex'
.. highlight: bash

r-riborex
=========

.. conda:recipe:: r-riborex
   :replaces_section_title:
   :noindex:

   Riborex is a R package for identification of differential translation from Ribo\-seq data.

   :homepage: https://github.com/smithlabcode/riborex
   :license: GPL-3.0
   :recipe: /`r-riborex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex/meta.yaml>`_

   


.. conda:package:: r-riborex

   |downloads_r-riborex| |docker_r-riborex|

   :versions:
      
      

      ``2.4.0-6``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``

      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
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

      mamba install r-riborex

   and update with::

      mamba update r-riborex

  To create a new environment, run::

      mamba create --name myenvname r-riborex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-riborex:<tag>

   (see `r-riborex/tags`_ for valid values for ``<tag>``)


.. |downloads_r-riborex| image:: https://img.shields.io/conda/dn/bioconda/r-riborex.svg?style=flat
   :target: https://anaconda.org/bioconda/r-riborex
   :alt:   (downloads)
.. |docker_r-riborex| image:: https://quay.io/repository/biocontainers/r-riborex/status
   :target: https://quay.io/repository/biocontainers/r-riborex
.. _`r-riborex/tags`: https://quay.io/repository/biocontainers/r-riborex?tab=tags


.. raw:: html

    <script>
        var package = "r-riborex";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-riborex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-riborex/README.html