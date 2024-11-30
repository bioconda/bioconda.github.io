:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloaln'
.. highlight: bash

phyloaln
========

.. conda:recipe:: phyloaln
   :replaces_section_title:
   :noindex:

   PhyloAln\: a reference\-based multiple sequence alignment tool for phylogeny

   :homepage: https://github.com/huangyh45/PhyloAln
   :license: MIT
   :recipe: /`phyloaln <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloaln>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloaln/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msae150`

   


.. conda:package:: phyloaln

   |downloads_phyloaln| |docker_phyloaln|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.77``
   :depends ete3: ``>=3.1.2``
   :depends hmmer: ``>=3.1``
   :depends mafft: ``>=7.467``
   :depends perl: ``>=5.26.2``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-parallel-forkmanager: ``>=2.02``
   :depends python: ``>=3.7.4``
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

      mamba install phyloaln

   and update with::

      mamba update phyloaln

  To create a new environment, run::

      mamba create --name myenvname phyloaln

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyloaln:<tag>

   (see `phyloaln/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloaln| image:: https://img.shields.io/conda/dn/bioconda/phyloaln.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloaln
   :alt:   (downloads)
.. |docker_phyloaln| image:: https://quay.io/repository/biocontainers/phyloaln/status
   :target: https://quay.io/repository/biocontainers/phyloaln
.. _`phyloaln/tags`: https://quay.io/repository/biocontainers/phyloaln?tab=tags


.. raw:: html

    <script>
        var package = "phyloaln";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloaln/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloaln/README.html