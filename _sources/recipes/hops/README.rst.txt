:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hops'
.. highlight: bash

hops
====

.. conda:recipe:: hops
   :replaces_section_title:
   :noindex:

   Java tool to work with ancient metagenomics

   :homepage: https://github.com/rhuebler/HOPS/
   :license: GPL >=3
   :recipe: /`hops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops/meta.yaml>`_

   


.. conda:package:: hops

   |downloads_hops| |docker_hops|

   :versions:
      
      

      ``0.35-1``,  ``0.35-0``,  ``0.34-0``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.31-1``,  ``0.31-0``

      

   
   :depends malt: 
   :depends openjdk: ``8.0.144.*``
   :depends python: 
   :depends r-base: ``>=3.5``
   :depends r-doparallel: 
   :depends r-getopt: 
   :depends r-gridbase: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
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

      mamba install hops

   and update with::

      mamba update hops

  To create a new environment, run::

      mamba create --name myenvname hops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hops:<tag>

   (see `hops/tags`_ for valid values for ``<tag>``)


.. |downloads_hops| image:: https://img.shields.io/conda/dn/bioconda/hops.svg?style=flat
   :target: https://anaconda.org/bioconda/hops
   :alt:   (downloads)
.. |docker_hops| image:: https://quay.io/repository/biocontainers/hops/status
   :target: https://quay.io/repository/biocontainers/hops
.. _`hops/tags`: https://quay.io/repository/biocontainers/hops?tab=tags


.. raw:: html

    <script>
        var package = "hops";
        var versions = ["0.35","0.35","0.34","0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hops/README.html