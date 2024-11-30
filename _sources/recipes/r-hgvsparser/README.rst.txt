:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hgvsparser'
.. highlight: bash

r-hgvsparser
============

.. conda:recipe:: r-hgvsparser
   :replaces_section_title:
   :noindex:

   hgvsParseR

   :homepage: https://github.com/VariantEffect/hgvsParseR
   :license: GPL / GPL-3.0-only
   :recipe: /`r-hgvsparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hgvsparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hgvsparser/meta.yaml>`_

   


.. conda:package:: r-hgvsparser

   |downloads_r-hgvsparser| |docker_r-hgvsparser|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
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

      mamba install r-hgvsparser

   and update with::

      mamba update r-hgvsparser

  To create a new environment, run::

      mamba create --name myenvname r-hgvsparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-hgvsparser:<tag>

   (see `r-hgvsparser/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hgvsparser| image:: https://img.shields.io/conda/dn/bioconda/r-hgvsparser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hgvsparser
   :alt:   (downloads)
.. |docker_r-hgvsparser| image:: https://quay.io/repository/biocontainers/r-hgvsparser/status
   :target: https://quay.io/repository/biocontainers/r-hgvsparser
.. _`r-hgvsparser/tags`: https://quay.io/repository/biocontainers/r-hgvsparser?tab=tags


.. raw:: html

    <script>
        var package = "r-hgvsparser";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hgvsparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hgvsparser/README.html