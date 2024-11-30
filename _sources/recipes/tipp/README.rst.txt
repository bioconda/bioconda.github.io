:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tipp'
.. highlight: bash

tipp
====

.. conda:recipe:: tipp
   :replaces_section_title:
   :noindex:

   TIPP\: A User\-Friendly Tool for De Novo Assembly of Organellar Genomes with HiFi Data

   :homepage: https://github.com/Wenfei-Xian/TIPP
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tipp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tipp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tipp/meta.yaml>`_

   


.. conda:package:: tipp

   |downloads_tipp| |docker_tipp|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-biostrings: ``2.68.1.*``
   :depends flye: 
   :depends graphaligner: ``1.0.17.*``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libxcrypt: 
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mcl: ``22.282.*``
   :depends minimap2: ``2.26.*``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends r-ggplot2: ``3.4.4.*``
   :depends r-igraph: ``1.5.1.*``
   :depends r-pheatmap: ``1.0.12.*``
   :depends r-stringdist: ``0.9.10.*``
   :depends spoa: ``4.1.4.*``
   :depends tiara: 
   :depends trf: ``4.09.1.*``
   :depends zlib: 
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

      mamba install tipp

   and update with::

      mamba update tipp

  To create a new environment, run::

      mamba create --name myenvname tipp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tipp:<tag>

   (see `tipp/tags`_ for valid values for ``<tag>``)


.. |downloads_tipp| image:: https://img.shields.io/conda/dn/bioconda/tipp.svg?style=flat
   :target: https://anaconda.org/bioconda/tipp
   :alt:   (downloads)
.. |docker_tipp| image:: https://quay.io/repository/biocontainers/tipp/status
   :target: https://quay.io/repository/biocontainers/tipp
.. _`tipp/tags`: https://quay.io/repository/biocontainers/tipp?tab=tags


.. raw:: html

    <script>
        var package = "tipp";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tipp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tipp/README.html