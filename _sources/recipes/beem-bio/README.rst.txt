:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beem-bio'
.. highlight: bash

beem-bio
========

.. conda:recipe:: beem-bio
   :replaces_section_title:
   :noindex:

   Conversion of PDBx\/mmCIF files to best effort\/minimal PDB files.

   :homepage: https://github.com/kad-ecoli/BeEM
   :license: BSD / BSD-2-Clause
   :recipe: /`beem-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beem-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beem-bio/meta.yaml>`_
   :links: biotools: :biotools:`BeEM`, doi: :doi:`10.1186/s12859-023-05388-9`

   


.. conda:package:: beem-bio

   |downloads_beem-bio| |docker_beem-bio|

   :versions:
      
      

      ``1.0.1-0``

      

   
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

      mamba install beem-bio

   and update with::

      mamba update beem-bio

  To create a new environment, run::

      mamba create --name myenvname beem-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beem-bio:<tag>

   (see `beem-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_beem-bio| image:: https://img.shields.io/conda/dn/bioconda/beem-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/beem-bio
   :alt:   (downloads)
.. |docker_beem-bio| image:: https://quay.io/repository/biocontainers/beem-bio/status
   :target: https://quay.io/repository/biocontainers/beem-bio
.. _`beem-bio/tags`: https://quay.io/repository/biocontainers/beem-bio?tab=tags


.. raw:: html

    <script>
        var package = "beem-bio";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beem-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beem-bio/README.html