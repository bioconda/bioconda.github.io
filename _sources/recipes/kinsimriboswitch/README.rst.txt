:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinsimriboswitch'
.. highlight: bash

kinsimriboswitch
================

.. conda:recipe:: kinsimriboswitch
   :replaces_section_title:
   :noindex:

   Pipeline for the simulation of RNA\-\-ligand interaction kinetics as
   outlined in Kuehnl et al. 2017\, https\:\/\/doi.org\/10.1186\/s12859\-017\-1823\-5


   :homepage: http://www.bioinf.uni-leipzig.de/~felix/
   :license: GPLv3
   :recipe: /`kinsimriboswitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch/meta.yaml>`_

   


.. conda:package:: kinsimriboswitch

   |downloads_kinsimriboswitch| |docker_kinsimriboswitch|

   :versions:
      
      

      ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends coreutils: 
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-clone: 
   :depends perl-devel-assert: 
   :depends perl-file-slurp: 
   :depends perl-heap: 
   :depends perl-inline: 
   :depends perl-inline-c: 
   :depends perl-ipc-system-simple: 
   :depends perl-list-moreutils: 
   :depends perl-math-random-mt-auto: 
   :depends perl-math-round: 
   :depends perl-parallel-loops: 
   :depends perl-parse-recdescent: 
   :depends perl-sys-info: 
   :depends r: 
   :depends r-argparser: 
   :depends r-rcolorbrewer: 
   :depends treekin: 
   :depends viennarna: ``>=2.4.17,<2.5.0a0``
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

      mamba install kinsimriboswitch

   and update with::

      mamba update kinsimriboswitch

  To create a new environment, run::

      mamba create --name myenvname kinsimriboswitch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kinsimriboswitch:<tag>

   (see `kinsimriboswitch/tags`_ for valid values for ``<tag>``)


.. |downloads_kinsimriboswitch| image:: https://img.shields.io/conda/dn/bioconda/kinsimriboswitch.svg?style=flat
   :target: https://anaconda.org/bioconda/kinsimriboswitch
   :alt:   (downloads)
.. |docker_kinsimriboswitch| image:: https://quay.io/repository/biocontainers/kinsimriboswitch/status
   :target: https://quay.io/repository/biocontainers/kinsimriboswitch
.. _`kinsimriboswitch/tags`: https://quay.io/repository/biocontainers/kinsimriboswitch?tab=tags


.. raw:: html

    <script>
        var package = "kinsimriboswitch";
        var versions = ["0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinsimriboswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinsimriboswitch/README.html