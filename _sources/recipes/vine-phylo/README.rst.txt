:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vine-phylo'
.. highlight: bash

vine-phylo
==========

.. conda:recipe:: vine-phylo
   :replaces_section_title:
   :noindex:

   VINE \(phylogenetics\)\: Variational Inference with Node Embeddings

   :homepage: https://github.com/CshlSiepelLab/vine
   :license: BSD-3-Clause
   :recipe: /`vine-phylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vine-phylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vine-phylo/meta.yaml>`_

   VINE is a tool for Bayesian variational phylogenetic inference.



.. conda:package:: vine-phylo

   |downloads_vine-phylo| |docker_vine-phylo|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends libgcc: ``>=14``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends phast: ``>=1.9.7,<2.0a0``
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

      mamba install vine-phylo

   and update with::

      mamba update vine-phylo

  To create a new environment, run::

      mamba create --name myenvname vine-phylo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vine-phylo:<tag>

   (see `vine-phylo/tags`_ for valid values for ``<tag>``)


.. |downloads_vine-phylo| image:: https://img.shields.io/conda/dn/bioconda/vine-phylo.svg?style=flat
   :target: https://anaconda.org/bioconda/vine-phylo
   :alt:   (downloads)
.. |docker_vine-phylo| image:: https://quay.io/repository/biocontainers/vine-phylo/status
   :target: https://quay.io/repository/biocontainers/vine-phylo
.. _`vine-phylo/tags`: https://quay.io/repository/biocontainers/vine-phylo?tab=tags


.. raw:: html

    <script>
        var package = "vine-phylo";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vine-phylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vine-phylo/README.html