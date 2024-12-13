:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplexer'
.. highlight: bash

nanoplexer
==========

.. conda:recipe:: nanoplexer
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing Nanopore barcode sequence data

   :homepage: https://github.com/hanyue36/nanoplexer
   :license: MIT
   :recipe: /`nanoplexer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplexer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplexer/meta.yaml>`_

   


.. conda:package:: nanoplexer

   |downloads_nanoplexer| |docker_nanoplexer|

   :versions:
      
      

      ``0.1.2-5``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install nanoplexer

   and update with::

      mamba update nanoplexer

  To create a new environment, run::

      mamba create --name myenvname nanoplexer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoplexer:<tag>

   (see `nanoplexer/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplexer| image:: https://img.shields.io/conda/dn/bioconda/nanoplexer.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplexer
   :alt:   (downloads)
.. |docker_nanoplexer| image:: https://quay.io/repository/biocontainers/nanoplexer/status
   :target: https://quay.io/repository/biocontainers/nanoplexer
.. _`nanoplexer/tags`: https://quay.io/repository/biocontainers/nanoplexer?tab=tags


.. raw:: html

    <script>
        var package = "nanoplexer";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplexer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplexer/README.html