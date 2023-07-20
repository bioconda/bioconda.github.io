:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.schemas'
.. highlight: bash

bioconductor-alabaster.schemas
==============================

.. conda:recipe:: bioconductor-alabaster.schemas
   :replaces_section_title:
   :noindex:

   Schemas for the Alabaster Framework

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.schemas.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.schemas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas/meta.yaml>`_

   Stores all schemas required by various alabaster.\* packages. No computation should be performed by this package\, as that is handled by alabaster.base. We use a separate package instead of storing the schemas in alabaster.base itself\, to avoid conflating management of the schemas with code maintenence.


.. conda:package:: bioconductor-alabaster.schemas

   |downloads_bioconductor-alabaster.schemas| |docker_bioconductor-alabaster.schemas|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.schemas

   and update with::

      conda update bioconductor-alabaster.schemas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.schemas:<tag>

   (see `bioconductor-alabaster.schemas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.schemas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.schemas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.schemas
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.schemas| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas
.. _`bioconductor-alabaster.schemas/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.schemas";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html