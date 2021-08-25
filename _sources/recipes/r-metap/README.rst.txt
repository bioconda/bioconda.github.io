:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metap'
.. highlight: bash

r-metap
=======

.. conda:recipe:: r-metap
   :replaces_section_title:
   :noindex:

   The canonical way to perform meta\-analysis involves using effect sizes. When they are not available this package provides a number of methods for meta\-analysis of significance values including the methods of Edgington\, Fisher\, Lancaster\, Stouffer\, Tippett\, and Wilkinson\; a number of data\-sets to replicate published results\; and a routine for graphical display.

   :homepage: http://www.dewey.myzen.co.uk/meta/meta.html
   :license: GPL2 / GPL-2
   :recipe: /`r-metap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metap/meta.yaml>`_

   


.. conda:package:: r-metap

   |downloads_r-metap| |docker_r-metap|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-lattice: 
   :depends r-mathjaxr: ``>=0.8_3``
   :depends r-mutoss: 
   :depends r-rdpack: ``>=0.7``
   :depends r-tfisher: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metap

   and update with::

      conda update r-metap

   or use the docker container::

      docker pull quay.io/biocontainers/r-metap:<tag>

   (see `r-metap/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metap| image:: https://img.shields.io/conda/dn/bioconda/r-metap.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metap
   :alt:   (downloads)
.. |docker_r-metap| image:: https://quay.io/repository/biocontainers/r-metap/status
   :target: https://quay.io/repository/biocontainers/r-metap
.. _`r-metap/tags`: https://quay.io/repository/biocontainers/r-metap?tab=tags


.. raw:: html

    <script>
        var package = "r-metap";
        var versions = ["1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metap/README.html