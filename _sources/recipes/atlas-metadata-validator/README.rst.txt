:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-metadata-validator'
.. highlight: bash

atlas-metadata-validator
========================

.. conda:recipe:: atlas-metadata-validator
   :replaces_section_title:
   :noindex:

   A MAGE\-TAB validator for Expression Atlas and Single Cell Expression Atlas

   :homepage: https://github.com/ebi-gene-expression-group/atlas-metadata-validator
   :license: APACHE / Apache Software
   :recipe: /`atlas-metadata-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-metadata-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-metadata-validator/meta.yaml>`_

   This is a python module to parse a set of MAGE\-TAB files and check for
   compatibility with the Expression Atlas and Single Cell Expression Atlas
   analysis pipelines. The main validation script automatically detects the
   experiment type from the MAGE\-TAB and runs the respective tests. Currently
   general checks \(for bulk and single\-cell experiment\) as well as Single Cell
   Expression Atlas specific checks are supported.  



.. conda:package:: atlas-metadata-validator

   |downloads_atlas-metadata-validator| |docker_atlas-metadata-validator|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3``
   :depends requests: ``>=2.20.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atlas-metadata-validator

   and update with::

      conda update atlas-metadata-validator

   or use the docker container::

      docker pull quay.io/biocontainers/atlas-metadata-validator:<tag>

   (see `atlas-metadata-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-metadata-validator| image:: https://img.shields.io/conda/dn/bioconda/atlas-metadata-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-metadata-validator
   :alt:   (downloads)
.. |docker_atlas-metadata-validator| image:: https://quay.io/repository/biocontainers/atlas-metadata-validator/status
   :target: https://quay.io/repository/biocontainers/atlas-metadata-validator
.. _`atlas-metadata-validator/tags`: https://quay.io/repository/biocontainers/atlas-metadata-validator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-metadata-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-metadata-validator/README.html