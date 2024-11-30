:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saintbioutils'
.. highlight: bash

saintbioutils
=============

.. conda:recipe:: saintbioutils
   :replaces_section_title:
   :noindex:

   A package of utility and miscellaneous functions for using in bioinformaticspipelines\, primarily in Python.

   :homepage: https://github.com/HobnobMancer/saintBioutils
   :license: MIT
   :recipe: /`saintbioutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saintbioutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saintbioutils/meta.yaml>`_

   


.. conda:package:: saintbioutils

   |downloads_saintbioutils| |docker_saintbioutils|

   :versions:
      
      

      ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``

      

   
   :depends biopython: ``>=1.76``
   :depends python: 
   :depends tqdm: 
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

      mamba install saintbioutils

   and update with::

      mamba update saintbioutils

  To create a new environment, run::

      mamba create --name myenvname saintbioutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/saintbioutils:<tag>

   (see `saintbioutils/tags`_ for valid values for ``<tag>``)


.. |downloads_saintbioutils| image:: https://img.shields.io/conda/dn/bioconda/saintbioutils.svg?style=flat
   :target: https://anaconda.org/bioconda/saintbioutils
   :alt:   (downloads)
.. |docker_saintbioutils| image:: https://quay.io/repository/biocontainers/saintbioutils/status
   :target: https://quay.io/repository/biocontainers/saintbioutils
.. _`saintbioutils/tags`: https://quay.io/repository/biocontainers/saintbioutils?tab=tags


.. raw:: html

    <script>
        var package = "saintbioutils";
        var versions = ["0.0.25","0.0.24","0.0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saintbioutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saintbioutils/README.html