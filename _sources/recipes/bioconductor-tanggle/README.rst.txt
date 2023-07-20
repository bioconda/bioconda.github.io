:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tanggle'
.. highlight: bash

bioconductor-tanggle
====================

.. conda:recipe:: bioconductor-tanggle
   :replaces_section_title:
   :noindex:

   Visualization of Phylogenetic Networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tanggle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tanggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tanggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tanggle/meta.yaml>`_

   Offers functions for plotting split \(or implicit\) networks \(unrooted\, undirected\) and explicit networks \(rooted\, directed\) with reticulations extending. \'ggtree\' and using functions from \'ape\' and \'phangorn\'. It extends the \'ggtree\' package \[\@Yu2017\] to allow the visualization of phylogenetic networks using the \'ggplot2\' syntax. It offers an alternative to the plot functions already available in \'ape\' Paradis and Schliep \(2019\) \<doi\:10.1093\/bioinformatics\/bty633\> and \'phangorn\' Schliep \(2011\) \<doi\:10.1093\/bioinformatics\/btq706\>.


.. conda:package:: bioconductor-tanggle

   |downloads_bioconductor-tanggle| |docker_bioconductor-tanggle|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends r-ape: ``>=5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-phangorn: ``>=2.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tanggle

   and update with::

      conda update bioconductor-tanggle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tanggle:<tag>

   (see `bioconductor-tanggle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tanggle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tanggle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tanggle
   :alt:   (downloads)
.. |docker_bioconductor-tanggle| image:: https://quay.io/repository/biocontainers/bioconductor-tanggle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tanggle
.. _`bioconductor-tanggle/tags`: https://quay.io/repository/biocontainers/bioconductor-tanggle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tanggle";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tanggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tanggle/README.html