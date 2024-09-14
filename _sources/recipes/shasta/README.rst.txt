:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shasta'
.. highlight: bash

shasta
======

.. conda:recipe:: shasta
   :replaces_section_title:
   :noindex:

   De novo assembly from Oxford Nanopore reads.

   :homepage: https://github.com/paoloshasta/shasta
   :documentation: https://paoloshasta.github.io/shasta/
   
   :license: MIT / MIT
   :recipe: /`shasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1038/s41587-020-0503-6`

   


.. conda:package:: shasta

   |downloads_shasta| |docker_shasta|

   :versions:
      
      

      ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-2``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.8.0-0``,  ``0.6.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libpng: 
   :depends libstdcxx: ``>=12``
   :depends python: 
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

      mamba install shasta

   and update with::

      mamba update shasta

  To create a new environment, run::

      mamba create --name myenvname shasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shasta:<tag>

   (see `shasta/tags`_ for valid values for ``<tag>``)


.. |downloads_shasta| image:: https://img.shields.io/conda/dn/bioconda/shasta.svg?style=flat
   :target: https://anaconda.org/bioconda/shasta
   :alt:   (downloads)
.. |docker_shasta| image:: https://quay.io/repository/biocontainers/shasta/status
   :target: https://quay.io/repository/biocontainers/shasta
.. _`shasta/tags`: https://quay.io/repository/biocontainers/shasta?tab=tags


.. raw:: html

    <script>
        var package = "shasta";
        var versions = ["0.13.0","0.12.0","0.11.1","0.11.1","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shasta/README.html