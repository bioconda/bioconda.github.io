:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats-long'
.. highlight: bash

rmats-long
==========

.. conda:recipe:: rmats-long
   :replaces_section_title:
   :noindex:

   rMATS\-long is an integrated computational workflow for long\-read RNA\-seq data

   :homepage: https://github.com/Xinglab/rMATS-long
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`rmats-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long/meta.yaml>`_

   


.. conda:package:: rmats-long

   |downloads_rmats-long| |docker_rmats-long|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: 
   :depends bioconductor-drimseq: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-stringi: ``>=1.7.8``
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

      mamba install rmats-long

   and update with::

      mamba update rmats-long

  To create a new environment, run::

      mamba create --name myenvname rmats-long

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmats-long:<tag>

   (see `rmats-long/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats-long| image:: https://img.shields.io/conda/dn/bioconda/rmats-long.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats-long
   :alt:   (downloads)
.. |docker_rmats-long| image:: https://quay.io/repository/biocontainers/rmats-long/status
   :target: https://quay.io/repository/biocontainers/rmats-long
.. _`rmats-long/tags`: https://quay.io/repository/biocontainers/rmats-long?tab=tags


.. raw:: html

    <script>
        var package = "rmats-long";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats-long/README.html