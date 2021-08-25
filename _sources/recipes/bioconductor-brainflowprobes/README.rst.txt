:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainflowprobes'
.. highlight: bash

bioconductor-brainflowprobes
============================

.. conda:recipe:: bioconductor-brainflowprobes
   :replaces_section_title:
   :noindex:

   Plots and annotation for choosing BrainFlow target probe sequence

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/brainflowprobes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainflowprobes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes/meta.yaml>`_

   Use these functions to characterize genomic regions for BrainFlow target probe design.


.. conda:package:: bioconductor-brainflowprobes

   |downloads_bioconductor-brainflowprobes| |docker_bioconductor-brainflowprobes|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bumphunter: ``>=1.34.0,<1.35.0``
   :depends bioconductor-derfinder: ``>=1.26.0,<1.27.0``
   :depends bioconductor-derfinderplot: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicstate: ``>=0.99.0,<0.100.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-rcolorbrewer: ``>=1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainflowprobes

   and update with::

      conda update bioconductor-brainflowprobes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brainflowprobes:<tag>

   (see `bioconductor-brainflowprobes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brainflowprobes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainflowprobes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainflowprobes
   :alt:   (downloads)
.. |docker_bioconductor-brainflowprobes| image:: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes
.. _`bioconductor-brainflowprobes/tags`: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brainflowprobes";
        var versions = ["1.6.0","1.4.1","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html