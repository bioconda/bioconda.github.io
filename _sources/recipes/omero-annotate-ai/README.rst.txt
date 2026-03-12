:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omero-annotate-ai'
.. highlight: bash

omero-annotate-ai
=================

.. conda:recipe:: omero-annotate-ai
   :replaces_section_title:
   :noindex:

   OMERO integration for AI\-powered image annotation and segmentation workflows

   :homepage: https://github.com/Leiden-Cell-Observatory/omero_annotate_ai
   :documentation: https://leiden-cell-observatory.github.io/omero_annotate_ai/
   
   :license: Apache-2.0
   :recipe: /`omero-annotate-ai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-annotate-ai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-annotate-ai/meta.yaml>`_

   Python package to support reproducible image annotation workflows for AI
   training using OMERO data repositories. Provides Jupyter widgets and tools
   for reproducible annotation\, training\, and inference using micro\-SAM\,
   Cellpose\, and other AI models directly with OMERO datasets.



.. conda:package:: omero-annotate-ai

   |downloads_omero-annotate-ai| |docker_omero-annotate-ai|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends dask: ``>=2021.6.0``
   :depends ezomero: ``>=3.1.0``
   :depends imageio: ``>=2.9.0``
   :depends ipykernel: 
   :depends ipywidgets: ``>=7.6.0``
   :depends keyring: ``>=23.0.0``
   :depends micro_sam: ``>=1.7.0,<2``
   :depends numpy: ``>=1.21.0,<2.0``
   :depends opencv: ``>=4.5.0``
   :depends pandas: ``>=1.3.0``
   :depends pydantic: ``>=2.0.0``
   :depends python: 
   :depends pyyaml: ``>=6.0``
   :depends tifffile: 
   :depends typing-extensions: ``>=4.0.0``
   :depends zeroc-ice: ``>=3.6.4,<3.7``
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

      mamba install omero-annotate-ai

   and update with::

      mamba update omero-annotate-ai

  To create a new environment, run::

      mamba create --name myenvname omero-annotate-ai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/omero-annotate-ai:<tag>

   (see `omero-annotate-ai/tags`_ for valid values for ``<tag>``)


.. |downloads_omero-annotate-ai| image:: https://img.shields.io/conda/dn/bioconda/omero-annotate-ai.svg?style=flat
   :target: https://anaconda.org/bioconda/omero-annotate-ai
   :alt:   (downloads)
.. |docker_omero-annotate-ai| image:: https://quay.io/repository/biocontainers/omero-annotate-ai/status
   :target: https://quay.io/repository/biocontainers/omero-annotate-ai
.. _`omero-annotate-ai/tags`: https://quay.io/repository/biocontainers/omero-annotate-ai?tab=tags


.. raw:: html

    <script>
        var package = "omero-annotate-ai";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omero-annotate-ai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omero-annotate-ai/README.html