:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmlrc'
.. highlight: bash

fmlrc
=====

.. conda:recipe:: fmlrc
   :replaces_section_title:
   :noindex:

   A long\-read error correction tool using the multi\-string Burrows Wheeler Transform

   :homepage: https://github.com/holtjma/fmlrc
   :license: MIT / MIT
   :recipe: /`fmlrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2051-3`

   


.. conda:package:: fmlrc

   |downloads_fmlrc| |docker_fmlrc|

   :versions:
      
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fmlrc

   and update with::

      mamba update fmlrc

  To create a new environment, run::

      mamba create --name myenvname fmlrc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fmlrc:<tag>

   (see `fmlrc/tags`_ for valid values for ``<tag>``)


.. |downloads_fmlrc| image:: https://img.shields.io/conda/dn/bioconda/fmlrc.svg?style=flat
   :target: https://anaconda.org/bioconda/fmlrc
   :alt:   (downloads)
.. |docker_fmlrc| image:: https://quay.io/repository/biocontainers/fmlrc/status
   :target: https://quay.io/repository/biocontainers/fmlrc
.. _`fmlrc/tags`: https://quay.io/repository/biocontainers/fmlrc?tab=tags


.. raw:: html

    <script>
        var package = "fmlrc";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmlrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmlrc/README.html