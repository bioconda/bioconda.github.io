:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgranges'
.. highlight: bash

cgranges
========

.. conda:recipe:: cgranges
   :replaces_section_title:
   :noindex:

   cgranges is a small C library for genomic interval overlap queries

   :homepage: https://github.com/lh3/cgranges
   :license: MIT / MIT
   :recipe: /`cgranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgranges/meta.yaml>`_

   


.. conda:package:: cgranges

   |downloads_cgranges| |docker_cgranges|

   :versions:
      
      

      ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cgranges

   and update with::

      mamba update cgranges

  To create a new environment, run::

      mamba create --name myenvname cgranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgranges:<tag>

   (see `cgranges/tags`_ for valid values for ``<tag>``)


.. |downloads_cgranges| image:: https://img.shields.io/conda/dn/bioconda/cgranges.svg?style=flat
   :target: https://anaconda.org/bioconda/cgranges
   :alt:   (downloads)
.. |docker_cgranges| image:: https://quay.io/repository/biocontainers/cgranges/status
   :target: https://quay.io/repository/biocontainers/cgranges
.. _`cgranges/tags`: https://quay.io/repository/biocontainers/cgranges?tab=tags


.. raw:: html

    <script>
        var package = "cgranges";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgranges/README.html