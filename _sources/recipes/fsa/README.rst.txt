:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsa'
.. highlight: bash

fsa
===

.. conda:recipe:: fsa
   :replaces_section_title:
   :noindex:

   FSA is a probabilistic multiple sequence alignment algorithm which uses a \"distance\-based\"
   approach to aligning homologous protein\, RNA or DNA sequences.


   :homepage: http://fsa.sourceforge.net/
   :license: GPL-3
   :recipe: /`fsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsa/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1000392`

   


.. conda:package:: fsa

   |downloads_fsa| |docker_fsa|

   :versions:
      
      

      ``1.15.9-5``,  ``1.15.9-4``,  ``1.15.9-3``,  ``1.15.9-2``,  ``1.15.9-1``,  ``1.15.9-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install fsa

   and update with::

      mamba update fsa

  To create a new environment, run::

      mamba create --name myenvname fsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fsa:<tag>

   (see `fsa/tags`_ for valid values for ``<tag>``)


.. |downloads_fsa| image:: https://img.shields.io/conda/dn/bioconda/fsa.svg?style=flat
   :target: https://anaconda.org/bioconda/fsa
   :alt:   (downloads)
.. |docker_fsa| image:: https://quay.io/repository/biocontainers/fsa/status
   :target: https://quay.io/repository/biocontainers/fsa
.. _`fsa/tags`: https://quay.io/repository/biocontainers/fsa?tab=tags


.. raw:: html

    <script>
        var package = "fsa";
        var versions = ["1.15.9","1.15.9","1.15.9","1.15.9","1.15.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsa/README.html