:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicontacts'
.. highlight: bash

bioconductor-hicontacts
=======================

.. conda:recipe:: bioconductor-hicontacts
   :replaces_section_title:
   :noindex:

   HiContacts\: R interface to cool files

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HiContacts.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicontacts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts/meta.yaml>`_

   HiContacts\: R interface to \(m\)cool files and other Hi\-C processed file formats. HiContacts provides a collection of tools to analyse and visualize Hi\-C datasets. It can import data from pairs or \(m\)cool files.


.. conda:package:: bioconductor-hicontacts

   |downloads_bioconductor-hicontacts| |docker_bioconductor-hicontacts|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicinteractions: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hicontactsdata: ``>=1.0.0,<1.1.0``
   :depends bioconductor-interactionset: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrastr: 
   :depends r-glue: 
   :depends r-matrix: 
   :depends r-reticulate: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vroom: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicontacts

   and update with::

      conda update bioconductor-hicontacts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicontacts:<tag>

   (see `bioconductor-hicontacts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicontacts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicontacts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicontacts
   :alt:   (downloads)
.. |docker_bioconductor-hicontacts| image:: https://quay.io/repository/biocontainers/bioconductor-hicontacts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicontacts
.. _`bioconductor-hicontacts/tags`: https://quay.io/repository/biocontainers/bioconductor-hicontacts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicontacts";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html