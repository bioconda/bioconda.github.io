:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chord'
.. highlight: bash

r-chord
=======

.. conda:recipe:: r-chord
   :replaces_section_title:
   :noindex:

   Predict HRD using somatic mutations contexts

   :homepage: https://github.com/UMCUGenetics/CHORD
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-chord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chord/meta.yaml>`_

   


.. conda:package:: r-chord

   |downloads_r-chord| |docker_r-chord|

   :versions:
      
      

      ``2.03-0``,  ``2.02-0``

      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mutsigextractor: ``1.14``
   :depends r-randomforest: 
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

      mamba install r-chord

   and update with::

      mamba update r-chord

  To create a new environment, run::

      mamba create --name myenvname r-chord

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-chord:<tag>

   (see `r-chord/tags`_ for valid values for ``<tag>``)


.. |downloads_r-chord| image:: https://img.shields.io/conda/dn/bioconda/r-chord.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chord
   :alt:   (downloads)
.. |docker_r-chord| image:: https://quay.io/repository/biocontainers/r-chord/status
   :target: https://quay.io/repository/biocontainers/r-chord
.. _`r-chord/tags`: https://quay.io/repository/biocontainers/r-chord?tab=tags


.. raw:: html

    <script>
        var package = "r-chord";
        var versions = ["2.03","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chord/README.html