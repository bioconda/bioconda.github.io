:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ontoprocdata'
.. highlight: bash

bioconductor-ontoprocdata
=========================

.. conda:recipe:: bioconductor-ontoprocdata
   :replaces_section_title:
   :noindex:

   A data package for ontoProc

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/ontoProcData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ontoprocdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoprocdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoprocdata/meta.yaml>`_

   This package manages rda files of multiple ontologies that are used in the ontoProc package. These ontologies were originally downloaded as owl or obo files and converted into Rda files . The files were downloaded at various times but most of them were downloaded on June 22 2021.


.. conda:package:: bioconductor-ontoprocdata

   |downloads_bioconductor-ontoprocdata| |docker_bioconductor-ontoprocdata|

   :versions:
      
      

      ``0.99.9-1``,  ``0.99.9-0``

      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ontoprocdata

   and update with::

      conda update bioconductor-ontoprocdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ontoprocdata:<tag>

   (see `bioconductor-ontoprocdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ontoprocdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ontoprocdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ontoprocdata
   :alt:   (downloads)
.. |docker_bioconductor-ontoprocdata| image:: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata
.. _`bioconductor-ontoprocdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ontoprocdata";
        var versions = ["0.99.9","0.99.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ontoprocdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ontoprocdata/README.html