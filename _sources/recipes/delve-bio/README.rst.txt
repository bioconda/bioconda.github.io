:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delve-bio'
.. highlight: bash

delve-bio
=========

.. conda:recipe:: delve-bio
   :replaces_section_title:
   :noindex:

   A variant caller for mixed infections

   :homepage: https://github.com/berndbohmeier/delve
   :license: MIT
   :recipe: /`delve-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delve-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delve-bio/meta.yaml>`_

   


.. conda:package:: delve-bio

   |downloads_delve-bio| |docker_delve-bio|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

      mamba install delve-bio

   and update with::

      mamba update delve-bio

  To create a new environment, run::

      mamba create --name myenvname delve-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/delve-bio:<tag>

   (see `delve-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_delve-bio| image:: https://img.shields.io/conda/dn/bioconda/delve-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/delve-bio
   :alt:   (downloads)
.. |docker_delve-bio| image:: https://quay.io/repository/biocontainers/delve-bio/status
   :target: https://quay.io/repository/biocontainers/delve-bio
.. _`delve-bio/tags`: https://quay.io/repository/biocontainers/delve-bio?tab=tags


.. raw:: html

    <script>
        var package = "delve-bio";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delve-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delve-bio/README.html