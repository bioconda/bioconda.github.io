:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msdatahub'
.. highlight: bash

bioconductor-msdatahub
======================

.. conda:recipe:: bioconductor-msdatahub
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data on ExperimentHub

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MsDataHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msdatahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub/meta.yaml>`_

   The MsDataHub package uses the ExperimentHub infrastructure to distribute raw mass spectrometry data files\, peptide spectrum matches or quantitative data from proteomics and metabolomics experiments.


.. conda:package:: bioconductor-msdatahub

   |downloads_bioconductor-msdatahub| |docker_bioconductor-msdatahub|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msdatahub

   and update with::

      conda update bioconductor-msdatahub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msdatahub:<tag>

   (see `bioconductor-msdatahub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msdatahub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msdatahub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msdatahub
   :alt:   (downloads)
.. |docker_bioconductor-msdatahub| image:: https://quay.io/repository/biocontainers/bioconductor-msdatahub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msdatahub
.. _`bioconductor-msdatahub/tags`: https://quay.io/repository/biocontainers/bioconductor-msdatahub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msdatahub";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html