:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyctv_taxonomy'
.. highlight: bash

pyctv_taxonomy
==============

.. conda:recipe:: pyctv_taxonomy
   :replaces_section_title:
   :noindex:

   pyctv\_taxonomy\: download and use the ICTV Virus Metadata Resource

   :homepage: https://github.com/linsalrob/pyctv
   :license: MIT / MIT
   :recipe: /`pyctv_taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyctv_taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyctv_taxonomy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7728567`

   


.. conda:package:: pyctv_taxonomy

   |downloads_pyctv_taxonomy| |docker_pyctv_taxonomy|

   :versions:
      
      

      ``0.25-0``

      

   
   :depends openpyxl: 
   :depends python: ``>=3``
   :depends requests: 
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

      mamba install pyctv_taxonomy

   and update with::

      mamba update pyctv_taxonomy

  To create a new environment, run::

      mamba create --name myenvname pyctv_taxonomy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyctv_taxonomy:<tag>

   (see `pyctv_taxonomy/tags`_ for valid values for ``<tag>``)


.. |downloads_pyctv_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/pyctv_taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/pyctv_taxonomy
   :alt:   (downloads)
.. |docker_pyctv_taxonomy| image:: https://quay.io/repository/biocontainers/pyctv_taxonomy/status
   :target: https://quay.io/repository/biocontainers/pyctv_taxonomy
.. _`pyctv_taxonomy/tags`: https://quay.io/repository/biocontainers/pyctv_taxonomy?tab=tags


.. raw:: html

    <script>
        var package = "pyctv_taxonomy";
        var versions = ["0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyctv_taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyctv_taxonomy/README.html