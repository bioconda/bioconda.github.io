:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contammix'
.. highlight: bash

contammix
=========

.. conda:recipe:: contammix
   :replaces_section_title:
   :noindex:

   estimation of mtDNA contamination from a set of potential contaminant genomes.

   :homepage: https://github.com/plfjohnson/contamMix
   :license: GPL-3
   :recipe: /`contammix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contammix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contammix/meta.yaml>`_

   


.. conda:package:: contammix

   |downloads_contammix| |docker_contammix|

   :versions:
      
      

      ``1.0.11-2``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-coda: 
   :depends r-getopt: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install contammix

   and update with::

      mamba update contammix

  To create a new environment, run::

      mamba create --name myenvname contammix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/contammix:<tag>

   (see `contammix/tags`_ for valid values for ``<tag>``)


.. |downloads_contammix| image:: https://img.shields.io/conda/dn/bioconda/contammix.svg?style=flat
   :target: https://anaconda.org/bioconda/contammix
   :alt:   (downloads)
.. |docker_contammix| image:: https://quay.io/repository/biocontainers/contammix/status
   :target: https://quay.io/repository/biocontainers/contammix
.. _`contammix/tags`: https://quay.io/repository/biocontainers/contammix?tab=tags


.. raw:: html

    <script>
        var package = "contammix";
        var versions = ["1.0.11","1.0.11","1.0.11","1.0.10","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contammix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contammix/README.html