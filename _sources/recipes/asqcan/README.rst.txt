:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asqcan'
.. highlight: bash

asqcan
======

.. conda:recipe:: asqcan
   :replaces_section_title:
   :noindex:

   A combined pipeline for bacterial genome assembly\, quality control and annotation

   :homepage: https://github.com/bogemad/asqcan
   :license: GPL / GPL-3.0-only
   :recipe: /`asqcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan/meta.yaml>`_

   


.. conda:package:: asqcan

   |downloads_asqcan| |docker_asqcan|

   :versions:
      
      

      ``0.4-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends blast: 
   :depends blobtools: 
   :depends bwa: 
   :depends diamond: 
   :depends fastp: 
   :depends parallel: 
   :depends prokka: 
   :depends python: 
   :depends quast: 
   :depends requests: 
   :depends samtools: 
   :depends spades: 
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

      mamba install asqcan

   and update with::

      mamba update asqcan

  To create a new environment, run::

      mamba create --name myenvname asqcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/asqcan:<tag>

   (see `asqcan/tags`_ for valid values for ``<tag>``)


.. |downloads_asqcan| image:: https://img.shields.io/conda/dn/bioconda/asqcan.svg?style=flat
   :target: https://anaconda.org/bioconda/asqcan
   :alt:   (downloads)
.. |docker_asqcan| image:: https://quay.io/repository/biocontainers/asqcan/status
   :target: https://quay.io/repository/biocontainers/asqcan
.. _`asqcan/tags`: https://quay.io/repository/biocontainers/asqcan?tab=tags


.. raw:: html

    <script>
        var package = "asqcan";
        var versions = ["0.4","0.2","0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asqcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asqcan/README.html