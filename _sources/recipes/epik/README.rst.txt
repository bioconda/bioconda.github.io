:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epik'
.. highlight: bash

epik
====

.. conda:recipe:: epik
   :replaces_section_title:
   :noindex:

   EPIK is a tool for fast alignement\-free phylogenetic placements.

   :homepage: https://github.com/phylo42/epik
   :license: MIT / MIT
   :recipe: /`epik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epik/meta.yaml>`_

   EPIK uses pre\-computed phylo\-k\-mers indexes \(see package IPK\) to rapidly place large amounts of sequences on a fixed phylogenetic tree. Please cite\: doi.org\/10.1093\/bioinformatics\/btad692


.. conda:package:: epik

   |downloads_epik| |docker_epik|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends boost-cpp: ``1.85.*``
   :depends click: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install epik

   and update with::

      mamba update epik

  To create a new environment, run::

      mamba create --name myenvname epik

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epik:<tag>

   (see `epik/tags`_ for valid values for ``<tag>``)


.. |downloads_epik| image:: https://img.shields.io/conda/dn/bioconda/epik.svg?style=flat
   :target: https://anaconda.org/bioconda/epik
   :alt:   (downloads)
.. |docker_epik| image:: https://quay.io/repository/biocontainers/epik/status
   :target: https://quay.io/repository/biocontainers/epik
.. _`epik/tags`: https://quay.io/repository/biocontainers/epik?tab=tags


.. raw:: html

    <script>
        var package = "epik";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epik/README.html