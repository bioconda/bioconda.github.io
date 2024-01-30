:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobasehttptools'
.. highlight: bash

biobasehttptools
================

.. conda:recipe:: biobasehttptools
   :replaces_section_title:
   :noindex:

   Tools for querying bioinformatics web resources

   :homepage: https://github.com/eggzilla/BiobaseHTTPTools
   :license: GPL-3
   :recipe: /`biobasehttptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobasehttptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobasehttptools/meta.yaml>`_

   


.. conda:package:: biobasehttptools

   |downloads_biobasehttptools| |docker_biobasehttptools|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends ca-certificates: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
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

      mamba install biobasehttptools

   and update with::

      mamba update biobasehttptools

  To create a new environment, run::

      mamba create --name myenvname biobasehttptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobasehttptools:<tag>

   (see `biobasehttptools/tags`_ for valid values for ``<tag>``)


.. |downloads_biobasehttptools| image:: https://img.shields.io/conda/dn/bioconda/biobasehttptools.svg?style=flat
   :target: https://anaconda.org/bioconda/biobasehttptools
   :alt:   (downloads)
.. |docker_biobasehttptools| image:: https://quay.io/repository/biocontainers/biobasehttptools/status
   :target: https://quay.io/repository/biocontainers/biobasehttptools
.. _`biobasehttptools/tags`: https://quay.io/repository/biocontainers/biobasehttptools?tab=tags


.. raw:: html

    <script>
        var package = "biobasehttptools";
        var versions = ["1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobasehttptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobasehttptools/README.html