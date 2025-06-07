:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paragone'
.. highlight: bash

paragone
========

.. conda:recipe:: paragone
   :replaces_section_title:
   :noindex:

   Identify ortholog groups from a set of paralog sequences from multiple taxa.

   :homepage: https://github.com/chrisjackson-pellicle/ParaGone
   :documentation: https://github.com/chrisjackson-pellicle/ParaGone/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`paragone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragone/meta.yaml>`_

   


.. conda:package:: paragone

   |downloads_paragone| |docker_paragone|

   :versions:
      
      

      ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends clustalo: ``>=1.2.4``
   :depends ete3: ``>=3.1.2``
   :depends fasttree: 
   :depends hmmer: ``>=3.3.2``
   :depends iqtree: ``>=2.2.0.3``
   :depends julia: ``1.8.5.*``
   :depends libgomp: 
   :depends mafft: ``>=7.245``
   :depends python: ``>=3.6``
   :depends r-base: ``>=4.0.3``
   :depends treeshrink: 
   :depends trimal: ``>=1.4.1``
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

      mamba install paragone

   and update with::

      mamba update paragone

  To create a new environment, run::

      mamba create --name myenvname paragone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paragone:<tag>

   (see `paragone/tags`_ for valid values for ``<tag>``)


.. |downloads_paragone| image:: https://img.shields.io/conda/dn/bioconda/paragone.svg?style=flat
   :target: https://anaconda.org/bioconda/paragone
   :alt:   (downloads)
.. |docker_paragone| image:: https://quay.io/repository/biocontainers/paragone/status
   :target: https://quay.io/repository/biocontainers/paragone
.. _`paragone/tags`: https://quay.io/repository/biocontainers/paragone?tab=tags


.. raw:: html

    <script>
        var package = "paragone";
        var versions = ["1.1.3","1.1.3","1.1.2","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paragone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paragone/README.html