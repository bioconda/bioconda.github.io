:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nparc'
.. highlight: bash

bioconductor-nparc
==================

.. conda:recipe:: bioconductor-nparc
   :replaces_section_title:
   :noindex:

   Non\-parametric analysis of response curves for thermal proteome profiling experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/NPARC.html
   :license: GPL-3
   :recipe: /`bioconductor-nparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nparc/meta.yaml>`_

   Perform non\-parametric analysis of response curves as described by Childs\, Bach\, Franken et al. \(2019\)\: Non\-parametric analysis of thermal proteome profiles reveals novel drug\-binding proteins.


.. conda:package:: bioconductor-nparc

   |downloads_bioconductor-nparc| |docker_bioconductor-nparc|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nparc

   and update with::

      conda update bioconductor-nparc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nparc:<tag>

   (see `bioconductor-nparc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nparc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nparc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nparc
   :alt:   (downloads)
.. |docker_bioconductor-nparc| image:: https://quay.io/repository/biocontainers/bioconductor-nparc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nparc
.. _`bioconductor-nparc/tags`: https://quay.io/repository/biocontainers/bioconductor-nparc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nparc";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nparc/README.html