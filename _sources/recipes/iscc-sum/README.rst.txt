:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iscc-sum'
.. highlight: bash

iscc-sum
========

.. conda:recipe:: iscc-sum
   :replaces_section_title:
   :noindex:

   High\-performance ISCC Data\-Code and Instance\-Code hashing

   :homepage: https://github.com/bio-codes/iscc-sum
   :license: Apache / Apache-2.0
   :recipe: /`iscc-sum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iscc-sum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iscc-sum/meta.yaml>`_

   


.. conda:package:: iscc-sum

   |downloads_iscc-sum| |docker_iscc-sum|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends blake3: ``>=1.0.5``
   :depends click: ``>=8.0.0``
   :depends libgcc: ``>=13``
   :depends pathspec: ``>=0.12.1``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends python-xxhash: ``>=3.5.0``
   :depends python_abi: ``3.14.* *_cp314``
   :depends universal-pathlib: ``>=0.2.6``
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

      mamba install iscc-sum

   and update with::

      mamba update iscc-sum

  To create a new environment, run::

      mamba create --name myenvname iscc-sum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iscc-sum:<tag>

   (see `iscc-sum/tags`_ for valid values for ``<tag>``)


.. |downloads_iscc-sum| image:: https://img.shields.io/conda/dn/bioconda/iscc-sum.svg?style=flat
   :target: https://anaconda.org/bioconda/iscc-sum
   :alt:   (downloads)
.. |docker_iscc-sum| image:: https://quay.io/repository/biocontainers/iscc-sum/status
   :target: https://quay.io/repository/biocontainers/iscc-sum
.. _`iscc-sum/tags`: https://quay.io/repository/biocontainers/iscc-sum?tab=tags


.. raw:: html

    <script>
        var package = "iscc-sum";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iscc-sum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iscc-sum/README.html