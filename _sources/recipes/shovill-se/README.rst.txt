:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shovill-se'
.. highlight: bash

shovill-se
==========

.. conda:recipe:: shovill-se
   :replaces_section_title:
   :noindex:

   An fork of Shovill \(microbial assembly pipeline for Illumina paired\-end reads\) that supports single\-end reads.

   :homepage: https://github.com/rpetit3/shovill
   :license: GPL2
   :recipe: /`shovill-se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill-se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill-se/meta.yaml>`_

   


.. conda:package:: shovill-se

   |downloads_shovill-se| |docker_shovill-se|

   :versions:
      
      

      ``1.1.0se-2``,  ``1.1.0se-1``,  ``1.1.0se-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends flash: ``>=1.2``
   :depends kmc: ``>=3.1``
   :depends lighter: ``>=1.1``
   :depends megahit: ``>=1.2.7``
   :depends perl: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends pigz: 
   :depends pilon: ``>=1.22``
   :depends samclip: ``>=0.4``
   :depends samtools: ``>=1.10``
   :depends seqtk: ``>=1.3``
   :depends skesa: ``>=2.2``
   :depends spades: ``>=3.14``
   :depends trimmomatic: ``>=0.36``
   :depends velvet: ``>=1.2.10``
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

      mamba install shovill-se

   and update with::

      mamba update shovill-se

  To create a new environment, run::

      mamba create --name myenvname shovill-se

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shovill-se:<tag>

   (see `shovill-se/tags`_ for valid values for ``<tag>``)


.. |downloads_shovill-se| image:: https://img.shields.io/conda/dn/bioconda/shovill-se.svg?style=flat
   :target: https://anaconda.org/bioconda/shovill-se
   :alt:   (downloads)
.. |docker_shovill-se| image:: https://quay.io/repository/biocontainers/shovill-se/status
   :target: https://quay.io/repository/biocontainers/shovill-se
.. _`shovill-se/tags`: https://quay.io/repository/biocontainers/shovill-se?tab=tags


.. raw:: html

    <script>
        var package = "shovill-se";
        var versions = ["1.1.0se","1.1.0se","1.1.0se"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill-se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill-se/README.html