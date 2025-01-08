:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wormbase'
.. highlight: bash

r-wormbase
==========

.. conda:recipe:: r-wormbase
   :replaces_section_title:
   :noindex:

   Fetch Caenorhabditis elegans genome annotations from WormBase.

   :homepage: https://r.acidgenomics.com/packages/wormbase/
   :developer docs: https://github.com/acidgenomics/r-wormbase
   :license: GPL / AGPL-3.0
   :recipe: /`r-wormbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase/meta.yaml>`_

   


.. conda:package:: r-wormbase

   |downloads_r-wormbase| |docker_r-wormbase|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidcli: ``>=0.2.8``
   :depends r-acidgenerics: ``>=0.6.13``
   :depends r-acidplyr: ``>=0.4.3``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-goalie: ``>=0.7.0``
   :depends r-httr2: ``>=0.2.3``
   :depends r-pipette: ``>=0.14.0``
   :depends r-syntactic: ``>=0.6.7``
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

      mamba install r-wormbase

   and update with::

      mamba update r-wormbase

  To create a new environment, run::

      mamba create --name myenvname r-wormbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-wormbase:<tag>

   (see `r-wormbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-wormbase| image:: https://img.shields.io/conda/dn/bioconda/r-wormbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wormbase
   :alt:   (downloads)
.. |docker_r-wormbase| image:: https://quay.io/repository/biocontainers/r-wormbase/status
   :target: https://quay.io/repository/biocontainers/r-wormbase
.. _`r-wormbase/tags`: https://quay.io/repository/biocontainers/r-wormbase?tab=tags


.. raw:: html

    <script>
        var package = "r-wormbase";
        var versions = ["0.5.0","0.5.0","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wormbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wormbase/README.html