:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pash'
.. highlight: bash

pash
====

.. conda:recipe:: pash
   :replaces_section_title:
   :noindex:

   A versatile software package for read mapping and integrative analysis of genomic and epigenomic variation using massively parallel DNA sequencing

   :homepage: http://www.bioinformatics.bbsrc.ac.uk/projects/bismark/
   :license: Unknown
   :recipe: /`pash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pash/meta.yaml>`_
   :links: biotools: :biotools:`pash`

   


.. conda:package:: pash

   |downloads_pash| |docker_pash|

   :versions:
      
      

      ``3.0.6.2-0``

      

   
   :depends glib: 
   :depends libgcc: 
   :depends ruby: 
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

      mamba install pash

   and update with::

      mamba update pash

  To create a new environment, run::

      mamba create --name myenvname pash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pash:<tag>

   (see `pash/tags`_ for valid values for ``<tag>``)


.. |downloads_pash| image:: https://img.shields.io/conda/dn/bioconda/pash.svg?style=flat
   :target: https://anaconda.org/bioconda/pash
   :alt:   (downloads)
.. |docker_pash| image:: https://quay.io/repository/biocontainers/pash/status
   :target: https://quay.io/repository/biocontainers/pash
.. _`pash/tags`: https://quay.io/repository/biocontainers/pash?tab=tags


.. raw:: html

    <script>
        var package = "pash";
        var versions = ["3.0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pash/README.html