:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastoma'
.. highlight: bash

fastoma
=======

.. conda:recipe:: fastoma
   :replaces_section_title:
   :noindex:

   FastOMA \- a package to infer orthology information among proteomes

   :homepage: https://github.com/DessimozLab/FastOMA
   :license: Mozilla Public License 2.0
   :recipe: /`fastoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastoma/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-024-02552-8`

   


.. conda:package:: fastoma

   |downloads_fastoma| |docker_fastoma|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends dendropy: 
   :depends fasttree: 
   :depends future: 
   :depends jupyter: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends mmseqs2: 
   :depends networkx: 
   :depends nextflow: 
   :depends omamer: 
   :depends papermill: 
   :depends pyparsing: 
   :depends python: 
   :depends seaborn: 
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

      mamba install fastoma

   and update with::

      mamba update fastoma

  To create a new environment, run::

      mamba create --name myenvname fastoma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastoma:<tag>

   (see `fastoma/tags`_ for valid values for ``<tag>``)


.. |downloads_fastoma| image:: https://img.shields.io/conda/dn/bioconda/fastoma.svg?style=flat
   :target: https://anaconda.org/bioconda/fastoma
   :alt:   (downloads)
.. |docker_fastoma| image:: https://quay.io/repository/biocontainers/fastoma/status
   :target: https://quay.io/repository/biocontainers/fastoma
.. _`fastoma/tags`: https://quay.io/repository/biocontainers/fastoma?tab=tags


.. raw:: html

    <script>
        var package = "fastoma";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastoma/README.html