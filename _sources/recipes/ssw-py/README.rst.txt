:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssw-py'
.. highlight: bash

ssw-py
======

.. conda:recipe:: ssw-py
   :replaces_section_title:
   :noindex:

   Python bindings for Complete\-Striped\-Smith\-Waterman\-Library \(SSW\)

   :homepage: https://github.com/libnano/ssw-py
   :license: MIT
   :recipe: /`ssw-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssw-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssw-py/meta.yaml>`_

   


.. conda:package:: ssw-py

   |downloads_ssw-py| |docker_ssw-py|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc: ``>=14``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install ssw-py

   and update with::

      mamba update ssw-py

  To create a new environment, run::

      mamba create --name myenvname ssw-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssw-py:<tag>

   (see `ssw-py/tags`_ for valid values for ``<tag>``)


.. |downloads_ssw-py| image:: https://img.shields.io/conda/dn/bioconda/ssw-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ssw-py
   :alt:   (downloads)
.. |docker_ssw-py| image:: https://quay.io/repository/biocontainers/ssw-py/status
   :target: https://quay.io/repository/biocontainers/ssw-py
.. _`ssw-py/tags`: https://quay.io/repository/biocontainers/ssw-py?tab=tags


.. raw:: html

    <script>
        var package = "ssw-py";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssw-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssw-py/README.html