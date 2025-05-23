:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio2zarr'
.. highlight: bash

bio2zarr
========

.. conda:recipe:: bio2zarr
   :replaces_section_title:
   :noindex:

   Convert bioinformatics data to Zarr

   :homepage: https://sgkit-dev.github.io/bio2zarr/
   :developer docs: https://github.com/sgkit-dev/bio2zarr
   :license: Apache-2.0
   :recipe: /`bio2zarr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio2zarr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio2zarr/meta.yaml>`_

   


.. conda:package:: bio2zarr

   |downloads_bio2zarr| |docker_bio2zarr|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends bed-reader: 
   :depends click: 
   :depends cyvcf2: 
   :depends humanfriendly: 
   :depends numpy: ``>=1.26``
   :depends python: ``>=3.9``
   :depends tabulate: 
   :depends tqdm: 
   :depends zarr: ``>=2.17,<3``
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

      mamba install bio2zarr

   and update with::

      mamba update bio2zarr

  To create a new environment, run::

      mamba create --name myenvname bio2zarr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio2zarr:<tag>

   (see `bio2zarr/tags`_ for valid values for ``<tag>``)


.. |downloads_bio2zarr| image:: https://img.shields.io/conda/dn/bioconda/bio2zarr.svg?style=flat
   :target: https://anaconda.org/bioconda/bio2zarr
   :alt:   (downloads)
.. |docker_bio2zarr| image:: https://quay.io/repository/biocontainers/bio2zarr/status
   :target: https://quay.io/repository/biocontainers/bio2zarr
.. _`bio2zarr/tags`: https://quay.io/repository/biocontainers/bio2zarr?tab=tags


.. raw:: html

    <script>
        var package = "bio2zarr";
        var versions = ["0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio2zarr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio2zarr/README.html