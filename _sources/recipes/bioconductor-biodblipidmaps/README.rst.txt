:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodblipidmaps'
.. highlight: bash

bioconductor-biodblipidmaps
===========================

.. conda:recipe:: bioconductor-biodblipidmaps
   :replaces_section_title:
   :noindex:

   biodbLipidmaps\, a library for connecting to the Lipidmaps Structure database

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/biodbLipidmaps.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodblipidmaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodblipidmaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodblipidmaps/meta.yaml>`_

   The biodbLipidmaps library provides access to the Lipidmaps Structure Database\, using biodb package framework. It allows to retrieve entries by their accession number\, and run web the services lmsdSearch and lmsdRecord.


.. conda:package:: bioconductor-biodblipidmaps

   |downloads_bioconductor-biodblipidmaps| |docker_bioconductor-biodblipidmaps|

   :versions:
      
      

      ``1.3.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biodb: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-lifecycle: 
   :depends r-r6: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodblipidmaps

   and update with::

      conda update bioconductor-biodblipidmaps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodblipidmaps:<tag>

   (see `bioconductor-biodblipidmaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodblipidmaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodblipidmaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodblipidmaps
   :alt:   (downloads)
.. |docker_bioconductor-biodblipidmaps| image:: https://quay.io/repository/biocontainers/bioconductor-biodblipidmaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodblipidmaps
.. _`bioconductor-biodblipidmaps/tags`: https://quay.io/repository/biocontainers/bioconductor-biodblipidmaps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodblipidmaps";
        var versions = ["1.3.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodblipidmaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodblipidmaps/README.html