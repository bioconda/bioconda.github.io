:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mace'
.. highlight: bash

mace
====

.. conda:recipe:: mace
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-exo data

   :homepage: http://chipexo.sourceforge.net
   :license: GPL3 / GPL3
   :recipe: /`mace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mace/meta.yaml>`_

   


.. conda:package:: mace

   |downloads_mace| |docker_mace|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bx-python: 
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends ucsc-wigtobigwig: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mace

   and update with::

      mamba update mace

  To create a new environment, run::

      mamba create --name myenvname mace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mace:<tag>

   (see `mace/tags`_ for valid values for ``<tag>``)


.. |downloads_mace| image:: https://img.shields.io/conda/dn/bioconda/mace.svg?style=flat
   :target: https://anaconda.org/bioconda/mace
   :alt:   (downloads)
.. |docker_mace| image:: https://quay.io/repository/biocontainers/mace/status
   :target: https://quay.io/repository/biocontainers/mace
.. _`mace/tags`: https://quay.io/repository/biocontainers/mace?tab=tags


.. raw:: html

    <script>
        var package = "mace";
        var versions = ["1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mace/README.html