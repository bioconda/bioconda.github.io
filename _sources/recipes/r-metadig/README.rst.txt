:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metadig'
.. highlight: bash

r-metadig
=========

.. conda:recipe:: r-metadig
   :replaces_section_title:
   :noindex:

   A set of utility methods for authoring MetaDIG checks in R.

   :homepage: https://github.com/NCEAS/metadig-r/
   :license: Apache / Apache-2.0
   :recipe: /`r-metadig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metadig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metadig/meta.yaml>`_

   


.. conda:package:: r-metadig

   |downloads_r-metadig| |docker_r-metadig|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-httr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metadig

   and update with::

      conda update r-metadig

   or use the docker container::

      docker pull quay.io/biocontainers/r-metadig:<tag>

   (see `r-metadig/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metadig| image:: https://img.shields.io/conda/dn/bioconda/r-metadig.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metadig
   :alt:   (downloads)
.. |docker_r-metadig| image:: https://quay.io/repository/biocontainers/r-metadig/status
   :target: https://quay.io/repository/biocontainers/r-metadig
.. _`r-metadig/tags`: https://quay.io/repository/biocontainers/r-metadig?tab=tags


.. raw:: html

    <script>
        var package = "r-metadig";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metadig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metadig/README.html