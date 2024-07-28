:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neodisambiguate'
.. highlight: bash

neodisambiguate
===============

.. conda:recipe:: neodisambiguate
   :replaces_section_title:
   :noindex:

   Disambiguate reads that were mapped to multiple references.

   :homepage: https://github.com/clintval/neodisambiguate
   :license: MIT / MIT
   :recipe: /`neodisambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neodisambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neodisambiguate/meta.yaml>`_

   


.. conda:package:: neodisambiguate

   |downloads_neodisambiguate| |docker_neodisambiguate|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install neodisambiguate

   and update with::

      mamba update neodisambiguate

  To create a new environment, run::

      mamba create --name myenvname neodisambiguate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neodisambiguate:<tag>

   (see `neodisambiguate/tags`_ for valid values for ``<tag>``)


.. |downloads_neodisambiguate| image:: https://img.shields.io/conda/dn/bioconda/neodisambiguate.svg?style=flat
   :target: https://anaconda.org/bioconda/neodisambiguate
   :alt:   (downloads)
.. |docker_neodisambiguate| image:: https://quay.io/repository/biocontainers/neodisambiguate/status
   :target: https://quay.io/repository/biocontainers/neodisambiguate
.. _`neodisambiguate/tags`: https://quay.io/repository/biocontainers/neodisambiguate?tab=tags


.. raw:: html

    <script>
        var package = "neodisambiguate";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neodisambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neodisambiguate/README.html