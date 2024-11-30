:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proda'
.. highlight: bash

proda
=====

.. conda:recipe:: proda
   :replaces_section_title:
   :noindex:

   ProDA \- Multiple alignment of protein sequences with repeated and shuffled elements

   :homepage: http://proda.stanford.edu/
   :license: Public Domain Software
   :recipe: /`proda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkl511`

   


.. conda:package:: proda

   |downloads_proda| |docker_proda|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

      mamba install proda

   and update with::

      mamba update proda

  To create a new environment, run::

      mamba create --name myenvname proda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proda:<tag>

   (see `proda/tags`_ for valid values for ``<tag>``)


.. |downloads_proda| image:: https://img.shields.io/conda/dn/bioconda/proda.svg?style=flat
   :target: https://anaconda.org/bioconda/proda
   :alt:   (downloads)
.. |docker_proda| image:: https://quay.io/repository/biocontainers/proda/status
   :target: https://quay.io/repository/biocontainers/proda
.. _`proda/tags`: https://quay.io/repository/biocontainers/proda?tab=tags


.. raw:: html

    <script>
        var package = "proda";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proda/README.html