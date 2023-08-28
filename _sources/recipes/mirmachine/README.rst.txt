:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirmachine'
.. highlight: bash

mirmachine
==========

.. conda:recipe:: mirmachine
   :replaces_section_title:
   :noindex:

   A command line to tool detect miRNA homologs in genome sequences.

   :homepage: https://github.com/sinanugur/MirMachine
   :documentation: https://github.com/sinanugur/MirMachine/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`mirmachine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirmachine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirmachine/meta.yaml>`_

   


.. conda:package:: mirmachine

   |downloads_mirmachine| |docker_mirmachine|

   :versions:
      
      

      ``0.2.12-0``,  ``0.2.11.2022-0``,  ``0.2.11.2-0``,  ``0.2.11.1-0``,  ``0.2.11-1``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.1.31-0``,  ``0.1.2-0``

      

   
   :depends appdirs: ``>=1.4.3``
   :depends attrs: ``>=19.3.0``
   :depends bedtools: ``>=2.29.2``
   :depends biopython: ``>=1.76``
   :depends configargparse: ``>=1.1``
   :depends coreutils: ``>=8.31``
   :depends datrie: 
   :depends decorator: ``>=4.4.2``
   :depends docopt: ``>=0.6.2``
   :depends docutils: ``>=0.16``
   :depends gawk: ``>=5.0.1``
   :depends gitdb: ``>=4.0.2``
   :depends gitpython: ``>=3.1.0``
   :depends importlib-metadata: ``>=1.5.0``
   :depends infernal: ``1.1.2``
   :depends jsonschema: ``>=3.2.0``
   :depends moreutils: ``>=0.5.7``
   :depends nbformat: ``>=5.0.4``
   :depends numpy: ``>=1.18``
   :depends psutil: ``>=5.7.0``
   :depends pyrsistent: ``>=0.15.7``
   :depends python: 
   :depends python-newick: ``>=1.0.0``
   :depends pyyaml: 
   :depends ratelimiter: 
   :depends rich: ``>=10.16.1``
   :depends samtools: ``>=1.6``
   :depends smmap: ``>=3.0.1``
   :depends snakemake-minimal: ``>=5.11.1``
   :depends toposort: ``>=1.5``
   :depends traitlets: ``>=4.3.3``
   :depends wrapt: ``>=1.12.1``
   :depends zipp: ``>=3.1.0``
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

      mamba install mirmachine

   and update with::

      mamba update mirmachine

  To create a new environment, run::

      mamba create --name myenvname mirmachine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirmachine:<tag>

   (see `mirmachine/tags`_ for valid values for ``<tag>``)


.. |downloads_mirmachine| image:: https://img.shields.io/conda/dn/bioconda/mirmachine.svg?style=flat
   :target: https://anaconda.org/bioconda/mirmachine
   :alt:   (downloads)
.. |docker_mirmachine| image:: https://quay.io/repository/biocontainers/mirmachine/status
   :target: https://quay.io/repository/biocontainers/mirmachine
.. _`mirmachine/tags`: https://quay.io/repository/biocontainers/mirmachine?tab=tags


.. raw:: html

    <script>
        var package = "mirmachine";
        var versions = ["0.2.12","0.2.11.2022","0.2.11.2","0.2.11.1","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirmachine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirmachine/README.html