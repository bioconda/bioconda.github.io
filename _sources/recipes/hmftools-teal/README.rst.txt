:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-teal'
.. highlight: bash

hmftools-teal
=============

.. conda:recipe:: hmftools-teal
   :replaces_section_title:
   :noindex:

   Characterises telomeres in tumor and normal samples from WGS data.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/teal/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-teal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-teal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-teal/meta.yaml>`_

   


.. conda:package:: hmftools-teal

   |downloads_hmftools-teal| |docker_hmftools-teal|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.3-0``

      

   
   :depends openjdk: ``>=8,<=21``
   :depends zlib: 
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

      mamba install hmftools-teal

   and update with::

      mamba update hmftools-teal

  To create a new environment, run::

      mamba create --name myenvname hmftools-teal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-teal:<tag>

   (see `hmftools-teal/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-teal| image:: https://img.shields.io/conda/dn/bioconda/hmftools-teal.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-teal
   :alt:   (downloads)
.. |docker_hmftools-teal| image:: https://quay.io/repository/biocontainers/hmftools-teal/status
   :target: https://quay.io/repository/biocontainers/hmftools-teal
.. _`hmftools-teal/tags`: https://quay.io/repository/biocontainers/hmftools-teal?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-teal";
        var versions = ["1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-teal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-teal/README.html