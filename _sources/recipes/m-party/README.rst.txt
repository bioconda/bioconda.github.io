:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'm-party'
.. highlight: bash

m-party
=======

.. conda:recipe:: m-party
   :replaces_section_title:
   :noindex:

   Mining Protein dAtasets foR Targeted EnzYmes

   :homepage: https://github.com/ozefreitas/M-PARTY
   :documentation: https://github.com/ozefreitas/M-PARTY/blob/main/README.md
   
   :license: MIT / MIT license
   :recipe: /`m-party <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m-party>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m-party/meta.yaml>`_

   M\-PARTY takes an input FASTA file with a variable number of aminoacidic
   sequences and performes a search against an considerable amount of Hidden 
   Markov Models\, previously built and trained from state of the art plastic 
   \(PE \- polyethylene\) degrading enzymes. This process relies on the hmmsearch 
   function from HMMER to perform the structural annotation. Output deduces 
   about the potential presence of plastic degradring enzymes in the inputed
   sequences\, and is composed by 3 distinct files\, in order to help the user 
   to have an easier time to read and conclude about the results.



.. conda:package:: m-party

   |downloads_m-party| |docker_m-party|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends cd-hit: 
   :depends clint: 
   :depends hmmer: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pyyaml: 
   :depends snakemake: 
   :depends t-coffee: 
   :depends upimapi: 
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

      mamba install m-party

   and update with::

      mamba update m-party

  To create a new environment, run::

      mamba create --name myenvname m-party

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/m-party:<tag>

   (see `m-party/tags`_ for valid values for ``<tag>``)


.. |downloads_m-party| image:: https://img.shields.io/conda/dn/bioconda/m-party.svg?style=flat
   :target: https://anaconda.org/bioconda/m-party
   :alt:   (downloads)
.. |docker_m-party| image:: https://quay.io/repository/biocontainers/m-party/status
   :target: https://quay.io/repository/biocontainers/m-party
.. _`m-party/tags`: https://quay.io/repository/biocontainers/m-party?tab=tags


.. raw:: html

    <script>
        var package = "m-party";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/m-party/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/m-party/README.html