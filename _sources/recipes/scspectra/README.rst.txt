:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scspectra'
.. highlight: bash

scspectra
=========

.. conda:recipe:: scspectra
   :replaces_section_title:
   :noindex:

   Supervised discovery of interpretable gene programs from single\-cell data.

   :homepage: https://github.com/dpeerlab/spectra
   :license: MIT / MIT
   :recipe: /`scspectra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scspectra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scspectra/meta.yaml>`_

   


.. conda:package:: scspectra

   |downloads_scspectra| |docker_scspectra|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends numpy: ``>=2.0.0,<3.0.0``
   :depends opt-einsum: ``>=3.3.0``
   :depends pandas: ``>=2.0.0,<3.0.0``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=2.0.0,<3.0.0``
   :depends pyvis: ``>=0.1.9,<0.2.0``
   :depends scanpy: ``>=1.8.2``
   :depends scipy: ``>=1.7.3``
   :depends tqdm: ``>=4.62.3``
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

      mamba install scspectra

   and update with::

      mamba update scspectra

  To create a new environment, run::

      mamba create --name myenvname scspectra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scspectra:<tag>

   (see `scspectra/tags`_ for valid values for ``<tag>``)


.. |downloads_scspectra| image:: https://img.shields.io/conda/dn/bioconda/scspectra.svg?style=flat
   :target: https://anaconda.org/bioconda/scspectra
   :alt:   (downloads)
.. |docker_scspectra| image:: https://quay.io/repository/biocontainers/scspectra/status
   :target: https://quay.io/repository/biocontainers/scspectra
.. _`scspectra/tags`: https://quay.io/repository/biocontainers/scspectra?tab=tags


.. raw:: html

    <script>
        var package = "scspectra";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scspectra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scspectra/README.html