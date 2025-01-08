:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopack'
.. highlight: bash

nanopack
========

.. conda:recipe:: nanopack
   :replaces_section_title:
   :noindex:

   A meta package for several long read processing and analysis tools.

   :homepage: https://github.com/wdecoster/nanopack
   :license: GPL3 / GPL-3.0-only
   :recipe: /`nanopack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopack/meta.yaml>`_

   


.. conda:package:: nanopack

   |downloads_nanopack| |docker_nanopack|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends cramino: 
   :depends nanocomp: 
   :depends nanofilt: 
   :depends nanoget: 
   :depends nanolyse: 
   :depends nanomath: 
   :depends nanoplot: 
   :depends nanoqc: 
   :depends nanostat: 
   :depends phasius: 
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

      mamba install nanopack

   and update with::

      mamba update nanopack

  To create a new environment, run::

      mamba create --name myenvname nanopack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanopack:<tag>

   (see `nanopack/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopack| image:: https://img.shields.io/conda/dn/bioconda/nanopack.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopack
   :alt:   (downloads)
.. |docker_nanopack| image:: https://quay.io/repository/biocontainers/nanopack/status
   :target: https://quay.io/repository/biocontainers/nanopack
.. _`nanopack/tags`: https://quay.io/repository/biocontainers/nanopack?tab=tags


.. raw:: html

    <script>
        var package = "nanopack";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopack/README.html