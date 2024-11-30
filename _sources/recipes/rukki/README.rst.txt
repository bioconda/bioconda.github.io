:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rukki'
.. highlight: bash

rukki
=====

.. conda:recipe:: rukki
   :replaces_section_title:
   :noindex:

   Extracting paths from assembly graphs.

   :homepage: https://github.com/marbl/rukki
   :documentation: https://github.com/marbl/rukki/blob/v0.3.0/README.md
   
   :license: Public Domain
   :recipe: /`rukki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rukki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rukki/meta.yaml>`_

   


.. conda:package:: rukki

   |downloads_rukki| |docker_rukki|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install rukki

   and update with::

      mamba update rukki

  To create a new environment, run::

      mamba create --name myenvname rukki

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rukki:<tag>

   (see `rukki/tags`_ for valid values for ``<tag>``)


.. |downloads_rukki| image:: https://img.shields.io/conda/dn/bioconda/rukki.svg?style=flat
   :target: https://anaconda.org/bioconda/rukki
   :alt:   (downloads)
.. |docker_rukki| image:: https://quay.io/repository/biocontainers/rukki/status
   :target: https://quay.io/repository/biocontainers/rukki
.. _`rukki/tags`: https://quay.io/repository/biocontainers/rukki?tab=tags


.. raw:: html

    <script>
        var package = "rukki";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rukki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rukki/README.html