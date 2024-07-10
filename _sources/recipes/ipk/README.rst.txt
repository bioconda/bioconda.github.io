:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipk'
.. highlight: bash

ipk
===

.. conda:recipe:: ipk
   :replaces_section_title:
   :noindex:

   IPK is a tool for computing phylo\-k\-mers for a fixed phylogeny.

   :homepage: https://github.com/phylo42/ipk
   :license: MIT / MIT
   :recipe: /`ipk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipk/meta.yaml>`_

   IPK is a tool for computing phylo\-k\-mers for a fixed phylogeny. Please cite\: doi.org\/10.1093\/bioinformatics\/btad692


.. conda:package:: ipk

   |downloads_ipk| |docker_ipk|

   :versions:
      
      

      ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends boost-cpp: ``1.85.*``
   :depends click: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends phyml: 
   :depends python: 
   :depends raxml-ng: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ipk

   and update with::

      mamba update ipk

  To create a new environment, run::

      mamba create --name myenvname ipk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ipk:<tag>

   (see `ipk/tags`_ for valid values for ``<tag>``)


.. |downloads_ipk| image:: https://img.shields.io/conda/dn/bioconda/ipk.svg?style=flat
   :target: https://anaconda.org/bioconda/ipk
   :alt:   (downloads)
.. |docker_ipk| image:: https://quay.io/repository/biocontainers/ipk/status
   :target: https://quay.io/repository/biocontainers/ipk
.. _`ipk/tags`: https://quay.io/repository/biocontainers/ipk?tab=tags


.. raw:: html

    <script>
        var package = "ipk";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipk/README.html