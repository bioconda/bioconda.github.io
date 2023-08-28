:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblasta'
.. highlight: bash

genblasta
=========

.. conda:recipe:: genblasta
   :replaces_section_title:
   :noindex:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta/meta.yaml>`_

   


.. conda:package:: genblasta

   |downloads_genblasta| |docker_genblasta|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends blast: 
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

      mamba install genblasta

   and update with::

      mamba update genblasta

  To create a new environment, run::

      mamba create --name myenvname genblasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genblasta:<tag>

   (see `genblasta/tags`_ for valid values for ``<tag>``)


.. |downloads_genblasta| image:: https://img.shields.io/conda/dn/bioconda/genblasta.svg?style=flat
   :target: https://anaconda.org/bioconda/genblasta
   :alt:   (downloads)
.. |docker_genblasta| image:: https://quay.io/repository/biocontainers/genblasta/status
   :target: https://quay.io/repository/biocontainers/genblasta
.. _`genblasta/tags`: https://quay.io/repository/biocontainers/genblasta?tab=tags


.. raw:: html

    <script>
        var package = "genblasta";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblasta/README.html