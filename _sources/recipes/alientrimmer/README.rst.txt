:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alientrimmer'
.. highlight: bash

alientrimmer
============

.. conda:recipe:: alientrimmer
   :replaces_section_title:
   :noindex:

   Tool for trimming non\-confident bases and alien oligo\-nucleotide sequences from sequencing reads.

   :homepage: https://gitlab.pasteur.fr/GIPhy/AlienTrimmer
   :license: AGPL / AGPL-3.0
   :recipe: /`alientrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alientrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alientrimmer/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ygeno.2013.07.011`

   


.. conda:package:: alientrimmer

   |downloads_alientrimmer| |docker_alientrimmer|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends openjdk: 
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

      mamba install alientrimmer

   and update with::

      mamba update alientrimmer

  To create a new environment, run::

      mamba create --name myenvname alientrimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alientrimmer:<tag>

   (see `alientrimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_alientrimmer| image:: https://img.shields.io/conda/dn/bioconda/alientrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/alientrimmer
   :alt:   (downloads)
.. |docker_alientrimmer| image:: https://quay.io/repository/biocontainers/alientrimmer/status
   :target: https://quay.io/repository/biocontainers/alientrimmer
.. _`alientrimmer/tags`: https://quay.io/repository/biocontainers/alientrimmer?tab=tags


.. raw:: html

    <script>
        var package = "alientrimmer";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alientrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alientrimmer/README.html