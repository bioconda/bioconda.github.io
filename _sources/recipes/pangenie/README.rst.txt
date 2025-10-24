:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangenie'
.. highlight: bash

pangenie
========

.. conda:recipe:: pangenie
   :replaces_section_title:
   :noindex:

   Genotyping toolkit based on k\-mer counting and haplotype panels.

   :homepage: https://github.com/eblerjana/pangenie
   :documentation: https://github.com/eblerjana/pangenie/wiki
   
   :license: MIT
   :recipe: /`pangenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangenie/meta.yaml>`_

   


.. conda:package:: pangenie

   |downloads_pangenie| |docker_pangenie|

   :versions:
      
      

      ``4.2.1-0``

      

   
   :depends cereal: 
   :depends kmer-jellyfish: ``>=2.3.1,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install pangenie

   and update with::

      mamba update pangenie

  To create a new environment, run::

      mamba create --name myenvname pangenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangenie:<tag>

   (see `pangenie/tags`_ for valid values for ``<tag>``)


.. |downloads_pangenie| image:: https://img.shields.io/conda/dn/bioconda/pangenie.svg?style=flat
   :target: https://anaconda.org/bioconda/pangenie
   :alt:   (downloads)
.. |docker_pangenie| image:: https://quay.io/repository/biocontainers/pangenie/status
   :target: https://quay.io/repository/biocontainers/pangenie
.. _`pangenie/tags`: https://quay.io/repository/biocontainers/pangenie?tab=tags


.. raw:: html

    <script>
        var package = "pangenie";
        var versions = ["4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangenie/README.html