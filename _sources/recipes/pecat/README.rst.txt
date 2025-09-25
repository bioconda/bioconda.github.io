:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pecat'
.. highlight: bash

pecat
=====

.. conda:recipe:: pecat
   :replaces_section_title:
   :noindex:

   A phased error correction and assembly tool.

   :homepage: https://github.com/lemene/PECAT
   :license: BSD / BSD-2-Clause
   :recipe: /`pecat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pecat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pecat/meta.yaml>`_
   :links: biotools: :biotools:`pecat`, doi: :doi:`10.1038/s41467-024-47349-7`

   


.. conda:package:: pecat

   |downloads_pecat| |docker_pecat|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: ``>=2.17``
   :depends perl: ``>=5.26.2``
   :depends python: ``>=3.6``
   :depends racon: ``>=1.4.3``
   :depends samtools: ``>=1.17``
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

      mamba install pecat

   and update with::

      mamba update pecat

  To create a new environment, run::

      mamba create --name myenvname pecat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pecat:<tag>

   (see `pecat/tags`_ for valid values for ``<tag>``)


.. |downloads_pecat| image:: https://img.shields.io/conda/dn/bioconda/pecat.svg?style=flat
   :target: https://anaconda.org/bioconda/pecat
   :alt:   (downloads)
.. |docker_pecat| image:: https://quay.io/repository/biocontainers/pecat/status
   :target: https://quay.io/repository/biocontainers/pecat
.. _`pecat/tags`: https://quay.io/repository/biocontainers/pecat?tab=tags


.. raw:: html

    <script>
        var package = "pecat";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pecat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pecat/README.html