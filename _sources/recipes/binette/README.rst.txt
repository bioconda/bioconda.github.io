:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binette'
.. highlight: bash

binette
=======

.. conda:recipe:: binette
   :replaces_section_title:
   :noindex:

   A fast and accurate binning refinement tool to constructs high quality MAGs from the output of multiple binning tools.

   :homepage: https://github.com/genotoul-bioinfo/binette
   :license: MIT / MIT
   :recipe: /`binette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette/meta.yaml>`_

   


.. conda:package:: binette

   |downloads_binette| |docker_binette|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends checkm2: 
   :depends diamond: ``2.0.4.*``
   :depends networkx: 
   :depends numpy: ``1.19.2.*``
   :depends packaging: 
   :depends pandas: ``1.4.0.*``
   :depends prodigal: ``2.6.3.*``
   :depends pyfastx: 
   :depends pyrodigal: 
   :depends python: ``>=3.7``
   :depends requests: 
   :depends tqdm: 
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

      mamba install binette

   and update with::

      mamba update binette

  To create a new environment, run::

      mamba create --name myenvname binette

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binette:<tag>

   (see `binette/tags`_ for valid values for ``<tag>``)


.. |downloads_binette| image:: https://img.shields.io/conda/dn/bioconda/binette.svg?style=flat
   :target: https://anaconda.org/bioconda/binette
   :alt:   (downloads)
.. |docker_binette| image:: https://quay.io/repository/biocontainers/binette/status
   :target: https://quay.io/repository/biocontainers/binette
.. _`binette/tags`: https://quay.io/repository/biocontainers/binette?tab=tags


.. raw:: html

    <script>
        var package = "binette";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binette/README.html