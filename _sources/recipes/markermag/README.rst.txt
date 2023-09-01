:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markermag'
.. highlight: bash

markermag
=========

.. conda:recipe:: markermag
   :replaces_section_title:
   :noindex:

   linking MAGs with 16S rRNA marker genes

   :homepage: https://pypi.org/project/MarkerMAG/
   :license: AGPL-3.0
   :recipe: /`markermag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markermag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markermag/meta.yaml>`_

   


.. conda:package:: markermag

   |downloads_markermag| |docker_markermag|

   :versions:
      
      

      ``1.1.28-0``,  ``1.1.27-0``,  ``1.1.26-0``

      

   
   :depends barrnap: 
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends hmmer: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: 
   :depends samtools: 
   :depends seaborn: 
   :depends seqtk: 
   :depends setuptools: 
   :depends spades: 
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

      mamba install markermag

   and update with::

      mamba update markermag

  To create a new environment, run::

      mamba create --name myenvname markermag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/markermag:<tag>

   (see `markermag/tags`_ for valid values for ``<tag>``)


.. |downloads_markermag| image:: https://img.shields.io/conda/dn/bioconda/markermag.svg?style=flat
   :target: https://anaconda.org/bioconda/markermag
   :alt:   (downloads)
.. |docker_markermag| image:: https://quay.io/repository/biocontainers/markermag/status
   :target: https://quay.io/repository/biocontainers/markermag
.. _`markermag/tags`: https://quay.io/repository/biocontainers/markermag?tab=tags


.. raw:: html

    <script>
        var package = "markermag";
        var versions = ["1.1.28","1.1.27","1.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markermag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markermag/README.html