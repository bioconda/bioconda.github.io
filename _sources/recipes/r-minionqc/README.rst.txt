:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minionqc'
.. highlight: bash

r-minionqc
==========

.. conda:recipe:: r-minionqc
   :replaces_section_title:
   :noindex:

   Quality control for MinION sequencing data

   :homepage: https://github.com/roblanf/minion_qc/blob/master/MinIONQC.R
   :license: MIT
   :recipe: /`r-minionqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc/meta.yaml>`_

   


.. conda:package:: r-minionqc

   |downloads_r-minionqc| |docker_r-minionqc|

   :versions:
      
      

      ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-viridis: 
   :depends r-yaml: 
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

      mamba install r-minionqc

   and update with::

      mamba update r-minionqc

  To create a new environment, run::

      mamba create --name myenvname r-minionqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-minionqc:<tag>

   (see `r-minionqc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-minionqc| image:: https://img.shields.io/conda/dn/bioconda/r-minionqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minionqc
   :alt:   (downloads)
.. |docker_r-minionqc| image:: https://quay.io/repository/biocontainers/r-minionqc/status
   :target: https://quay.io/repository/biocontainers/r-minionqc
.. _`r-minionqc/tags`: https://quay.io/repository/biocontainers/r-minionqc?tab=tags


.. raw:: html

    <script>
        var package = "r-minionqc";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minionqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minionqc/README.html