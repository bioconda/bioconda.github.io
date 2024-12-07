:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gzrt'
.. highlight: bash

gzrt
====

.. conda:recipe:: gzrt
   :replaces_section_title:
   :noindex:

   Unofficial build of the gzip Recovery Toolkit aka gzrecover

   :homepage: https://www.urbanophile.com/arenn/hacking/gzrt
   :developer docs: https://github.com/arenn/gzrt
   :license: GPL / GPL-2.0-only
   :recipe: /`gzrt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gzrt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gzrt/meta.yaml>`_

   gzrecover is a program that will attempt to extract any readable data
   out of a gzip file that has been corrupted.



.. conda:package:: gzrt

   |downloads_gzrt| |docker_gzrt|

   :versions:
      
      

      ``0.8-1``,  ``0.8-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install gzrt

   and update with::

      mamba update gzrt

  To create a new environment, run::

      mamba create --name myenvname gzrt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gzrt:<tag>

   (see `gzrt/tags`_ for valid values for ``<tag>``)


.. |downloads_gzrt| image:: https://img.shields.io/conda/dn/bioconda/gzrt.svg?style=flat
   :target: https://anaconda.org/bioconda/gzrt
   :alt:   (downloads)
.. |docker_gzrt| image:: https://quay.io/repository/biocontainers/gzrt/status
   :target: https://quay.io/repository/biocontainers/gzrt
.. _`gzrt/tags`: https://quay.io/repository/biocontainers/gzrt?tab=tags


.. raw:: html

    <script>
        var package = "gzrt";
        var versions = ["0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gzrt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gzrt/README.html