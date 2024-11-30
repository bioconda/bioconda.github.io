:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblastg'
.. highlight: bash

genblastg
=========

.. conda:recipe:: genblastg
   :replaces_section_title:
   :noindex:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblastg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg/meta.yaml>`_

   


.. conda:package:: genblastg

   |downloads_genblastg| |docker_genblastg|

   :versions:
      
      

      ``1.39-1``,  ``1.38-5``,  ``1.38-4``,  ``1.38-3``,  ``1.38-2``,  ``1.38-1``,  ``1.38-0``

      

   
   :depends blast: 
   :depends libgcc: 
   :depends zlib: ``1.2.11*``
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

      mamba install genblastg

   and update with::

      mamba update genblastg

  To create a new environment, run::

      mamba create --name myenvname genblastg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genblastg:<tag>

   (see `genblastg/tags`_ for valid values for ``<tag>``)


.. |downloads_genblastg| image:: https://img.shields.io/conda/dn/bioconda/genblastg.svg?style=flat
   :target: https://anaconda.org/bioconda/genblastg
   :alt:   (downloads)
.. |docker_genblastg| image:: https://quay.io/repository/biocontainers/genblastg/status
   :target: https://quay.io/repository/biocontainers/genblastg
.. _`genblastg/tags`: https://quay.io/repository/biocontainers/genblastg?tab=tags


.. raw:: html

    <script>
        var package = "genblastg";
        var versions = ["1.39","1.38","1.38","1.38","1.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblastg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblastg/README.html