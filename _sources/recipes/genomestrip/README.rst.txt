:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomestrip'
.. highlight: bash

genomestrip
===========

.. conda:recipe:: genomestrip
   :replaces_section_title:
   :noindex:

   Genome STRiP \(Genome STRucture In Populations\) is a suite of tools for discovery and genotyping of structural variation using whole\-genome sequencing data

   :homepage: http://software.broadinstitute.org/software/genomestrip/
   :license: custom
   :recipe: /`genomestrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomestrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomestrip/meta.yaml>`_

   


.. conda:package:: genomestrip

   |downloads_genomestrip| |docker_genomestrip|

   :versions:
      
      

      ``2.00.1833-4``,  ``2.00.1833-3``,  ``2.00.1833-2``,  ``2.00.1833-1``,  ``2.00.1833-0``

      

   
   :depends htslib: 
   :depends openjdk: ``>=8``
   :depends r-base: ``>=3.4``
   :depends samtools: 
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

      mamba install genomestrip

   and update with::

      mamba update genomestrip

  To create a new environment, run::

      mamba create --name myenvname genomestrip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomestrip:<tag>

   (see `genomestrip/tags`_ for valid values for ``<tag>``)


.. |downloads_genomestrip| image:: https://img.shields.io/conda/dn/bioconda/genomestrip.svg?style=flat
   :target: https://anaconda.org/bioconda/genomestrip
   :alt:   (downloads)
.. |docker_genomestrip| image:: https://quay.io/repository/biocontainers/genomestrip/status
   :target: https://quay.io/repository/biocontainers/genomestrip
.. _`genomestrip/tags`: https://quay.io/repository/biocontainers/genomestrip?tab=tags


.. raw:: html

    <script>
        var package = "genomestrip";
        var versions = ["2.00.1833","2.00.1833","2.00.1833","2.00.1833","2.00.1833"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomestrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomestrip/README.html