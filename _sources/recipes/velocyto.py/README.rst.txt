:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velocyto.py'
.. highlight: bash

velocyto.py
===========

.. conda:recipe:: velocyto.py
   :replaces_section_title:
   :noindex:

   A library for the analysis of RNA velocity.

   :homepage: https://github.com/velocyto-team/velocyto.py
   :license: MIT
   :recipe: /`velocyto.py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velocyto.py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velocyto.py/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41586-018-0414-6`

   


.. conda:package:: velocyto.py

   |downloads_velocyto.py| |docker_velocyto.py|

   :versions:
      
      

      ``0.17.17-6``,  ``0.17.17-5``,  ``0.17.17-4``,  ``0.17.17-3``,  ``0.17.17-2``,  ``0.17.17-1``,  ``0.17.17-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends click: 
   :depends h5py: 
   :depends libgcc-ng: ``>=12``
   :depends loompy: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install velocyto.py

   and update with::

      mamba update velocyto.py

  To create a new environment, run::

      mamba create --name myenvname velocyto.py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/velocyto.py:<tag>

   (see `velocyto.py/tags`_ for valid values for ``<tag>``)


.. |downloads_velocyto.py| image:: https://img.shields.io/conda/dn/bioconda/velocyto.py.svg?style=flat
   :target: https://anaconda.org/bioconda/velocyto.py
   :alt:   (downloads)
.. |docker_velocyto.py| image:: https://quay.io/repository/biocontainers/velocyto.py/status
   :target: https://quay.io/repository/biocontainers/velocyto.py
.. _`velocyto.py/tags`: https://quay.io/repository/biocontainers/velocyto.py?tab=tags


.. raw:: html

    <script>
        var package = "velocyto.py";
        var versions = ["0.17.17","0.17.17","0.17.17","0.17.17","0.17.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velocyto.py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velocyto.py/README.html