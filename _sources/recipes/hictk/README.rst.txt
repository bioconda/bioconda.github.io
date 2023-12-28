:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hictk'
.. highlight: bash

hictk
=====

.. conda:recipe:: hictk
   :replaces_section_title:
   :noindex:

   Blazing fast toolkit to work with .hic and .cool files

   :homepage: https://github.com/paulsengroup/hictk
   :documentation: https://github.com/paulsengroup/hictk#readme
   
   :license: MIT
   :recipe: /`hictk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictk/meta.yaml>`_
   :links: biotools: :biotools:`hictk`, doi: :doi:`10.5281/zenodo.8214221`

   


.. conda:package:: hictk

   |downloads_hictk| |docker_hictk|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends hdf5: ``>=1.12``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libboost: ``>=1.80``
   :depends libdeflate: ``>=1.18,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends zstd: ``>=1.5``
   :depends zstd: ``>=1.5.5,<1.6.0a0``
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

      mamba install hictk

   and update with::

      mamba update hictk

  To create a new environment, run::

      mamba create --name myenvname hictk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hictk:<tag>

   (see `hictk/tags`_ for valid values for ``<tag>``)


.. |downloads_hictk| image:: https://img.shields.io/conda/dn/bioconda/hictk.svg?style=flat
   :target: https://anaconda.org/bioconda/hictk
   :alt:   (downloads)
.. |docker_hictk| image:: https://quay.io/repository/biocontainers/hictk/status
   :target: https://quay.io/repository/biocontainers/hictk
.. _`hictk/tags`: https://quay.io/repository/biocontainers/hictk?tab=tags


.. raw:: html

    <script>
        var package = "hictk";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hictk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hictk/README.html