:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssuissero'
.. highlight: bash

ssuissero
=========

.. conda:recipe:: ssuissero
   :replaces_section_title:
   :noindex:

   Rapid Streptococcus suis serotyping pipeline for Nanopore Data

   :homepage: https://github.com/jimmyliu1326/SsuisSero
   :license: MIT
   :recipe: /`ssuissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero/meta.yaml>`_

   


.. conda:package:: ssuissero

   |downloads_ssuissero| |docker_ssuissero|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast: 
   :depends flye: 
   :depends freebayes: 
   :depends medaka: ``1.0.1``
   :depends minipolish: 
   :depends samtools: 
   :depends vcflib: 
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

      mamba install ssuissero

   and update with::

      mamba update ssuissero

  To create a new environment, run::

      mamba create --name myenvname ssuissero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssuissero:<tag>

   (see `ssuissero/tags`_ for valid values for ``<tag>``)


.. |downloads_ssuissero| image:: https://img.shields.io/conda/dn/bioconda/ssuissero.svg?style=flat
   :target: https://anaconda.org/bioconda/ssuissero
   :alt:   (downloads)
.. |docker_ssuissero| image:: https://quay.io/repository/biocontainers/ssuissero/status
   :target: https://quay.io/repository/biocontainers/ssuissero
.. _`ssuissero/tags`: https://quay.io/repository/biocontainers/ssuissero?tab=tags


.. raw:: html

    <script>
        var package = "ssuissero";
        var versions = ["1.0.1","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssuissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssuissero/README.html