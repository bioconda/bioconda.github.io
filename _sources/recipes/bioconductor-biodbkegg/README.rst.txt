:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbkegg'
.. highlight: bash

bioconductor-biodbkegg
======================

.. conda:recipe:: bioconductor-biodbkegg
   :replaces_section_title:
   :noindex:

   biodbKegg\, a library for connecting to the KEGG Database

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/biodbKegg.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbkegg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbkegg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbkegg/meta.yaml>`_

   The biodbKegg library is an extension of the biodb framework package that provides access to the KEGG databases Compound\, Enzyme\, Genes\, Module\, Orthology and Reaction. It allows to retrieve entries by their accession numbers. Web services like \"find\"\, \"list\" and \"findExactMass\" are also available. Some functions for navigating along the pathways have also been implemented.


.. conda:package:: bioconductor-biodbkegg

   |downloads_bioconductor-biodbkegg| |docker_bioconductor-biodbkegg|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-chk: 
   :depends r-lifecycle: 
   :depends r-r6: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodbkegg

   and update with::

      conda update bioconductor-biodbkegg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbkegg:<tag>

   (see `bioconductor-biodbkegg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbkegg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbkegg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbkegg
   :alt:   (downloads)
.. |docker_bioconductor-biodbkegg| image:: https://quay.io/repository/biocontainers/bioconductor-biodbkegg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbkegg
.. _`bioconductor-biodbkegg/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbkegg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbkegg";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbkegg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbkegg/README.html