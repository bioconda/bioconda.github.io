:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'devider'
.. highlight: bash

devider
=======

.. conda:recipe:: devider
   :replaces_section_title:
   :noindex:

   Haplotyping small sequences from heterogeneous long\-read sequencing samples with a SNP\-encoded positional de Bruijn graphs.

   :homepage: https://github.com/bluenote-1577/devider
   :license: MIT
   :recipe: /`devider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/devider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/devider/meta.yaml>`_

   


.. conda:package:: devider

   |downloads_devider| |docker_devider|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends lofreq: ``>=2.1.5``
   :depends minimap2: 
   :depends pysam: ``>=0.16``
   :depends python: 
   :depends samtools: 
   :depends tabix: 
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

      mamba install devider

   and update with::

      mamba update devider

  To create a new environment, run::

      mamba create --name myenvname devider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/devider:<tag>

   (see `devider/tags`_ for valid values for ``<tag>``)


.. |downloads_devider| image:: https://img.shields.io/conda/dn/bioconda/devider.svg?style=flat
   :target: https://anaconda.org/bioconda/devider
   :alt:   (downloads)
.. |docker_devider| image:: https://quay.io/repository/biocontainers/devider/status
   :target: https://quay.io/repository/biocontainers/devider
.. _`devider/tags`: https://quay.io/repository/biocontainers/devider?tab=tags


.. raw:: html

    <script>
        var package = "devider";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/devider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/devider/README.html