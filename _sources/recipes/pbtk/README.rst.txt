:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbtk'
.. highlight: bash

pbtk
====

.. conda:recipe:: pbtk
   :replaces_section_title:
   :noindex:

   pbtk \- PacBio BAM toolkit

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbtk/meta.yaml>`_

   


.. conda:package:: pbtk

   |downloads_pbtk| |docker_pbtk|

   :versions:
      
      

      ``3.5.0-0``,  ``3.4.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``1.0.0-0``

      

   
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

      mamba install pbtk

   and update with::

      mamba update pbtk

  To create a new environment, run::

      mamba create --name myenvname pbtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbtk:<tag>

   (see `pbtk/tags`_ for valid values for ``<tag>``)


.. |downloads_pbtk| image:: https://img.shields.io/conda/dn/bioconda/pbtk.svg?style=flat
   :target: https://anaconda.org/bioconda/pbtk
   :alt:   (downloads)
.. |docker_pbtk| image:: https://quay.io/repository/biocontainers/pbtk/status
   :target: https://quay.io/repository/biocontainers/pbtk
.. _`pbtk/tags`: https://quay.io/repository/biocontainers/pbtk?tab=tags


.. raw:: html

    <script>
        var package = "pbtk";
        var versions = ["3.5.0","3.4.0","3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbtk/README.html