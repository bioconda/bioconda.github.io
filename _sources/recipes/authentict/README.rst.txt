:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'authentict'
.. highlight: bash

authentict
==========

.. conda:recipe:: authentict
   :replaces_section_title:
   :noindex:

   Estimates present\-day DNA contamination in ancient DNA single\-stranded libraries.

   :homepage: https://github.com/StephanePeyregne/AuthentiCT
   :license: GPL3
   :recipe: /`authentict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02123-y`

   


.. conda:package:: authentict

   |downloads_authentict| |docker_authentict|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libcxx: ``>=14.0.6``
   :depends numdifftools: ``>=0.9.39``
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=0.25.1``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends samtools: 
   :depends scipy: ``>=1.3``
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

      mamba install authentict

   and update with::

      mamba update authentict

  To create a new environment, run::

      mamba create --name myenvname authentict

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/authentict:<tag>

   (see `authentict/tags`_ for valid values for ``<tag>``)


.. |downloads_authentict| image:: https://img.shields.io/conda/dn/bioconda/authentict.svg?style=flat
   :target: https://anaconda.org/bioconda/authentict
   :alt:   (downloads)
.. |docker_authentict| image:: https://quay.io/repository/biocontainers/authentict/status
   :target: https://quay.io/repository/biocontainers/authentict
.. _`authentict/tags`: https://quay.io/repository/biocontainers/authentict?tab=tags


.. raw:: html

    <script>
        var package = "authentict";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/authentict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/authentict/README.html