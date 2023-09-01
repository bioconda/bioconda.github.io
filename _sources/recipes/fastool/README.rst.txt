:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastool'
.. highlight: bash

fastool
=======

.. conda:recipe:: fastool
   :replaces_section_title:
   :noindex:

   A simple and quick tool to read huge FastQ and FastA files \(both normal and gzipped\) and manipulate them.

   :homepage: https://github.com/fstrozzi/Fastool
   :license: MIT
   :recipe: /`fastool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool/meta.yaml>`_
   :links: biotools: :biotools:`Fastool`

   


.. conda:package:: fastool

   |downloads_fastool| |docker_fastool|

   :versions:
      
      

      ``0.1.4-8``,  ``0.1.4-7``,  ``0.1.4-6``,  ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install fastool

   and update with::

      mamba update fastool

  To create a new environment, run::

      mamba create --name myenvname fastool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastool:<tag>

   (see `fastool/tags`_ for valid values for ``<tag>``)


.. |downloads_fastool| image:: https://img.shields.io/conda/dn/bioconda/fastool.svg?style=flat
   :target: https://anaconda.org/bioconda/fastool
   :alt:   (downloads)
.. |docker_fastool| image:: https://quay.io/repository/biocontainers/fastool/status
   :target: https://quay.io/repository/biocontainers/fastool
.. _`fastool/tags`: https://quay.io/repository/biocontainers/fastool?tab=tags


.. raw:: html

    <script>
        var package = "fastool";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastool/README.html