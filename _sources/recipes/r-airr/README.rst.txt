:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-airr'
.. highlight: bash

r-airr
======

.. conda:recipe:: r-airr
   :replaces_section_title:

   Schema definitions and read\, write and validation tools for data  formatted in accordance with the AIRR Data Representation schemas defined  by the AIRR Community \<http\:\/\/docs.airr\-community.org\>.

   :homepage: http://docs.airr-community.org
   :license: CC / CC BY 4.0
   :recipe: /`r-airr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-airr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-airr/meta.yaml>`_

   


.. conda:package:: r-airr

   |downloads_r-airr| |docker_r-airr|

   :versions: 1.2.0-1, 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-readr: 
   
   :depends r-stringi: 
   
   :depends r-yaml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-airr

   and update with::

      conda update r-airr

   or use the docker container::

      docker pull quay.io/biocontainers/r-airr:<tag>

   (see `r-airr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-airr| image:: https://img.shields.io/conda/dn/bioconda/r-airr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-airr| image:: https://quay.io/repository/biocontainers/r-airr/status
   :target: https://quay.io/repository/biocontainers/r-airr
.. _`r-airr/tags`: https://quay.io/repository/biocontainers/r-airr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-airr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-airr/README.html