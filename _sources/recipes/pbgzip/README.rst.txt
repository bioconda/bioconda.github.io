:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbgzip'
.. highlight: bash

pbgzip
======

.. conda:recipe:: pbgzip
   :replaces_section_title:
   :noindex:

   Parallel Block GZIP

   :homepage: https://github.com/nh13/pbgzip
   :license: MIT/Expat
   :recipe: /`pbgzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip/meta.yaml>`_

   


.. conda:package:: pbgzip

   |downloads_pbgzip| |docker_pbgzip|

   :versions:
      
      

      ``2016.08.04-5``,  ``2016.08.04-4``,  ``2016.08.04-3``,  ``2016.08.04-2``,  ``2016.08.04-1``,  ``2016.08.04-0``,  ``2015.10.28-1``,  ``2015.10.28-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install pbgzip

   and update with::

      mamba update pbgzip

  To create a new environment, run::

      mamba create --name myenvname pbgzip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbgzip:<tag>

   (see `pbgzip/tags`_ for valid values for ``<tag>``)


.. |downloads_pbgzip| image:: https://img.shields.io/conda/dn/bioconda/pbgzip.svg?style=flat
   :target: https://anaconda.org/bioconda/pbgzip
   :alt:   (downloads)
.. |docker_pbgzip| image:: https://quay.io/repository/biocontainers/pbgzip/status
   :target: https://quay.io/repository/biocontainers/pbgzip
.. _`pbgzip/tags`: https://quay.io/repository/biocontainers/pbgzip?tab=tags


.. raw:: html

    <script>
        var package = "pbgzip";
        var versions = ["2016.08.04","2016.08.04","2016.08.04","2016.08.04","2016.08.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbgzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbgzip/README.html