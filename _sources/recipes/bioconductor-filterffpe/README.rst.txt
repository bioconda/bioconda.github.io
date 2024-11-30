:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-filterffpe'
.. highlight: bash

bioconductor-filterffpe
=======================

.. conda:recipe:: bioconductor-filterffpe
   :replaces_section_title:
   :noindex:

   FFPE Artificial Chimeric Read Filter for NGS data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/FilterFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-filterffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe/meta.yaml>`_

   This package finds and filters artificial chimeric reads specifically generated in next\-generation sequencing \(NGS\) process of formalin\-fixed paraffin\-embedded \(FFPE\) tissues. These artificial chimeric reads can lead to a large number of false positive structural variation \(SV\) calls. The required input is an indexed BAM file of a FFPE sample.


.. conda:package:: bioconductor-filterffpe

   |downloads_bioconductor-filterffpe| |docker_bioconductor-filterffpe|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
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

      mamba install bioconductor-filterffpe

   and update with::

      mamba update bioconductor-filterffpe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-filterffpe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-filterffpe:<tag>

   (see `bioconductor-filterffpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-filterffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-filterffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-filterffpe
   :alt:   (downloads)
.. |docker_bioconductor-filterffpe| image:: https://quay.io/repository/biocontainers/bioconductor-filterffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-filterffpe
.. _`bioconductor-filterffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-filterffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-filterffpe";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html