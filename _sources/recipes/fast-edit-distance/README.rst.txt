:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast-edit-distance'
.. highlight: bash

fast-edit-distance
==================

.. conda:recipe:: fast-edit-distance
   :replaces_section_title:
   :noindex:

   A implementation of edit distance with improved runtime.

   :homepage: https://github.com/youyupei/fast_edit_distance
   :documentation: https://github.com/youyupei/fast_edit_distance/blob/v1.2.1/README.md
   
   :license: MIT / MIT
   :recipe: /`fast-edit-distance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast-edit-distance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast-edit-distance/meta.yaml>`_

   


.. conda:package:: fast-edit-distance

   |downloads_fast-edit-distance| |docker_fast-edit-distance|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install fast-edit-distance

   and update with::

      mamba update fast-edit-distance

  To create a new environment, run::

      mamba create --name myenvname fast-edit-distance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fast-edit-distance:<tag>

   (see `fast-edit-distance/tags`_ for valid values for ``<tag>``)


.. |downloads_fast-edit-distance| image:: https://img.shields.io/conda/dn/bioconda/fast-edit-distance.svg?style=flat
   :target: https://anaconda.org/bioconda/fast-edit-distance
   :alt:   (downloads)
.. |docker_fast-edit-distance| image:: https://quay.io/repository/biocontainers/fast-edit-distance/status
   :target: https://quay.io/repository/biocontainers/fast-edit-distance
.. _`fast-edit-distance/tags`: https://quay.io/repository/biocontainers/fast-edit-distance?tab=tags


.. raw:: html

    <script>
        var package = "fast-edit-distance";
        var versions = ["1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast-edit-distance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast-edit-distance/README.html