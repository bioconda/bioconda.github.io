:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fargene'
.. highlight: bash

fargene
=======

.. conda:recipe:: fargene
   :replaces_section_title:
   :noindex:

   Fragmented Antibiotic Resistance Gene iENntifiEr takes either fragmented metagenomic data or longer sequences as input and predicts and delivers full\-length antiobiotic resistance genes as output

   :homepage: https://github.com/fannyhb/fargene
   :license: MIT
   :recipe: /`fargene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene/meta.yaml>`_

   


.. conda:package:: fargene

   |downloads_fargene| |docker_fargene|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends biopython: ``>=1.68``
   :depends clustalo: 
   :depends emboss: 
   :depends hmmer: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pip: 
   :depends prodigal: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends pyyaml: 
   :depends seqtk: 
   :depends spades: 
   :depends trim-galore: 
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

      mamba install fargene

   and update with::

      mamba update fargene

  To create a new environment, run::

      mamba create --name myenvname fargene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fargene:<tag>

   (see `fargene/tags`_ for valid values for ``<tag>``)


.. |downloads_fargene| image:: https://img.shields.io/conda/dn/bioconda/fargene.svg?style=flat
   :target: https://anaconda.org/bioconda/fargene
   :alt:   (downloads)
.. |docker_fargene| image:: https://quay.io/repository/biocontainers/fargene/status
   :target: https://quay.io/repository/biocontainers/fargene
.. _`fargene/tags`: https://quay.io/repository/biocontainers/fargene?tab=tags


.. raw:: html

    <script>
        var package = "fargene";
        var versions = ["0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fargene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fargene/README.html