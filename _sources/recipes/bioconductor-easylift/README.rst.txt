:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easylift'
.. highlight: bash

bioconductor-easylift
=====================

.. conda:recipe:: bioconductor-easylift
   :replaces_section_title:
   :noindex:

   An R package to perform genomic liftover

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/easylift.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-easylift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easylift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easylift/meta.yaml>`_

   The easylift package provides a convenient tool for genomic liftover operations between different genome assemblies. It seamlessly works with Bioconductor\'s GRanges objects and chain files from the UCSC Genome Browser\, allowing for straightforward handling of genomic ranges across various genome versions. One noteworthy feature of easylift is its integration with the BiocFileCache package. This integration automates the management and caching of chain files necessary for liftover operations. Users no longer need to manually specify chain file paths in their function calls\, reducing the complexity of the liftover process.


.. conda:package:: bioconductor-easylift

   |downloads_bioconductor-easylift| |docker_bioconductor-easylift|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r.utils: 
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

      mamba install bioconductor-easylift

   and update with::

      mamba update bioconductor-easylift

  To create a new environment, run::

      mamba create --name myenvname bioconductor-easylift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easylift:<tag>

   (see `bioconductor-easylift/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easylift| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easylift.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easylift
   :alt:   (downloads)
.. |docker_bioconductor-easylift| image:: https://quay.io/repository/biocontainers/bioconductor-easylift/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easylift
.. _`bioconductor-easylift/tags`: https://quay.io/repository/biocontainers/bioconductor-easylift?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easylift";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easylift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easylift/README.html