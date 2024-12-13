:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srprism'
.. highlight: bash

srprism
=======

.. conda:recipe:: srprism
   :replaces_section_title:
   :noindex:

   SRPRISM \- Short Read Alignment Tool

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/srprism/
   :license: Public Domain
   :recipe: /`srprism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism/meta.yaml>`_

   


.. conda:package:: srprism

   |downloads_srprism| |docker_srprism|

   :versions:
      
      

      ``2.4.24-6``,  ``2.4.24-5``,  ``2.4.24-3``,  ``2.4.24-2``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install srprism

   and update with::

      mamba update srprism

  To create a new environment, run::

      mamba create --name myenvname srprism

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srprism:<tag>

   (see `srprism/tags`_ for valid values for ``<tag>``)


.. |downloads_srprism| image:: https://img.shields.io/conda/dn/bioconda/srprism.svg?style=flat
   :target: https://anaconda.org/bioconda/srprism
   :alt:   (downloads)
.. |docker_srprism| image:: https://quay.io/repository/biocontainers/srprism/status
   :target: https://quay.io/repository/biocontainers/srprism
.. _`srprism/tags`: https://quay.io/repository/biocontainers/srprism?tab=tags


.. raw:: html

    <script>
        var package = "srprism";
        var versions = ["2.4.24","2.4.24","2.4.24","2.4.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srprism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srprism/README.html