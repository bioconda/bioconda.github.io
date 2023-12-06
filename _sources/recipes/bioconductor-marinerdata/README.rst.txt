:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-marinerdata'
.. highlight: bash

bioconductor-marinerdata
========================

.. conda:recipe:: bioconductor-marinerdata
   :replaces_section_title:
   :noindex:

   ExperimentHub data for the mariner package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/marinerData.html
   :license: GPL-3
   :recipe: /`bioconductor-marinerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marinerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marinerdata/meta.yaml>`_

   Subsampled Hi\-C in HEK cells expressing the NHA9 fusion with an F to S mutated IDR \(\"FS\"\) or without any mutations to the IDR \(\"Wildtype\" or \"WT\"\). These files are used for testing mariner functions and some examples.


.. conda:package:: bioconductor-marinerdata

   |downloads_bioconductor-marinerdata| |docker_bioconductor-marinerdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-marinerdata

   and update with::

      mamba update bioconductor-marinerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-marinerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-marinerdata:<tag>

   (see `bioconductor-marinerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-marinerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-marinerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-marinerdata
   :alt:   (downloads)
.. |docker_bioconductor-marinerdata| image:: https://quay.io/repository/biocontainers/bioconductor-marinerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-marinerdata
.. _`bioconductor-marinerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-marinerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-marinerdata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-marinerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-marinerdata/README.html