:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gb-io'
.. highlight: bash

gb-io
=====

.. conda:recipe:: gb-io
   :replaces_section_title:
   :noindex:

   A Python interface to gb\-io\, a fast GenBank parser and serializer written in Rust.

   :homepage: https://github.com/althonos/gb-io.py
   :license: MIT
   :recipe: /`gb-io <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb-io>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb-io/meta.yaml>`_

   


.. conda:package:: gb-io

   |downloads_gb-io| |docker_gb-io|

   :versions:
      
      

      ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gb-io

   and update with::

      mamba update gb-io

  To create a new environment, run::

      mamba create --name myenvname gb-io

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gb-io:<tag>

   (see `gb-io/tags`_ for valid values for ``<tag>``)


.. |downloads_gb-io| image:: https://img.shields.io/conda/dn/bioconda/gb-io.svg?style=flat
   :target: https://anaconda.org/bioconda/gb-io
   :alt:   (downloads)
.. |docker_gb-io| image:: https://quay.io/repository/biocontainers/gb-io/status
   :target: https://quay.io/repository/biocontainers/gb-io
.. _`gb-io/tags`: https://quay.io/repository/biocontainers/gb-io?tab=tags


.. raw:: html

    <script>
        var package = "gb-io";
        var versions = ["0.3.2","0.3.2","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gb-io/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gb-io/README.html