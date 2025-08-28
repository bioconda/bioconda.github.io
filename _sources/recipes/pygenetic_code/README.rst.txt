:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenetic_code'
.. highlight: bash

pygenetic_code
==============

.. conda:recipe:: pygenetic_code
   :replaces_section_title:
   :noindex:

   Python code for translating sequences using different NCBI translation tables and genetic codes

   :homepage: https://github.com/linsalrob/genetic_codes
   :license: MIT / MIT
   :recipe: /`pygenetic_code <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenetic_code>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenetic_code/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10450718`

   


.. conda:package:: pygenetic_code

   |downloads_pygenetic_code| |docker_pygenetic_code|

   :versions:
      
      

      ``0.20.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
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

      mamba install pygenetic_code

   and update with::

      mamba update pygenetic_code

  To create a new environment, run::

      mamba create --name myenvname pygenetic_code

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygenetic_code:<tag>

   (see `pygenetic_code/tags`_ for valid values for ``<tag>``)


.. |downloads_pygenetic_code| image:: https://img.shields.io/conda/dn/bioconda/pygenetic_code.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenetic_code
   :alt:   (downloads)
.. |docker_pygenetic_code| image:: https://quay.io/repository/biocontainers/pygenetic_code/status
   :target: https://quay.io/repository/biocontainers/pygenetic_code
.. _`pygenetic_code/tags`: https://quay.io/repository/biocontainers/pygenetic_code?tab=tags


.. raw:: html

    <script>
        var package = "pygenetic_code";
        var versions = ["0.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenetic_code/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenetic_code/README.html