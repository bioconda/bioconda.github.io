:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgenometracks'
.. highlight: bash

bioconductor-rgenometracks
==========================

.. conda:recipe:: bioconductor-rgenometracks
   :replaces_section_title:
   :noindex:

   Integerated visualization of epigenomic data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/rGenomeTracks.html
   :license: GPL-3
   :recipe: /`bioconductor-rgenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracks/meta.yaml>`_

   rGenomeTracks package leverages the power of pyGenomeTracks software with the interactivity of R. pyGenomeTracks is a python software that offers robust method for visualizing epigenetic data files like narrowPeak\, Hic matrix\, TADs and arcs\, however though\, here is no way currently to use it within R interactive session. rGenomeTracks wrapped the whole functionality of pyGenomeTracks with additional utilites to make to more pleasant for R users.


.. conda:package:: bioconductor-rgenometracks

   |downloads_bioconductor-rgenometracks| |docker_bioconductor-rgenometracks|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rgenometracksdata: ``>=0.99.0,<0.100.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-imager: 
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgenometracks

   and update with::

      conda update bioconductor-rgenometracks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgenometracks:<tag>

   (see `bioconductor-rgenometracks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgenometracks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgenometracks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgenometracks
   :alt:   (downloads)
.. |docker_bioconductor-rgenometracks| image:: https://quay.io/repository/biocontainers/bioconductor-rgenometracks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgenometracks
.. _`bioconductor-rgenometracks/tags`: https://quay.io/repository/biocontainers/bioconductor-rgenometracks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgenometracks";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgenometracks/README.html