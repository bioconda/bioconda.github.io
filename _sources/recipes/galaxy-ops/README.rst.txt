:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ops'
.. highlight: bash

galaxy-ops
==========

.. conda:recipe:: galaxy-ops
   :replaces_section_title:
   :noindex:

   Galaxy interval operations

   :homepage: https://github.com/galaxyproject/gops
   :license: Academic Free License version 3.0
   :recipe: /`galaxy-ops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops/meta.yaml>`_

   


.. conda:package:: galaxy-ops

   |downloads_galaxy-ops| |docker_galaxy-ops|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bx-python: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install galaxy-ops

   and update with::

      mamba update galaxy-ops

  To create a new environment, run::

      mamba create --name myenvname galaxy-ops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-ops:<tag>

   (see `galaxy-ops/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-ops| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ops.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ops
   :alt:   (downloads)
.. |docker_galaxy-ops| image:: https://quay.io/repository/biocontainers/galaxy-ops/status
   :target: https://quay.io/repository/biocontainers/galaxy-ops
.. _`galaxy-ops/tags`: https://quay.io/repository/biocontainers/galaxy-ops?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-ops";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ops/README.html