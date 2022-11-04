:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crisprcleanr'
.. highlight: bash

r-crisprcleanr
==============

.. conda:recipe:: r-crisprcleanr
   :replaces_section_title:
   :noindex:

   Analysis of CRISPR functional genomics\, remove false positive due to CNVs.

   :homepage: https://github.com/francescojm/CRISPRcleanR
   :license: AGPL / AGPL-3
   :recipe: /`r-crisprcleanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crisprcleanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crisprcleanr/meta.yaml>`_

   


.. conda:package:: r-crisprcleanr

   |downloads_r-crisprcleanr| |docker_r-crisprcleanr|

   :versions:
      
      

      ``2.3.1-1``,  ``2.3.1-0``

      

   
   :depends bioconductor-dnacopy: ``>=1.68``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-pracma: 
   :depends r-proc: 
   :depends r-prroc: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-crisprcleanr

   and update with::

      conda update r-crisprcleanr

   or use the docker container::

      docker pull quay.io/biocontainers/r-crisprcleanr:<tag>

   (see `r-crisprcleanr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-crisprcleanr| image:: https://img.shields.io/conda/dn/bioconda/r-crisprcleanr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crisprcleanr
   :alt:   (downloads)
.. |docker_r-crisprcleanr| image:: https://quay.io/repository/biocontainers/r-crisprcleanr/status
   :target: https://quay.io/repository/biocontainers/r-crisprcleanr
.. _`r-crisprcleanr/tags`: https://quay.io/repository/biocontainers/r-crisprcleanr?tab=tags


.. raw:: html

    <script>
        var package = "r-crisprcleanr";
        var versions = ["2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crisprcleanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crisprcleanr/README.html