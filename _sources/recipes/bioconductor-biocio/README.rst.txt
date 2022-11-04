:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocio'
.. highlight: bash

bioconductor-biocio
===================

.. conda:recipe:: bioconductor-biocio
   :replaces_section_title:
   :noindex:

   Standard Input and Output for Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BiocIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocio/meta.yaml>`_

   Implements \`import\(\)\` and \`export\(\)\` standard generics for importing and exporting biological data formats. \`import\(\)\` supports whole\-file as well as chunk\-wise iterative import. The \`import\(\)\` interface optionally provides a standard mechanism for \'lazy\' access via \`filter\(\)\` \(on row or element\-like components of the file resource\)\, \`select\(\)\` \(on column\-like components of the file resource\) and \`collect\(\)\`. The \`import\(\)\` interface optionally provides transparent access to remote \(e.g. via https\) as well as local access. Developers can register a file extension\, e.g.\, \`.loom\` for dispatch from character\-based URIs to specific \`import\(\)\` \/ \`export\(\)\` methods based on classes representing file types\, e.g.\, \`LoomFile\(\)\`.


.. conda:package:: bioconductor-biocio

   |downloads_bioconductor-biocio| |docker_bioconductor-biocio|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocio

   and update with::

      conda update bioconductor-biocio

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocio:<tag>

   (see `bioconductor-biocio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocio
   :alt:   (downloads)
.. |docker_bioconductor-biocio| image:: https://quay.io/repository/biocontainers/bioconductor-biocio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocio
.. _`bioconductor-biocio/tags`: https://quay.io/repository/biocontainers/bioconductor-biocio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocio";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocio/README.html