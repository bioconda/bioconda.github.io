:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telescope'
.. highlight: bash

telescope
=========

.. conda:recipe:: telescope
   :replaces_section_title:
   :noindex:

   Single locus resolution of Transposable ELEment expression.

   :homepage: https://github.com/mlbendall/telescope
   :license: MIT / MIT
   :recipe: /`telescope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telescope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telescope/meta.yaml>`_
   :links: doi: :doi:`10.1101/398172`

   


.. conda:package:: telescope

   |downloads_telescope| |docker_telescope|

   :versions:
      
      

      ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends future: ``>=0.17.1``
   :depends htslib: ``>=1.15.1,<1.23.0a0``
   :depends intervaltree: ``>=3.0.2``
   :depends numpy: ``>=1.23.2,<2.0a0``
   :depends pysam: ``>=0.15.2``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: ``>=5.1``
   :depends scipy: ``>=1.2.1``
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

      mamba install telescope

   and update with::

      mamba update telescope

  To create a new environment, run::

      mamba create --name myenvname telescope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/telescope:<tag>

   (see `telescope/tags`_ for valid values for ``<tag>``)


.. |downloads_telescope| image:: https://img.shields.io/conda/dn/bioconda/telescope.svg?style=flat
   :target: https://anaconda.org/bioconda/telescope
   :alt:   (downloads)
.. |docker_telescope| image:: https://quay.io/repository/biocontainers/telescope/status
   :target: https://quay.io/repository/biocontainers/telescope
.. _`telescope/tags`: https://quay.io/repository/biocontainers/telescope?tab=tags


.. raw:: html

    <script>
        var package = "telescope";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telescope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telescope/README.html