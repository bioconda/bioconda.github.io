:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kssd'
.. highlight: bash

kssd
====

.. conda:recipe:: kssd
   :replaces_section_title:
   :noindex:

   K\-mer substring space decomposition

   :homepage: https://github.com/yhg926/public_kssd
   :license: Apache-2.0
   :recipe: /`kssd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kssd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kssd/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02303-4`

   Kssd is a command\-line tool for large\-scale sequences sketching and resemblance\- and 
   containment\-analysis. It sketches sequences by k\-mer substring space sampling\/shuffling. 
   It handles DNA sequences of both fasta or fastq format\, whether gzipped or not. 



.. conda:package:: kssd

   |downloads_kssd| |docker_kssd|

   :versions:
      
      

      ``2.21-2``,  ``2.21-1``,  ``2.21-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install kssd

   and update with::

      mamba update kssd

  To create a new environment, run::

      mamba create --name myenvname kssd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kssd:<tag>

   (see `kssd/tags`_ for valid values for ``<tag>``)


.. |downloads_kssd| image:: https://img.shields.io/conda/dn/bioconda/kssd.svg?style=flat
   :target: https://anaconda.org/bioconda/kssd
   :alt:   (downloads)
.. |docker_kssd| image:: https://quay.io/repository/biocontainers/kssd/status
   :target: https://quay.io/repository/biocontainers/kssd
.. _`kssd/tags`: https://quay.io/repository/biocontainers/kssd?tab=tags


.. raw:: html

    <script>
        var package = "kssd";
        var versions = ["2.21","2.21","2.21","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kssd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kssd/README.html