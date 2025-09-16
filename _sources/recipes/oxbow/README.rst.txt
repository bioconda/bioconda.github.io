:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oxbow'
.. highlight: bash

oxbow
=====

.. conda:recipe:: oxbow
   :replaces_section_title:
   :noindex:

   Read genomic file formats into data frames and more.

   :homepage: https://github.com/abdenlab/oxbow
   :license: MIT AND Apache-2.0
   :recipe: /`oxbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxbow/meta.yaml>`_

   


.. conda:package:: oxbow

   |downloads_oxbow| |docker_oxbow|

   :versions:
      
      

      ``0.4.1-0``

      

   
   :depends arro3-core: ``>=0.4.6``
   :depends fsspec: ``>=2025.5.1``
   :depends pandas: ``>=2.2.3``
   :depends polars: ``>=1.26.0``
   :depends pyarrow: ``>=19.0.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install oxbow

   and update with::

      mamba update oxbow

  To create a new environment, run::

      mamba create --name myenvname oxbow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oxbow:<tag>

   (see `oxbow/tags`_ for valid values for ``<tag>``)


.. |downloads_oxbow| image:: https://img.shields.io/conda/dn/bioconda/oxbow.svg?style=flat
   :target: https://anaconda.org/bioconda/oxbow
   :alt:   (downloads)
.. |docker_oxbow| image:: https://quay.io/repository/biocontainers/oxbow/status
   :target: https://quay.io/repository/biocontainers/oxbow
.. _`oxbow/tags`: https://quay.io/repository/biocontainers/oxbow?tab=tags


.. raw:: html

    <script>
        var package = "oxbow";
        var versions = ["0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oxbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oxbow/README.html