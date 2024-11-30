:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngseqbasic'
.. highlight: bash

ngseqbasic
==========

.. conda:recipe:: ngseqbasic
   :replaces_section_title:
   :noindex:

   Basic ChIP\/DNaseI\/ATAC analysis \- from FASTQ to visualisation of tracks\, in one command.

   :homepage: http://userweb.molbiol.ox.ac.uk/public/telenius/NGseqBasicManual/external/instructionsBioconda.html
   :license: GPL-3.0
   :recipe: /`ngseqbasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic/meta.yaml>`_

   


.. conda:package:: ngseqbasic

   |downloads_ngseqbasic| |docker_ngseqbasic|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends bedtools: ``==2.17.0``
   :depends bowtie: ``==1.0.0``
   :depends bowtie2: ``==2.3.0``
   :depends flash: ``==1.2.11``
   :depends perl: ``5.22.0.1``
   :depends samtools: ``==0.1.19``
   :depends trim-galore: ``==0.4.1``
   :depends ucsc-bedclip: ``==332``
   :depends ucsc-bedgraphpack: ``==332``
   :depends ucsc-bedgraphtobigwig: ``==332``
   :depends ucsc-bedtobigbed: ``==332``
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

      mamba install ngseqbasic

   and update with::

      mamba update ngseqbasic

  To create a new environment, run::

      mamba create --name myenvname ngseqbasic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngseqbasic:<tag>

   (see `ngseqbasic/tags`_ for valid values for ``<tag>``)


.. |downloads_ngseqbasic| image:: https://img.shields.io/conda/dn/bioconda/ngseqbasic.svg?style=flat
   :target: https://anaconda.org/bioconda/ngseqbasic
   :alt:   (downloads)
.. |docker_ngseqbasic| image:: https://quay.io/repository/biocontainers/ngseqbasic/status
   :target: https://quay.io/repository/biocontainers/ngseqbasic
.. _`ngseqbasic/tags`: https://quay.io/repository/biocontainers/ngseqbasic?tab=tags


.. raw:: html

    <script>
        var package = "ngseqbasic";
        var versions = ["2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngseqbasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngseqbasic/README.html