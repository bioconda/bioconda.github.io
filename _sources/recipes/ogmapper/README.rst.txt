:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ogmapper'
.. highlight: bash

ogmapper
========

.. conda:recipe:: ogmapper
   :replaces_section_title:
   :noindex:

   A fast and light genomic mapper for short reads

   :homepage: https://github.com/vtrevino/ogmapper
   :license: GPL3 / GPLv3
   :recipe: /`ogmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogmapper/meta.yaml>`_
   :links: biotools: :biotools:`ogmapper`

   


.. conda:package:: ogmapper

   |downloads_ogmapper| |docker_ogmapper|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends wfa2-lib: ``>=2.3.5,<3.0a0``
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

      mamba install ogmapper

   and update with::

      mamba update ogmapper

  To create a new environment, run::

      mamba create --name myenvname ogmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ogmapper:<tag>

   (see `ogmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_ogmapper| image:: https://img.shields.io/conda/dn/bioconda/ogmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/ogmapper
   :alt:   (downloads)
.. |docker_ogmapper| image:: https://quay.io/repository/biocontainers/ogmapper/status
   :target: https://quay.io/repository/biocontainers/ogmapper
.. _`ogmapper/tags`: https://quay.io/repository/biocontainers/ogmapper?tab=tags


.. raw:: html

    <script>
        var package = "ogmapper";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ogmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ogmapper/README.html