:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seamless'
.. highlight: bash

r-seamless
==========

.. conda:recipe:: r-seamless
   :replaces_section_title:
   :noindex:

   Given a bulk transcriptomic \(RNA\-seq\) sample of an Myeloid Leukemia patient calculates immune composition and drug resistance for different small\-molecule inhibitors.

   :homepage: https://github.com/eonurk/seAMLess
   :license: GPL3 / GPL-3
   :recipe: /`r-seamless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless/meta.yaml>`_

   


.. conda:package:: r-seamless

   |downloads_r-seamless| |docker_r-seamless|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-ggtern: 
   :depends r-music: 
   :depends r-randomforest: 
   :depends xbioc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seamless

   and update with::

      conda update r-seamless

   or use the docker container::

      docker pull quay.io/biocontainers/r-seamless:<tag>

   (see `r-seamless/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seamless| image:: https://img.shields.io/conda/dn/bioconda/r-seamless.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seamless
   :alt:   (downloads)
.. |docker_r-seamless| image:: https://quay.io/repository/biocontainers/r-seamless/status
   :target: https://quay.io/repository/biocontainers/r-seamless
.. _`r-seamless/tags`: https://quay.io/repository/biocontainers/r-seamless?tab=tags


.. raw:: html

    <script>
        var package = "r-seamless";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seamless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seamless/README.html