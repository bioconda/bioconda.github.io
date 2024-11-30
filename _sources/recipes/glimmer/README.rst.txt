:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmer'
.. highlight: bash

glimmer
=======

.. conda:recipe:: glimmer
   :replaces_section_title:
   :noindex:

   Glimmer is a system for finding genes in microbial DNA

   :homepage: https://ccb.jhu.edu/software/glimmer/index.shtml
   :license: Custom
   :recipe: /`glimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer/meta.yaml>`_
   :links: biotools: :biotools:`glimmer`, doi: :doi:`10.1093/bioinformatics/btm009`

   


.. conda:package:: glimmer

   |downloads_glimmer| |docker_glimmer|

   :versions:
      
      

      ``3.02-6``,  ``3.02-5``,  ``3.02-4``,  ``3.02-3``,  ``3.02-2``,  ``3.02-1``,  ``3.02-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
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

      mamba install glimmer

   and update with::

      mamba update glimmer

  To create a new environment, run::

      mamba create --name myenvname glimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/glimmer:<tag>

   (see `glimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_glimmer| image:: https://img.shields.io/conda/dn/bioconda/glimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/glimmer
   :alt:   (downloads)
.. |docker_glimmer| image:: https://quay.io/repository/biocontainers/glimmer/status
   :target: https://quay.io/repository/biocontainers/glimmer
.. _`glimmer/tags`: https://quay.io/repository/biocontainers/glimmer?tab=tags


.. raw:: html

    <script>
        var package = "glimmer";
        var versions = ["3.02","3.02","3.02","3.02","3.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmer/README.html