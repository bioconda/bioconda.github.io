:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fetchmgs'
.. highlight: bash

fetchmgs
========

.. conda:recipe:: fetchmgs
   :replaces_section_title:
   :noindex:

   FetchMGs extracts the 40 marker genes from genomes and metagenomes in an easy and accurate manner.

   :homepage: https://github.com/motu-tool/FetchMGs
   :license: GPL-3.0-only
   :recipe: /`fetchmgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fetchmgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fetchmgs/meta.yaml>`_

   


.. conda:package:: fetchmgs

   |downloads_fetchmgs| |docker_fetchmgs|

   :versions:
      
      

      ``2.1.2-0``

      

   
   :depends biopython: 
   :depends psutil: 
   :depends pyhmmer: ``0.11.2``
   :depends pyrodigal: ``3.6.3.post1``
   :depends python: 
   :depends tqdm: 
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

      mamba install fetchmgs

   and update with::

      mamba update fetchmgs

  To create a new environment, run::

      mamba create --name myenvname fetchmgs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fetchmgs:<tag>

   (see `fetchmgs/tags`_ for valid values for ``<tag>``)


.. |downloads_fetchmgs| image:: https://img.shields.io/conda/dn/bioconda/fetchmgs.svg?style=flat
   :target: https://anaconda.org/bioconda/fetchmgs
   :alt:   (downloads)
.. |docker_fetchmgs| image:: https://quay.io/repository/biocontainers/fetchmgs/status
   :target: https://quay.io/repository/biocontainers/fetchmgs
.. _`fetchmgs/tags`: https://quay.io/repository/biocontainers/fetchmgs?tab=tags


.. raw:: html

    <script>
        var package = "fetchmgs";
        var versions = ["2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fetchmgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fetchmgs/README.html