:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cath-tools'
.. highlight: bash

cath-tools
==========

.. conda:recipe:: cath-tools
   :replaces_section_title:
   :noindex:

   Protein structure comparison tools such as SSAP\, as used by the Orengo Group in curating CATH.

   :homepage: https://github.com/UCLOrengoGroup/cath-tools
   :license: GPLv3
   :recipe: /`cath-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cath-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cath-tools/meta.yaml>`_

   


.. conda:package:: cath-tools

   |downloads_cath-tools| |docker_cath-tools|

   :versions:
      
      

      ``0.16.5-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
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

      mamba install cath-tools

   and update with::

      mamba update cath-tools

  To create a new environment, run::

      mamba create --name myenvname cath-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cath-tools:<tag>

   (see `cath-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_cath-tools| image:: https://img.shields.io/conda/dn/bioconda/cath-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cath-tools
   :alt:   (downloads)
.. |docker_cath-tools| image:: https://quay.io/repository/biocontainers/cath-tools/status
   :target: https://quay.io/repository/biocontainers/cath-tools
.. _`cath-tools/tags`: https://quay.io/repository/biocontainers/cath-tools?tab=tags


.. raw:: html

    <script>
        var package = "cath-tools";
        var versions = ["0.16.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cath-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cath-tools/README.html