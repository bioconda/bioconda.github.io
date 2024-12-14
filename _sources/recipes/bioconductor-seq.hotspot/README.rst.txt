:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq.hotspot'
.. highlight: bash

bioconductor-seq.hotspot
========================

.. conda:recipe:: bioconductor-seq.hotspot
   :replaces_section_title:
   :noindex:

   Targeted sequencing panel design based on mutation hotspots

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seq.hotSPOT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seq.hotspot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq.hotspot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq.hotspot/meta.yaml>`_

   seq.hotSPOT provides a resource for designing effective sequencing panels to help improve mutation capture efficacy for ultradeep sequencing projects. Using SNV datasets\, this package designs custom panels for any tissue of interest and identify the genomic regions likely to contain the most mutations. Establishing efficient targeted sequencing panels can allow researchers to study mutation burden in tissues at high depth without the economic burden of whole\-exome or whole\-genome sequencing. This tool was developed to make high\-depth sequencing panels to study low\-frequency clonal mutations in clinically normal and cancerous tissues.


.. conda:package:: bioconductor-seq.hotspot

   |downloads_bioconductor-seq.hotspot| |docker_bioconductor-seq.hotspot|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-hash: 
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

      mamba install bioconductor-seq.hotspot

   and update with::

      mamba update bioconductor-seq.hotspot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seq.hotspot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seq.hotspot:<tag>

   (see `bioconductor-seq.hotspot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seq.hotspot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq.hotspot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq.hotspot
   :alt:   (downloads)
.. |docker_bioconductor-seq.hotspot| image:: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot
.. _`bioconductor-seq.hotspot/tags`: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seq.hotspot";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq.hotspot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq.hotspot/README.html