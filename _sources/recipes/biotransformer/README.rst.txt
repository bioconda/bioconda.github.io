:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotransformer'
.. highlight: bash

biotransformer
==============

.. conda:recipe:: biotransformer
   :replaces_section_title:
   :noindex:

   Predicts small molecule metabolism.

   :homepage: https://bitbucket.org/wishartlab/biotransformer3.0jar/src
   :license: GPL3
   :recipe: /`biotransformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321‐018‐0324‐5`, doi: :doi:`10.1093/nar/gkv1229`

   BioTransformer is a software tool that predicts small molecule metabolism in mammals\, their gut microbiota\,
   as well as the soil\/aquatic microbiota. BioTransformer also assists scientists in metabolite identification\,
   based on the metabolism prediction.



.. conda:package:: biotransformer

   |downloads_biotransformer| |docker_biotransformer|

   :versions:
      
      

      ``3.0.20230403-0``,  ``3.0-0``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install biotransformer

   and update with::

      mamba update biotransformer

  To create a new environment, run::

      mamba create --name myenvname biotransformer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biotransformer:<tag>

   (see `biotransformer/tags`_ for valid values for ``<tag>``)


.. |downloads_biotransformer| image:: https://img.shields.io/conda/dn/bioconda/biotransformer.svg?style=flat
   :target: https://anaconda.org/bioconda/biotransformer
   :alt:   (downloads)
.. |docker_biotransformer| image:: https://quay.io/repository/biocontainers/biotransformer/status
   :target: https://quay.io/repository/biocontainers/biotransformer
.. _`biotransformer/tags`: https://quay.io/repository/biocontainers/biotransformer?tab=tags


.. raw:: html

    <script>
        var package = "biotransformer";
        var versions = ["3.0.20230403","3.0","1.1.5","1.1.5","1.1.5"];
    </script>





Notes
-----
Biotransformer is Java program that comes with a custom wrapper python script.
This python wrapper is called \"biotransformer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"biotransformer \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotransformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotransformer/README.html