:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynteny_transformer'
.. highlight: bash

phynteny_transformer
====================

.. conda:recipe:: phynteny_transformer
   :replaces_section_title:
   :noindex:

   Phynteny\: Synteny\-based prediction of bacteriophage genes.

   :homepage: https://github.com/susiegriggo/Phynteny_transformer
   :documentation: https://github.com/susiegriggo/Phynteny_transformer/blob/v0.1.2/README.md
   
   :license: MIT / MIT
   :recipe: /`phynteny_transformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny_transformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny_transformer/meta.yaml>`_

   


.. conda:package:: phynteny_transformer

   |downloads_phynteny_transformer| |docker_phynteny_transformer|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends loguru: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends pytorch: ``>=2.1.2``
   :depends scikit-learn: 
   :depends tqdm: 
   :depends transformers: 
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

      mamba install phynteny_transformer

   and update with::

      mamba update phynteny_transformer

  To create a new environment, run::

      mamba create --name myenvname phynteny_transformer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phynteny_transformer:<tag>

   (see `phynteny_transformer/tags`_ for valid values for ``<tag>``)


.. |downloads_phynteny_transformer| image:: https://img.shields.io/conda/dn/bioconda/phynteny_transformer.svg?style=flat
   :target: https://anaconda.org/bioconda/phynteny_transformer
   :alt:   (downloads)
.. |docker_phynteny_transformer| image:: https://quay.io/repository/biocontainers/phynteny_transformer/status
   :target: https://quay.io/repository/biocontainers/phynteny_transformer
.. _`phynteny_transformer/tags`: https://quay.io/repository/biocontainers/phynteny_transformer?tab=tags


.. raw:: html

    <script>
        var package = "phynteny_transformer";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynteny_transformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynteny_transformer/README.html