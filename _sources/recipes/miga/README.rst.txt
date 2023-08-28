:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miga'
.. highlight: bash

miga
====

.. conda:recipe:: miga
   :replaces_section_title:
   :noindex:

   Python package to optimize mutual information between two multiple sequence alignment.

   :homepage: https://github.com/caioss/miga
   :developer docs: https://github.com/caioss/miga/
   :license: LGPL-3.0
   :recipe: /`miga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miga/meta.yaml>`_

   


.. conda:package:: miga

   |downloads_miga| |docker_miga|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install miga

   and update with::

      mamba update miga

  To create a new environment, run::

      mamba create --name myenvname miga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miga:<tag>

   (see `miga/tags`_ for valid values for ``<tag>``)


.. |downloads_miga| image:: https://img.shields.io/conda/dn/bioconda/miga.svg?style=flat
   :target: https://anaconda.org/bioconda/miga
   :alt:   (downloads)
.. |docker_miga| image:: https://quay.io/repository/biocontainers/miga/status
   :target: https://quay.io/repository/biocontainers/miga
.. _`miga/tags`: https://quay.io/repository/biocontainers/miga?tab=tags


.. raw:: html

    <script>
        var package = "miga";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miga/README.html