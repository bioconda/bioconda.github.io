:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trgt'
.. highlight: bash

trgt
====

.. conda:recipe:: trgt
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyping and visualization from PacBio HiFi data

   :homepage: https://github.com/PacificBiosciences/trgt
   :license: BSD-3-Clause-Clear
   :recipe: /`trgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt/meta.yaml>`_

   


.. conda:package:: trgt

   |downloads_trgt| |docker_trgt|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``

      

   
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

      mamba install trgt

   and update with::

      mamba update trgt

  To create a new environment, run::

      mamba create --name myenvname trgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trgt:<tag>

   (see `trgt/tags`_ for valid values for ``<tag>``)


.. |downloads_trgt| image:: https://img.shields.io/conda/dn/bioconda/trgt.svg?style=flat
   :target: https://anaconda.org/bioconda/trgt
   :alt:   (downloads)
.. |docker_trgt| image:: https://quay.io/repository/biocontainers/trgt/status
   :target: https://quay.io/repository/biocontainers/trgt
.. _`trgt/tags`: https://quay.io/repository/biocontainers/trgt?tab=tags


.. raw:: html

    <script>
        var package = "trgt";
        var versions = ["0.5.0","0.4.0","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trgt/README.html