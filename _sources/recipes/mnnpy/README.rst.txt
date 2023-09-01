:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mnnpy'
.. highlight: bash

mnnpy
=====

.. conda:recipe:: mnnpy
   :replaces_section_title:
   :noindex:

   Mutual nearest neighbors correction in python.

   :homepage: http://github.com/chriscainx/mnnpy
   :license: BSD / BSD-3-Clause
   :recipe: /`mnnpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mnnpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mnnpy/meta.yaml>`_

   


.. conda:package:: mnnpy

   |downloads_mnnpy| |docker_mnnpy|

   :versions:
      
      

      ``0.1.9.5-8``,  ``0.1.9.5-6``,  ``0.1.9.5-5``,  ``0.1.9.5-4``,  ``0.1.9.5-3``,  ``0.1.9.5-2``,  ``0.1.9.5-1``,  ``0.1.9.5-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends anndata: 
   :depends libgcc-ng: ``>=12``
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``<1.9.0``
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

      mamba install mnnpy

   and update with::

      mamba update mnnpy

  To create a new environment, run::

      mamba create --name myenvname mnnpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mnnpy:<tag>

   (see `mnnpy/tags`_ for valid values for ``<tag>``)


.. |downloads_mnnpy| image:: https://img.shields.io/conda/dn/bioconda/mnnpy.svg?style=flat
   :target: https://anaconda.org/bioconda/mnnpy
   :alt:   (downloads)
.. |docker_mnnpy| image:: https://quay.io/repository/biocontainers/mnnpy/status
   :target: https://quay.io/repository/biocontainers/mnnpy
.. _`mnnpy/tags`: https://quay.io/repository/biocontainers/mnnpy?tab=tags


.. raw:: html

    <script>
        var package = "mnnpy";
        var versions = ["0.1.9.5","0.1.9.5","0.1.9.5","0.1.9.5","0.1.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mnnpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mnnpy/README.html