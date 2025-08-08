:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmems'
.. highlight: bash

libmems
=======

.. conda:recipe:: libmems
   :replaces_section_title:
   :noindex:

   libMems is a freely available software development library to support DNA string matching and comparative genomics.

   :homepage: http://darlinglab.org/mauve
   :license: GPL / GPL-2.0-or-later
   :recipe: /`libmems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmems/meta.yaml>`_

   


.. conda:package:: libmems

   |downloads_libmems| |docker_libmems|

   :versions:
      
      

      ``1.6.0-8``,  ``1.6.0-6``,  ``1.6.0-5``,  ``1.6.0-4``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libgenome: ``>=1.3.1,<2.0a0``
   :depends libmuscle: ``>=3.7,<4.0a0``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install libmems

   and update with::

      mamba update libmems

  To create a new environment, run::

      mamba create --name myenvname libmems

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libmems:<tag>

   (see `libmems/tags`_ for valid values for ``<tag>``)


.. |downloads_libmems| image:: https://img.shields.io/conda/dn/bioconda/libmems.svg?style=flat
   :target: https://anaconda.org/bioconda/libmems
   :alt:   (downloads)
.. |docker_libmems| image:: https://quay.io/repository/biocontainers/libmems/status
   :target: https://quay.io/repository/biocontainers/libmems
.. _`libmems/tags`: https://quay.io/repository/biocontainers/libmems?tab=tags


.. raw:: html

    <script>
        var package = "libmems";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmems/README.html