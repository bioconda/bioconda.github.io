:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'folddisco'
.. highlight: bash

folddisco
=========

.. conda:recipe:: folddisco
   :replaces_section_title:
   :noindex:

   Folddisco\: fast indexing and search of discontinuous motifs in protein structures.

   :homepage: https://github.com/steineggerlab/folddisco
   :documentation: https://github.com/steineggerlab/folddisco/blob/1-7514114/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`folddisco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/folddisco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/folddisco/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.07.06.663357`

   


.. conda:package:: folddisco

   |downloads_folddisco| |docker_folddisco|

   :versions:
      
      

      ``1.7514114-1``,  ``1.7514114-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install folddisco

   and update with::

      mamba update folddisco

  To create a new environment, run::

      mamba create --name myenvname folddisco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/folddisco:<tag>

   (see `folddisco/tags`_ for valid values for ``<tag>``)


.. |downloads_folddisco| image:: https://img.shields.io/conda/dn/bioconda/folddisco.svg?style=flat
   :target: https://anaconda.org/bioconda/folddisco
   :alt:   (downloads)
.. |docker_folddisco| image:: https://quay.io/repository/biocontainers/folddisco/status
   :target: https://quay.io/repository/biocontainers/folddisco
.. _`folddisco/tags`: https://quay.io/repository/biocontainers/folddisco?tab=tags


.. raw:: html

    <script>
        var package = "folddisco";
        var versions = ["1.7514114","1.7514114"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/folddisco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/folddisco/README.html