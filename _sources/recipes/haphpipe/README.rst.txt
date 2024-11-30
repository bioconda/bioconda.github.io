:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haphpipe'
.. highlight: bash

haphpipe
========

.. conda:recipe:: haphpipe
   :replaces_section_title:
   :noindex:

   HAplotype and PHylodynamics pipeline for viral assembly\, population genetics\, and phylodynamics.

   :homepage: https://github.com/gwcbi/haphpipe
   :documentation: https://gwcbi.github.io/haphpipe_docs/
   
   :license: GPL License
   :recipe: /`haphpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe/meta.yaml>`_

   


.. conda:package:: haphpipe

   |downloads_haphpipe| |docker_haphpipe|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends flash: 
   :depends freebayes: 
   :depends future: 
   :depends gatk: ``3.8.*``
   :depends gsutil: 
   :depends mafft: 
   :depends modeltest-ng: 
   :depends mummer: 
   :depends picard: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends raxml-ng: 
   :depends samtools: ``>=1.9``
   :depends seqtk: 
   :depends sierrapy: 
   :depends spades: 
   :depends sra-tools: 
   :depends trimmomatic: 
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

      mamba install haphpipe

   and update with::

      mamba update haphpipe

  To create a new environment, run::

      mamba create --name myenvname haphpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haphpipe:<tag>

   (see `haphpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_haphpipe| image:: https://img.shields.io/conda/dn/bioconda/haphpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/haphpipe
   :alt:   (downloads)
.. |docker_haphpipe| image:: https://quay.io/repository/biocontainers/haphpipe/status
   :target: https://quay.io/repository/biocontainers/haphpipe
.. _`haphpipe/tags`: https://quay.io/repository/biocontainers/haphpipe?tab=tags


.. raw:: html

    <script>
        var package = "haphpipe";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haphpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haphpipe/README.html