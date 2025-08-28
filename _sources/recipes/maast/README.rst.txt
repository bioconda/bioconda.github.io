:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maast'
.. highlight: bash

maast
=====

.. conda:recipe:: maast
   :replaces_section_title:
   :noindex:

   Microbial agile accurate SNP Typer

   :homepage: https://github.com/zjshi/Maast
   :license: MIT / MIT
   :recipe: /`maast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast/meta.yaml>`_

   


.. conda:package:: maast

   |downloads_maast| |docker_maast|

   :versions:
      
      

      ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends biopython: ``>=1.58``
   :depends fasttree: 
   :depends lbzip2: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends lz4: 
   :depends mash: 
   :depends mummer4: 
   :depends networkx: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install maast

   and update with::

      mamba update maast

  To create a new environment, run::

      mamba create --name myenvname maast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maast:<tag>

   (see `maast/tags`_ for valid values for ``<tag>``)


.. |downloads_maast| image:: https://img.shields.io/conda/dn/bioconda/maast.svg?style=flat
   :target: https://anaconda.org/bioconda/maast
   :alt:   (downloads)
.. |docker_maast| image:: https://quay.io/repository/biocontainers/maast/status
   :target: https://quay.io/repository/biocontainers/maast
.. _`maast/tags`: https://quay.io/repository/biocontainers/maast?tab=tags


.. raw:: html

    <script>
        var package = "maast";
        var versions = ["1.0.8","1.0.8","1.0.8","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maast/README.html