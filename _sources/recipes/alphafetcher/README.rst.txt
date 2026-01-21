:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphafetcher'
.. highlight: bash

alphafetcher
============

.. conda:recipe:: alphafetcher
   :replaces_section_title:
   :noindex:

   Interface with the AlphaFold Protein Structure Database.

   :homepage: https://bitbucket.org/bio2byte/alphafetcher/
   :license: GPL-3.0-or-later
   :recipe: /`alphafetcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafetcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafetcher/meta.yaml>`_

   


.. conda:package:: alphafetcher

   |downloads_alphafetcher| |docker_alphafetcher|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends python: ``>=3.6,<3.13``
   :depends requests: 
   :depends tqdm: 
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

      mamba install alphafetcher

   and update with::

      mamba update alphafetcher

  To create a new environment, run::

      mamba create --name myenvname alphafetcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alphafetcher:<tag>

   (see `alphafetcher/tags`_ for valid values for ``<tag>``)


.. |downloads_alphafetcher| image:: https://img.shields.io/conda/dn/bioconda/alphafetcher.svg?style=flat
   :target: https://anaconda.org/bioconda/alphafetcher
   :alt:   (downloads)
.. |docker_alphafetcher| image:: https://quay.io/repository/biocontainers/alphafetcher/status
   :target: https://quay.io/repository/biocontainers/alphafetcher
.. _`alphafetcher/tags`: https://quay.io/repository/biocontainers/alphafetcher?tab=tags


.. raw:: html

    <script>
        var package = "alphafetcher";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphafetcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphafetcher/README.html