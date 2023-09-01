:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakentools'
.. highlight: bash

krakentools
===========

.. conda:recipe:: krakentools
   :replaces_section_title:
   :noindex:

   KrakenTools is a suite of scripts to be used for post\-analysis of Kraken\/KrakenUniq\/Kraken2\/Bracken results. Please cite the relevant paper if using KrakenTools with any of the listed programs.

   :homepage: https://github.com/jenniferlu717/KrakenTools
   :license: GPL / GPL-3.0
   :recipe: /`krakentools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakentools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakentools/meta.yaml>`_
   :links: biotools: :biotools:`krakentools`

   


.. conda:package:: krakentools

   |downloads_krakentools| |docker_krakentools|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``1.0.1-0``,  ``0.1-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
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

      mamba install krakentools

   and update with::

      mamba update krakentools

  To create a new environment, run::

      mamba create --name myenvname krakentools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krakentools:<tag>

   (see `krakentools/tags`_ for valid values for ``<tag>``)


.. |downloads_krakentools| image:: https://img.shields.io/conda/dn/bioconda/krakentools.svg?style=flat
   :target: https://anaconda.org/bioconda/krakentools
   :alt:   (downloads)
.. |docker_krakentools| image:: https://quay.io/repository/biocontainers/krakentools/status
   :target: https://quay.io/repository/biocontainers/krakentools
.. _`krakentools/tags`: https://quay.io/repository/biocontainers/krakentools?tab=tags


.. raw:: html

    <script>
        var package = "krakentools";
        var versions = ["1.2","1.1","1.0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakentools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakentools/README.html