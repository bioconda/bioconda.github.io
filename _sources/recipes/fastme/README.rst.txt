:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastme'
.. highlight: bash

fastme
======

.. conda:recipe:: fastme
   :replaces_section_title:
   :noindex:

   a comprehensive\, accurate and fast distance\-based phylogeny inference program.

   :homepage: http://www.atgc-montpellier.fr/fastme/binaries.php
   :documentation: http://www.atgc-montpellier.fr/fastme/usersguide.php
   
   :developer docs: https://gite.lirmm.fr/atgc/FastME/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fastme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme/meta.yaml>`_
   :links: biotools: :biotools:`fastme`, doi: :doi:`10.1093/molbev/msv150`

   


.. conda:package:: fastme

   |downloads_fastme| |docker_fastme|

   :versions:
      
      

      ``2.1.6.3-1``,  ``2.1.6.3-0``,  ``2.1.6.1-3``,  ``2.1.6.1-2``,  ``2.1.6.1-1``,  ``2.1.6.1-0``,  ``2.1.5-0``

      

   
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

      mamba install fastme

   and update with::

      mamba update fastme

  To create a new environment, run::

      mamba create --name myenvname fastme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastme:<tag>

   (see `fastme/tags`_ for valid values for ``<tag>``)


.. |downloads_fastme| image:: https://img.shields.io/conda/dn/bioconda/fastme.svg?style=flat
   :target: https://anaconda.org/bioconda/fastme
   :alt:   (downloads)
.. |docker_fastme| image:: https://quay.io/repository/biocontainers/fastme/status
   :target: https://quay.io/repository/biocontainers/fastme
.. _`fastme/tags`: https://quay.io/repository/biocontainers/fastme?tab=tags


.. raw:: html

    <script>
        var package = "fastme";
        var versions = ["2.1.6.3","2.1.6.3","2.1.6.1","2.1.6.1","2.1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastme/README.html