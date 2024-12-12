:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tftargets'
.. highlight: bash

r-tftargets
===========

.. conda:recipe:: r-tftargets
   :replaces_section_title:
   :noindex:

   Human transcription factor target genes.

   :homepage: https://github.com/slowkow/tftargets
   :license: CC / CC0
   :recipe: /`r-tftargets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tftargets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tftargets/meta.yaml>`_

   


.. conda:package:: r-tftargets

   |downloads_r-tftargets| |docker_r-tftargets|

   :versions:
      
      

      ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-tftargets

   and update with::

      mamba update r-tftargets

  To create a new environment, run::

      mamba create --name myenvname r-tftargets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tftargets:<tag>

   (see `r-tftargets/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tftargets| image:: https://img.shields.io/conda/dn/bioconda/r-tftargets.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tftargets
   :alt:   (downloads)
.. |docker_r-tftargets| image:: https://quay.io/repository/biocontainers/r-tftargets/status
   :target: https://quay.io/repository/biocontainers/r-tftargets
.. _`r-tftargets/tags`: https://quay.io/repository/biocontainers/r-tftargets?tab=tags


.. raw:: html

    <script>
        var package = "r-tftargets";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tftargets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tftargets/README.html