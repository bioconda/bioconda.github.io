:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lisi'
.. highlight: bash

r-lisi
======

.. conda:recipe:: r-lisi
   :replaces_section_title:
   :noindex:

   A method to assess how well mixed cells with different labels are in single cell RNAseq.

   :homepage: https://github.com/immunogenomics/LISI
   :license: GPL3 / GPL-3
   :recipe: /`r-lisi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi/meta.yaml>`_

   


.. conda:package:: r-lisi

   |downloads_r-lisi| |docker_r-lisi|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libcxx: ``>=14.0.4``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rann: 
   :depends r-testthat: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lisi

   and update with::

      conda update r-lisi

   or use the docker container::

      docker pull quay.io/biocontainers/r-lisi:<tag>

   (see `r-lisi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lisi| image:: https://img.shields.io/conda/dn/bioconda/r-lisi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lisi
   :alt:   (downloads)
.. |docker_r-lisi| image:: https://quay.io/repository/biocontainers/r-lisi/status
   :target: https://quay.io/repository/biocontainers/r-lisi
.. _`r-lisi/tags`: https://quay.io/repository/biocontainers/r-lisi?tab=tags


.. raw:: html

    <script>
        var package = "r-lisi";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lisi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lisi/README.html