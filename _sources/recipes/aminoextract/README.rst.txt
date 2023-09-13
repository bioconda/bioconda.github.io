:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aminoextract'
.. highlight: bash

aminoextract
============

.. conda:recipe:: aminoextract
   :replaces_section_title:
   :noindex:

   AminoExtract is an application to extract aminoacid sequences from a fasta file based on a GFF.

   :homepage: https://pypi.org/project/AminoExtract/
   :developer docs: https://github.com/RIVM-bioinformatics/AminoExtract
   :license: MIT / MIT
   :recipe: /`aminoextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract/meta.yaml>`_

   


.. conda:package:: aminoextract

   |downloads_aminoextract| |docker_aminoextract|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends python-magic: ``0.4.*``
   :depends rich: ``13.*``
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

      mamba install aminoextract

   and update with::

      mamba update aminoextract

  To create a new environment, run::

      mamba create --name myenvname aminoextract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aminoextract:<tag>

   (see `aminoextract/tags`_ for valid values for ``<tag>``)


.. |downloads_aminoextract| image:: https://img.shields.io/conda/dn/bioconda/aminoextract.svg?style=flat
   :target: https://anaconda.org/bioconda/aminoextract
   :alt:   (downloads)
.. |docker_aminoextract| image:: https://quay.io/repository/biocontainers/aminoextract/status
   :target: https://quay.io/repository/biocontainers/aminoextract
.. _`aminoextract/tags`: https://quay.io/repository/biocontainers/aminoextract?tab=tags


.. raw:: html

    <script>
        var package = "aminoextract";
        var versions = ["0.3.1","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aminoextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aminoextract/README.html