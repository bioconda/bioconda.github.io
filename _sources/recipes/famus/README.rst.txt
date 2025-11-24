:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famus'
.. highlight: bash

famus
=====

.. conda:recipe:: famus
   :replaces_section_title:
   :noindex:

   Functional Annotation Method Using Siamese neural networks \(FAMUS\)

   :homepage: https://github.com/burstein-lab/famus
   :license: MIT / MIT
   :recipe: /`famus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famus/meta.yaml>`_

   FAMUS is a Siamese Neural Network based framework that annotates 
   protein sequences with function using pre\-trained models or custom training.

   NOTE\: PyTorch must be installed separately according to your system configuration.
   Visit https\:\/\/pytorch.org\/get\-started\/locally\/ for installation instructions.



.. conda:package:: famus

   |downloads_famus| |docker_famus|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``>=1.76``
   :depends hmmer: 
   :depends mafft: 
   :depends matplotlib-base: ``>=3.7.0``
   :depends mmseqs2: 
   :depends numpy: ``>=1.26.4,<2.0``
   :depends pandas: ``>=2.2.3``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends pyyaml: ``>=5.0``
   :depends scikit-learn: ``>=1.3.0``
   :depends scipy: ``>=1.10.0``
   :depends seaborn: ``>=0.13.2``
   :depends seqkit: 
   :depends tqdm: ``>=4.66.2``
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

      mamba install famus

   and update with::

      mamba update famus

  To create a new environment, run::

      mamba create --name myenvname famus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/famus:<tag>

   (see `famus/tags`_ for valid values for ``<tag>``)


.. |downloads_famus| image:: https://img.shields.io/conda/dn/bioconda/famus.svg?style=flat
   :target: https://anaconda.org/bioconda/famus
   :alt:   (downloads)
.. |docker_famus| image:: https://quay.io/repository/biocontainers/famus/status
   :target: https://quay.io/repository/biocontainers/famus
.. _`famus/tags`: https://quay.io/repository/biocontainers/famus?tab=tags


.. raw:: html

    <script>
        var package = "famus";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famus/README.html