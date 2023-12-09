:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinteractionnodes'
.. highlight: bash

bioconductor-genomicinteractionnodes
====================================

.. conda:recipe:: bioconductor-genomicinteractionnodes
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package to detect the interaction nodes from HiC\/HiChIP\/HiCAR data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GenomicInteractionNodes.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinteractionnodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes/meta.yaml>`_

   The GenomicInteractionNodes package can import interactions from bedpe file and define the interaction nodes\, the genomic interaction sites with multiple interaction loops. The interaction nodes is a binding platform regulates one or multiple genes. The detected interaction nodes will be annotated for downstream validation.


.. conda:package:: bioconductor-genomicinteractionnodes

   |downloads_bioconductor-genomicinteractionnodes| |docker_bioconductor-genomicinteractionnodes|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-genomicinteractionnodes

   and update with::

      mamba update bioconductor-genomicinteractionnodes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicinteractionnodes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicinteractionnodes:<tag>

   (see `bioconductor-genomicinteractionnodes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicinteractionnodes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinteractionnodes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinteractionnodes
   :alt:   (downloads)
.. |docker_bioconductor-genomicinteractionnodes| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes
.. _`bioconductor-genomicinteractionnodes/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinteractionnodes";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html