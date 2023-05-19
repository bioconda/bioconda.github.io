:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-restfulr'
.. highlight: bash

r-restfulr
==========

.. conda:recipe:: r-restfulr
   :replaces_section_title:
   :noindex:

   Models a RESTful service as if it were a nested R list.

   :homepage: https://CRAN.R-project.org/package=restfulr
   :license: OTHER / Artistic-2.0
   :recipe: /`r-restfulr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-restfulr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-restfulr/meta.yaml>`_

   


.. conda:package:: r-restfulr

   |downloads_r-restfulr| |docker_r-restfulr|

   :versions:
      
      

      ``0.0.15-2``,  ``0.0.15-1``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-2``,  ``0.0.13-1``,  ``0.0.13-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.13.15``
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-xml: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-restfulr

   and update with::

      conda update r-restfulr

   or use the docker container::

      docker pull quay.io/biocontainers/r-restfulr:<tag>

   (see `r-restfulr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-restfulr| image:: https://img.shields.io/conda/dn/bioconda/r-restfulr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-restfulr
   :alt:   (downloads)
.. |docker_r-restfulr| image:: https://quay.io/repository/biocontainers/r-restfulr/status
   :target: https://quay.io/repository/biocontainers/r-restfulr
.. _`r-restfulr/tags`: https://quay.io/repository/biocontainers/r-restfulr?tab=tags


.. raw:: html

    <script>
        var package = "r-restfulr";
        var versions = ["0.0.15","0.0.15","0.0.15","0.0.14","0.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-restfulr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-restfulr/README.html