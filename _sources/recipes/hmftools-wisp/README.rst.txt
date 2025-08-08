:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-wisp'
.. highlight: bash

hmftools-wisp
=============

.. conda:recipe:: hmftools-wisp
   :replaces_section_title:
   :noindex:

   WISP performs tumor fraction estimate for longitudinal samples

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/wisp
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-wisp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-wisp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-wisp/meta.yaml>`_

   


.. conda:package:: hmftools-wisp

   |downloads_hmftools-wisp| |docker_hmftools-wisp|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends openjdk: ``>=8,<=21``
   :depends r-tidyverse: 
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

      mamba install hmftools-wisp

   and update with::

      mamba update hmftools-wisp

  To create a new environment, run::

      mamba create --name myenvname hmftools-wisp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-wisp:<tag>

   (see `hmftools-wisp/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-wisp| image:: https://img.shields.io/conda/dn/bioconda/hmftools-wisp.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-wisp
   :alt:   (downloads)
.. |docker_hmftools-wisp| image:: https://quay.io/repository/biocontainers/hmftools-wisp/status
   :target: https://quay.io/repository/biocontainers/hmftools-wisp
.. _`hmftools-wisp/tags`: https://quay.io/repository/biocontainers/hmftools-wisp?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-wisp";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-wisp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-wisp/README.html