:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msexperiment'
.. highlight: bash

bioconductor-msexperiment
=========================

.. conda:recipe:: bioconductor-msexperiment
   :replaces_section_title:
   :noindex:

   Infrastructure for Mass Spectrometry Experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MsExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msexperiment/meta.yaml>`_

   Infrastructure to store and manage all aspects related to a complete proteomics or metabolomics mass spectrometry \(MS\) experiment. The MsExperiment package provides light\-weight and flexible containers for MS experiments building on the new MS infrastructure provided by the Spectra\, QFeatures and related packages. Along with raw data representations\, links to original data files and sample annotations\, additional metadata or annotations can also be stored within the MsExperiment container. To guarantee maximum flexibility only minimal constraints are put on the type and content of the data within the containers.


.. conda:package:: bioconductor-msexperiment

   |downloads_bioconductor-msexperiment| |docker_bioconductor-msexperiment|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-protgenerics: ``>=1.32.0,<1.33.0``
   :depends bioconductor-qfeatures: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spectra: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msexperiment

   and update with::

      conda update bioconductor-msexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msexperiment:<tag>

   (see `bioconductor-msexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msexperiment
   :alt:   (downloads)
.. |docker_bioconductor-msexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-msexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msexperiment
.. _`bioconductor-msexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-msexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msexperiment";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msexperiment/README.html