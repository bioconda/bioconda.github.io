:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'airr'
.. highlight: bash

airr
====

.. conda:recipe:: airr
   :replaces_section_title:
   :noindex:

   AIRR Community Data Representation Standard reference library for antibody and TCR sequencing data. Citations\: AIRR standards \<doi\:10.5281\/zenodo.1185414\>.

   :homepage: http://docs.airr-community.org
   :license: CC / CC BY 4.0
   :recipe: /`airr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr/meta.yaml>`_

   


.. conda:package:: airr

   |downloads_airr| |docker_airr|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``

      

   
   :depends pandas: ``>=0.18.0``
   :depends python: 
   :depends pyyaml: ``>=3.12``
   :depends yamlordereddictloader: ``>=0.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install airr

   and update with::

      conda update airr

   or use the docker container::

      docker pull quay.io/biocontainers/airr:<tag>

   (see `airr/tags`_ for valid values for ``<tag>``)


.. |downloads_airr| image:: https://img.shields.io/conda/dn/bioconda/airr.svg?style=flat
   :target: https://anaconda.org/bioconda/airr
   :alt:   (downloads)
.. |docker_airr| image:: https://quay.io/repository/biocontainers/airr/status
   :target: https://quay.io/repository/biocontainers/airr
.. _`airr/tags`: https://quay.io/repository/biocontainers/airr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/airr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/airr/README.html