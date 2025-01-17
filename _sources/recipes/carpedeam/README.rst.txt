:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carpedeam'
.. highlight: bash

carpedeam
=========

.. conda:recipe:: carpedeam
   :replaces_section_title:
   :noindex:

   CarpeDeam \- A metagenomic assembler for heavily damaged ancient datasets

   :homepage: https://github.com/LouisPwr/CarpeDeam
   :license: GPL3 / GPL-3.0-only
   :recipe: /`carpedeam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carpedeam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carpedeam/meta.yaml>`_
   :links: biotools: :biotools:`carpedeam`

   


.. conda:package:: carpedeam

   |downloads_carpedeam| |docker_carpedeam|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends llvm-openmp: ``>=18.1.8``
   :depends llvm-openmp: ``>=19.1.5``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: 
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

      mamba install carpedeam

   and update with::

      mamba update carpedeam

  To create a new environment, run::

      mamba create --name myenvname carpedeam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/carpedeam:<tag>

   (see `carpedeam/tags`_ for valid values for ``<tag>``)


.. |downloads_carpedeam| image:: https://img.shields.io/conda/dn/bioconda/carpedeam.svg?style=flat
   :target: https://anaconda.org/bioconda/carpedeam
   :alt:   (downloads)
.. |docker_carpedeam| image:: https://quay.io/repository/biocontainers/carpedeam/status
   :target: https://quay.io/repository/biocontainers/carpedeam
.. _`carpedeam/tags`: https://quay.io/repository/biocontainers/carpedeam?tab=tags


.. raw:: html

    <script>
        var package = "carpedeam";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carpedeam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carpedeam/README.html