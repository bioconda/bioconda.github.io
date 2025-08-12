:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylip'
.. highlight: bash

phylip
======

.. conda:recipe:: phylip
   :replaces_section_title:
   :noindex:

   Package of programs for inferring phylogenies.

   :homepage: https://phylipweb.github.io/phylip
   :license: BSD
   :recipe: /`phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip/meta.yaml>`_
   :links: biotools: :biotools:`PHYLIP`

   


.. conda:package:: phylip

   |downloads_phylip| |docker_phylip|

   :versions:
      
      

      ``3.697-3``,  ``3.697-2``,  ``3.697-1``,  ``3.697-0``,  ``3.696-3``,  ``3.696-2``,  ``3.696-1``,  ``3.696-0``

      

   
   :depends libgcc: ``>=13``
   :depends openjdk: ``>=6``
   :depends python: 
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

      mamba install phylip

   and update with::

      mamba update phylip

  To create a new environment, run::

      mamba create --name myenvname phylip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylip:<tag>

   (see `phylip/tags`_ for valid values for ``<tag>``)


.. |downloads_phylip| image:: https://img.shields.io/conda/dn/bioconda/phylip.svg?style=flat
   :target: https://anaconda.org/bioconda/phylip
   :alt:   (downloads)
.. |docker_phylip| image:: https://quay.io/repository/biocontainers/phylip/status
   :target: https://quay.io/repository/biocontainers/phylip
.. _`phylip/tags`: https://quay.io/repository/biocontainers/phylip?tab=tags


.. raw:: html

    <script>
        var package = "phylip";
        var versions = ["3.697","3.697","3.697","3.697","3.696"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylip/README.html