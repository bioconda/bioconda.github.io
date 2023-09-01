:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saffrontree'
.. highlight: bash

saffrontree
===========

.. conda:recipe:: saffrontree
   :replaces_section_title:
   :noindex:

   SaffronTree\: Reference free rapid phylogenetic tree construction from raw read data

   :homepage: https://github.com/sanger-pathogens/saffrontree
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`saffrontree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saffrontree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saffrontree/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.00243`

   


.. conda:package:: saffrontree

   |downloads_saffrontree| |docker_saffrontree|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends biopython: 
   :depends dendropy: ``>=4.1.0``
   :depends kmc: ``>=2.3.0``
   :depends libgcc: 
   :depends pyfastaq: ``>=3.12.0``
   :depends python: ``3.5*``
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

      mamba install saffrontree

   and update with::

      mamba update saffrontree

  To create a new environment, run::

      mamba create --name myenvname saffrontree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/saffrontree:<tag>

   (see `saffrontree/tags`_ for valid values for ``<tag>``)


.. |downloads_saffrontree| image:: https://img.shields.io/conda/dn/bioconda/saffrontree.svg?style=flat
   :target: https://anaconda.org/bioconda/saffrontree
   :alt:   (downloads)
.. |docker_saffrontree| image:: https://quay.io/repository/biocontainers/saffrontree/status
   :target: https://quay.io/repository/biocontainers/saffrontree
.. _`saffrontree/tags`: https://quay.io/repository/biocontainers/saffrontree?tab=tags


.. raw:: html

    <script>
        var package = "saffrontree";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saffrontree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saffrontree/README.html