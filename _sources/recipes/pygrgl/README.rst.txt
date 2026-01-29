:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygrgl'
.. highlight: bash

pygrgl
======

.. conda:recipe:: pygrgl
   :replaces_section_title:
   :noindex:

   Genotype Representation Graph Library for efficient storage\/use of huge genetic datasets

   :homepage: https://aprilweilab.github.io/
   :documentation: https://grgl.readthedocs.io/en/stable/
   
   :developer docs: https://github.com/aprilweilab/grgl
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pygrgl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygrgl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygrgl/meta.yaml>`_

   


.. conda:package:: pygrgl

   |downloads_pygrgl| |docker_pygrgl|

   :versions:
      
      

      ``2.5-0``,  ``2.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pygrgl

   and update with::

      mamba update pygrgl

  To create a new environment, run::

      mamba create --name myenvname pygrgl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygrgl:<tag>

   (see `pygrgl/tags`_ for valid values for ``<tag>``)


.. |downloads_pygrgl| image:: https://img.shields.io/conda/dn/bioconda/pygrgl.svg?style=flat
   :target: https://anaconda.org/bioconda/pygrgl
   :alt:   (downloads)
.. |docker_pygrgl| image:: https://quay.io/repository/biocontainers/pygrgl/status
   :target: https://quay.io/repository/biocontainers/pygrgl
.. _`pygrgl/tags`: https://quay.io/repository/biocontainers/pygrgl?tab=tags


.. raw:: html

    <script>
        var package = "pygrgl";
        var versions = ["2.5","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygrgl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygrgl/README.html