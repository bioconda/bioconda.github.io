:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-extractadaptersfastqc'
.. highlight: bash

biopet-extractadaptersfastqc
============================

.. conda:recipe:: biopet-extractadaptersfastqc
   :replaces_section_title:
   :noindex:

   ExtractAdaptersFastqc reads which adapter sequences where found from a FastQC raw report.

   :homepage: https://github.com/biopet/extractadaptersfastqc
   :license: MIT
   :recipe: /`biopet-extractadaptersfastqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-extractadaptersfastqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-extractadaptersfastqc/meta.yaml>`_

   ExtractAdaptersFastqc reads which adapter sequences where found from a FastQC raw report.
   These sequences can be used as input for a QC tool such as cutadapt.
   The sequences can be output in plain text format with a
   newline character as a separator between the sequences.
   Alternatively the sequences can be output in FASTA format.
   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/extractadaptersfastqc


.. conda:package:: biopet-extractadaptersfastqc

   |downloads_biopet-extractadaptersfastqc| |docker_biopet-extractadaptersfastqc|

   :versions:
      
      

      ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
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

      mamba install biopet-extractadaptersfastqc

   and update with::

      mamba update biopet-extractadaptersfastqc

  To create a new environment, run::

      mamba create --name myenvname biopet-extractadaptersfastqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-extractadaptersfastqc:<tag>

   (see `biopet-extractadaptersfastqc/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-extractadaptersfastqc| image:: https://img.shields.io/conda/dn/bioconda/biopet-extractadaptersfastqc.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-extractadaptersfastqc
   :alt:   (downloads)
.. |docker_biopet-extractadaptersfastqc| image:: https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc/status
   :target: https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc
.. _`biopet-extractadaptersfastqc/tags`: https://quay.io/repository/biocontainers/biopet-extractadaptersfastqc?tab=tags


.. raw:: html

    <script>
        var package = "biopet-extractadaptersfastqc";
        var versions = ["0.2","0.2","0.2","0.2","0.1"];
    </script>





Notes
-----
biopet\-extractadaptersfastqc is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-extractadaptersfastqc\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-extractadaptersfastqc \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-extractadaptersfastqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-extractadaptersfastqc/README.html