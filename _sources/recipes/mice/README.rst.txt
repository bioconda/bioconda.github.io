:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mice'
.. highlight: bash

mice
====

.. conda:recipe:: mice
   :replaces_section_title:
   :noindex:

   Markers Inferred by Compacting Elements \(mice\). Synteny blocks from pangenomes.

   :homepage: https://github.com/gi-bielefeld/mice
   :license: MIT
   :recipe: /`mice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mice/meta.yaml>`_

   


.. conda:package:: mice

   |downloads_mice| |docker_mice|

   :versions:
      
      

      ``0.1.2-0``

      

   
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

      mamba install mice

   and update with::

      mamba update mice

  To create a new environment, run::

      mamba create --name myenvname mice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mice:<tag>

   (see `mice/tags`_ for valid values for ``<tag>``)


.. |downloads_mice| image:: https://img.shields.io/conda/dn/bioconda/mice.svg?style=flat
   :target: https://anaconda.org/bioconda/mice
   :alt:   (downloads)
.. |docker_mice| image:: https://quay.io/repository/biocontainers/mice/status
   :target: https://quay.io/repository/biocontainers/mice
.. _`mice/tags`: https://quay.io/repository/biocontainers/mice?tab=tags


.. raw:: html

    <script>
        var package = "mice";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mice/README.html