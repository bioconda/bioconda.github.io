:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tntblast'
.. highlight: bash

tntblast
========

.. conda:recipe:: tntblast
   :replaces_section_title:
   :noindex:

   Searching DNA\/RNA sequence databases with PCR and\/or probe queries

   :homepage: https://github.com/jgans/thermonucleotideBLAST
   :documentation: https://github.com/jgans/thermonucleotideBLAST#readme
   
   :license: BSD / BSD License
   :recipe: /`tntblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tntblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tntblast/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkn301`

   


.. conda:package:: tntblast

   |downloads_tntblast| |docker_tntblast|

   :versions:
      
      

      ``2.66-0``,  ``2.61-0``,  ``2.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mpich: ``>=4.2.1,<5.0a0``
   :depends openmp: 
   :depends zlib: 
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

      mamba install tntblast

   and update with::

      mamba update tntblast

  To create a new environment, run::

      mamba create --name myenvname tntblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tntblast:<tag>

   (see `tntblast/tags`_ for valid values for ``<tag>``)


.. |downloads_tntblast| image:: https://img.shields.io/conda/dn/bioconda/tntblast.svg?style=flat
   :target: https://anaconda.org/bioconda/tntblast
   :alt:   (downloads)
.. |docker_tntblast| image:: https://quay.io/repository/biocontainers/tntblast/status
   :target: https://quay.io/repository/biocontainers/tntblast
.. _`tntblast/tags`: https://quay.io/repository/biocontainers/tntblast?tab=tags


.. raw:: html

    <script>
        var package = "tntblast";
        var versions = ["2.66","2.61","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tntblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tntblast/README.html