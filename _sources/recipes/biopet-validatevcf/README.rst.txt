:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validatevcf'
.. highlight: bash

biopet-validatevcf
==================

.. conda:recipe:: biopet-validatevcf
   :replaces_section_title:
   :noindex:

   ValidateVcf validates a VCF file against a reference genomes.

   :homepage: https://github.com/biopet/validatevcf
   :license: MIT
   :recipe: /`biopet-validatevcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf/meta.yaml>`_

   ValidateVcf validates a VCF file against a reference genomes. It checks if the positions
   present in the VCF are also present on the reference genoome.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatevcf


.. conda:package:: biopet-validatevcf

   |downloads_biopet-validatevcf| |docker_biopet-validatevcf|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biopet-validatevcf

   and update with::

      mamba update biopet-validatevcf

  To create a new environment, run::

      mamba create --name myenvname biopet-validatevcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-validatevcf:<tag>

   (see `biopet-validatevcf/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-validatevcf| image:: https://img.shields.io/conda/dn/bioconda/biopet-validatevcf.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validatevcf
   :alt:   (downloads)
.. |docker_biopet-validatevcf| image:: https://quay.io/repository/biocontainers/biopet-validatevcf/status
   :target: https://quay.io/repository/biocontainers/biopet-validatevcf
.. _`biopet-validatevcf/tags`: https://quay.io/repository/biocontainers/biopet-validatevcf?tab=tags


.. raw:: html

    <script>
        var package = "biopet-validatevcf";
        var versions = ["0.1","0.1"];
    </script>





Notes
-----
biopet\-validatevcf is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatevcf\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatevcf \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validatevcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validatevcf/README.html