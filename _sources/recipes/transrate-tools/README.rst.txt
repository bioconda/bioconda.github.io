:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transrate-tools'
.. highlight: bash

transrate-tools
===============

.. conda:recipe:: transrate-tools
   :replaces_section_title:
   :noindex:

   Command\-line tools used by transrate for processing bam files.

   :homepage: https://github.com/blahah/transrate-tools
   :license: MIT
   :recipe: /`transrate-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools/meta.yaml>`_

   


.. conda:package:: transrate-tools

   |downloads_transrate-tools| |docker_transrate-tools|

   :versions:
      
      

      ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install transrate-tools

   and update with::

      mamba update transrate-tools

  To create a new environment, run::

      mamba create --name myenvname transrate-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transrate-tools:<tag>

   (see `transrate-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_transrate-tools| image:: https://img.shields.io/conda/dn/bioconda/transrate-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/transrate-tools
   :alt:   (downloads)
.. |docker_transrate-tools| image:: https://quay.io/repository/biocontainers/transrate-tools/status
   :target: https://quay.io/repository/biocontainers/transrate-tools
.. _`transrate-tools/tags`: https://quay.io/repository/biocontainers/transrate-tools?tab=tags


.. raw:: html

    <script>
        var package = "transrate-tools";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate-tools/README.html