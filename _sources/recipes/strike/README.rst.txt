:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strike'
.. highlight: bash

strike
======

.. conda:recipe:: strike
   :replaces_section_title:
   :noindex:

   A program to evaluate protein multiple sequence alignments using a single protein structure.

   :homepage: http://www.tcoffee.org/Projects/strike/index.html
   :license: file
   :recipe: /`strike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strike/meta.yaml>`_
   :links: biotools: :biotools:`STRIKE`, doi: :doi:`10.1093/bioinformatics/btr587`

   


.. conda:package:: strike

   |downloads_strike| |docker_strike|

   :versions:
      
      

      ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install strike

   and update with::

      mamba update strike

  To create a new environment, run::

      mamba create --name myenvname strike

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strike:<tag>

   (see `strike/tags`_ for valid values for ``<tag>``)


.. |downloads_strike| image:: https://img.shields.io/conda/dn/bioconda/strike.svg?style=flat
   :target: https://anaconda.org/bioconda/strike
   :alt:   (downloads)
.. |docker_strike| image:: https://quay.io/repository/biocontainers/strike/status
   :target: https://quay.io/repository/biocontainers/strike
.. _`strike/tags`: https://quay.io/repository/biocontainers/strike?tab=tags


.. raw:: html

    <script>
        var package = "strike";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strike/README.html