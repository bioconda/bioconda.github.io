:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylonium'
.. highlight: bash

phylonium
=========

.. conda:recipe:: phylonium
   :replaces_section_title:
   :noindex:

   Fast estimation of evolutionary distances from similar genomes

   :homepage: https://github.com/evolbioinf/phylonium
   :license: GPL-3.0-or-later
   :recipe: /`phylonium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylonium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylonium/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz903`

   


.. conda:package:: phylonium

   |downloads_phylonium| |docker_phylonium|

   :versions:
      
      

      ``1.7-0``

      

   
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc: ``>=14``
   :depends libstdcxx: ``>=14``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phylonium

   and update with::

      mamba update phylonium

  To create a new environment, run::

      mamba create --name myenvname phylonium

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylonium:<tag>

   (see `phylonium/tags`_ for valid values for ``<tag>``)


.. |downloads_phylonium| image:: https://img.shields.io/conda/dn/bioconda/phylonium.svg?style=flat
   :target: https://anaconda.org/bioconda/phylonium
   :alt:   (downloads)
.. |docker_phylonium| image:: https://quay.io/repository/biocontainers/phylonium/status
   :target: https://quay.io/repository/biocontainers/phylonium
.. _`phylonium/tags`: https://quay.io/repository/biocontainers/phylonium?tab=tags


.. raw:: html

    <script>
        var package = "phylonium";
        var versions = ["1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylonium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylonium/README.html