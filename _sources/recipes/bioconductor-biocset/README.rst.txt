:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocset'
.. highlight: bash

bioconductor-biocset
====================

.. conda:recipe:: bioconductor-biocset
   :replaces_section_title:
   :noindex:

   Representing Different Biological Sets

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BiocSet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocset/meta.yaml>`_

   BiocSet displays different biological sets in a triple tibble format. These three tibbles are \`element\`\, \`set\`\, and \`elementset\`. The user has the abilty to activate one of these three tibbles to perform common functions from the dplyr package. Mapping functionality and accessing web references for elements\/sets are also available in BiocSet.


.. conda:package:: bioconductor-biocset

   |downloads_bioconductor-biocset| |docker_bioconductor-biocset|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocio: ``>=1.4.0,<1.5.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ontologyindex: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocset

   and update with::

      conda update bioconductor-biocset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocset:<tag>

   (see `bioconductor-biocset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocset
   :alt:   (downloads)
.. |docker_bioconductor-biocset| image:: https://quay.io/repository/biocontainers/bioconductor-biocset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocset
.. _`bioconductor-biocset/tags`: https://quay.io/repository/biocontainers/bioconductor-biocset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocset";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocset/README.html