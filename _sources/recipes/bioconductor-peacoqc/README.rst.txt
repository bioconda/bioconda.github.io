:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peacoqc'
.. highlight: bash

bioconductor-peacoqc
====================

.. conda:recipe:: bioconductor-peacoqc
   :replaces_section_title:
   :noindex:

   Peak\-based selection of high quality cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PeacoQC.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-peacoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peacoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peacoqc/meta.yaml>`_

   This is a package that includes pre\-processing and quality control functions that can remove margin events\, compensate and transform the data and that will use PeacoQCSignalStability for quality control. This last function will first detect peaks in each channel of the flowframe. It will remove anomalies based on the IsolationTree function and the MAD outlier detection method. This package can be used for both flow\- and mass cytometry data.


.. conda:package:: bioconductor-peacoqc

   |downloads_bioconductor-peacoqc| |docker_bioconductor-peacoqc|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.25-2``,  ``0.99.25-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowworkspace: ``>=4.18.0,<4.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-plyr: 
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

      mamba install bioconductor-peacoqc

   and update with::

      mamba update bioconductor-peacoqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-peacoqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peacoqc:<tag>

   (see `bioconductor-peacoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peacoqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peacoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peacoqc
   :alt:   (downloads)
.. |docker_bioconductor-peacoqc| image:: https://quay.io/repository/biocontainers/bioconductor-peacoqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peacoqc
.. _`bioconductor-peacoqc/tags`: https://quay.io/repository/biocontainers/bioconductor-peacoqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peacoqc";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peacoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peacoqc/README.html