:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfold'
.. highlight: bash

gfold
=====

.. conda:recipe:: gfold
   :replaces_section_title:
   :noindex:

   Find differentially expressed genes from RNA\-seq data with few replicates using generalized fold changes.

   :homepage: http://compbio.tongji.edu.cn/~fengjx/GFOLD/gfold.html
   :license: MIT
   :recipe: /`gfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold/meta.yaml>`_

   


.. conda:package:: gfold

   |downloads_gfold| |docker_gfold|

   :versions:
      
      

      ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends gsl: ``2.2*``
   :depends libgcc: 
   :depends openblas: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gfold

   and update with::

      mamba update gfold

  To create a new environment, run::

      mamba create --name myenvname gfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfold:<tag>

   (see `gfold/tags`_ for valid values for ``<tag>``)


.. |downloads_gfold| image:: https://img.shields.io/conda/dn/bioconda/gfold.svg?style=flat
   :target: https://anaconda.org/bioconda/gfold
   :alt:   (downloads)
.. |docker_gfold| image:: https://quay.io/repository/biocontainers/gfold/status
   :target: https://quay.io/repository/biocontainers/gfold
.. _`gfold/tags`: https://quay.io/repository/biocontainers/gfold?tab=tags


.. raw:: html

    <script>
        var package = "gfold";
        var versions = ["1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfold/README.html