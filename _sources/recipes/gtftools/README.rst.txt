:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtftools'
.. highlight: bash

gtftools
========

.. conda:recipe:: gtftools
   :replaces_section_title:
   :noindex:

   gtftools provides a set of functions to compute or extract various features of gene models.

   :homepage: https://github.com/RacconC/gtftools
   :documentation: https://pypi.org/project/gtftools
   
   :license: MIT
   :recipe: /`gtftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtftools/meta.yaml>`_

   


.. conda:package:: gtftools

   |downloads_gtftools| |docker_gtftools|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends numpy: 
   :depends python: 
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

      mamba install gtftools

   and update with::

      mamba update gtftools

  To create a new environment, run::

      mamba create --name myenvname gtftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtftools:<tag>

   (see `gtftools/tags`_ for valid values for ``<tag>``)


.. |downloads_gtftools| image:: https://img.shields.io/conda/dn/bioconda/gtftools.svg?style=flat
   :target: https://anaconda.org/bioconda/gtftools
   :alt:   (downloads)
.. |docker_gtftools| image:: https://quay.io/repository/biocontainers/gtftools/status
   :target: https://quay.io/repository/biocontainers/gtftools
.. _`gtftools/tags`: https://quay.io/repository/biocontainers/gtftools?tab=tags


.. raw:: html

    <script>
        var package = "gtftools";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtftools/README.html