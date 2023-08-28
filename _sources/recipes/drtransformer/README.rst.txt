:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drtransformer'
.. highlight: bash

drtransformer
=============

.. conda:recipe:: drtransformer
   :replaces_section_title:
   :noindex:

   Heuristic cotranscriptional folding using the nearest neighbor energy model.

   :homepage: https://pypi.org/project/drtransformer/
   :license: MIT
   :recipe: /`drtransformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drtransformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drtransformer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad034`

   


.. conda:package:: drtransformer

   |downloads_drtransformer| |docker_drtransformer|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends flit: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends packaging: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends viennarna: ``>=2.5.1``
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

      mamba install drtransformer

   and update with::

      mamba update drtransformer

  To create a new environment, run::

      mamba create --name myenvname drtransformer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drtransformer:<tag>

   (see `drtransformer/tags`_ for valid values for ``<tag>``)


.. |downloads_drtransformer| image:: https://img.shields.io/conda/dn/bioconda/drtransformer.svg?style=flat
   :target: https://anaconda.org/bioconda/drtransformer
   :alt:   (downloads)
.. |docker_drtransformer| image:: https://quay.io/repository/biocontainers/drtransformer/status
   :target: https://quay.io/repository/biocontainers/drtransformer
.. _`drtransformer/tags`: https://quay.io/repository/biocontainers/drtransformer?tab=tags


.. raw:: html

    <script>
        var package = "drtransformer";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drtransformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drtransformer/README.html