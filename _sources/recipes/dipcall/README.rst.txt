:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dipcall'
.. highlight: bash

dipcall
=======

.. conda:recipe:: dipcall
   :replaces_section_title:
   :noindex:

   Dipcall is a reference\-based variant calling pipeline for a pair of phased haplotype assemblies.

   :homepage: https://github.com/lh3/dipcall
   :license: MIT
   :recipe: /`dipcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipcall/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-018-0054-7`

   Dipcall is a reference\-based variant calling pipeline for a pair of phased haplotype assemblies. It was originally developed for constructing the syndip benchmark dataset and has been applied to other phased assemblies\, too. Dipcall can call small variants and long INDELs as long as they are contained in minimap2 alignment.



.. conda:package:: dipcall

   |downloads_dipcall| |docker_dipcall|

   :versions:
      
      

      ``0.3-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends bedtk: 
   :depends htsbox: 
   :depends k8: 
   :depends make: 
   :depends minimap2: 
   :depends perl: ``*``
   :depends samtools: 
   :depends unimap: 
   :depends winnowmap: 
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

      mamba install dipcall

   and update with::

      mamba update dipcall

  To create a new environment, run::

      mamba create --name myenvname dipcall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dipcall:<tag>

   (see `dipcall/tags`_ for valid values for ``<tag>``)


.. |downloads_dipcall| image:: https://img.shields.io/conda/dn/bioconda/dipcall.svg?style=flat
   :target: https://anaconda.org/bioconda/dipcall
   :alt:   (downloads)
.. |docker_dipcall| image:: https://quay.io/repository/biocontainers/dipcall/status
   :target: https://quay.io/repository/biocontainers/dipcall
.. _`dipcall/tags`: https://quay.io/repository/biocontainers/dipcall?tab=tags


.. raw:: html

    <script>
        var package = "dipcall";
        var versions = ["0.3","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dipcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dipcall/README.html