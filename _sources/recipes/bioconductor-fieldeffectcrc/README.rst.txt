:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fieldeffectcrc'
.. highlight: bash

bioconductor-fieldeffectcrc
===========================

.. conda:recipe:: bioconductor-fieldeffectcrc
   :replaces_section_title:
   :noindex:

   Tumor\, tumor\-adjacent normal\, and healthy colorectal transcriptomes as SummarizedExperiment objects

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/FieldEffectCrc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fieldeffectcrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fieldeffectcrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fieldeffectcrc/meta.yaml>`_

   Processed RNA\-seq data for 1\,139 human primary colorectal tissue samples across three phenotypes\, including tumor\, normal adjacent\-to\-tumor\, and healthy\, available as Synapse ID syn22237139 on synapse.org. Data have been parsed into SummarizedExperiment objects available via ExperimentHub to facilitate reproducibility and extension of results from Dampier et al. \(PMCID\: PMC7386360\, PMID\: 32764205\).


.. conda:package:: bioconductor-fieldeffectcrc

   |downloads_bioconductor-fieldeffectcrc| |docker_bioconductor-fieldeffectcrc|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biocstyle: ``>=2.26.0,<2.27.0``
   :depends bioconductor-data-packages: ``>=20221110``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-runit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fieldeffectcrc

   and update with::

      conda update bioconductor-fieldeffectcrc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fieldeffectcrc:<tag>

   (see `bioconductor-fieldeffectcrc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fieldeffectcrc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fieldeffectcrc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fieldeffectcrc
   :alt:   (downloads)
.. |docker_bioconductor-fieldeffectcrc| image:: https://quay.io/repository/biocontainers/bioconductor-fieldeffectcrc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fieldeffectcrc
.. _`bioconductor-fieldeffectcrc/tags`: https://quay.io/repository/biocontainers/bioconductor-fieldeffectcrc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fieldeffectcrc";
        var versions = ["1.8.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fieldeffectcrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fieldeffectcrc/README.html