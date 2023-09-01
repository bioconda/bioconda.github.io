:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphtyper'
.. highlight: bash

graphtyper
==========

.. conda:recipe:: graphtyper
   :replaces_section_title:
   :noindex:

   Population\-scale genotyping using pangenome graphs

   :homepage: https://github.com/DecodeGenetics/graphtyper
   :license: MIT
   :recipe: /`graphtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphtyper/meta.yaml>`_

   


.. conda:package:: graphtyper

   |downloads_graphtyper| |docker_graphtyper|

   :versions:
      
      

      ``2.7.2-1``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.5.1-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2.1-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install graphtyper

   and update with::

      mamba update graphtyper

  To create a new environment, run::

      mamba create --name myenvname graphtyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphtyper:<tag>

   (see `graphtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_graphtyper| image:: https://img.shields.io/conda/dn/bioconda/graphtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/graphtyper
   :alt:   (downloads)
.. |docker_graphtyper| image:: https://quay.io/repository/biocontainers/graphtyper/status
   :target: https://quay.io/repository/biocontainers/graphtyper
.. _`graphtyper/tags`: https://quay.io/repository/biocontainers/graphtyper?tab=tags


.. raw:: html

    <script>
        var package = "graphtyper";
        var versions = ["2.7.2","2.7.2","2.7.1","2.5.1","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphtyper/README.html