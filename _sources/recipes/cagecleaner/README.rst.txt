:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cagecleaner'
.. highlight: bash

cagecleaner
===========

.. conda:recipe:: cagecleaner
   :replaces_section_title:
   :noindex:

   Genomic redundancy removal tool for cblaster hit sets.

   :homepage: https://github.com/LucoDevro/CAGEcleaner
   :documentation: https://github.com/LucoDevro/CAGEcleaner/wiki
   
   :license: MIT / MIT
   :recipe: /`cagecleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagecleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagecleaner/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.02.19.639057`

   


.. conda:package:: cagecleaner

   |downloads_cagecleaner| |docker_cagecleaner|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends any2fasta: 
   :depends biopython: 
   :depends cblaster: ``>=1.3.20``
   :depends entrez-direct: 
   :depends ncbi-datasets-cli: 
   :depends pandas: 
   :depends python: ``>=3.12``
   :depends scipy: ``<=1.14.1``
   :depends skder: ``>=1.3.1``
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

      mamba install cagecleaner

   and update with::

      mamba update cagecleaner

  To create a new environment, run::

      mamba create --name myenvname cagecleaner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cagecleaner:<tag>

   (see `cagecleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_cagecleaner| image:: https://img.shields.io/conda/dn/bioconda/cagecleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/cagecleaner
   :alt:   (downloads)
.. |docker_cagecleaner| image:: https://quay.io/repository/biocontainers/cagecleaner/status
   :target: https://quay.io/repository/biocontainers/cagecleaner
.. _`cagecleaner/tags`: https://quay.io/repository/biocontainers/cagecleaner?tab=tags


.. raw:: html

    <script>
        var package = "cagecleaner";
        var versions = ["1.4.0","1.3.1","1.3.0","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cagecleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cagecleaner/README.html