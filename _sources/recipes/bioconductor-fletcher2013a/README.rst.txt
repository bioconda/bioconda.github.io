:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fletcher2013a'
.. highlight: bash

bioconductor-fletcher2013a
==========================

.. conda:recipe:: bioconductor-fletcher2013a
   :replaces_section_title:
   :noindex:

   Gene expression data from breast cancer cells under FGFR2 signalling perturbation

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/Fletcher2013a.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fletcher2013a <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013a>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013a/meta.yaml>`_

   The package Fletcher2013a contains time\-course gene expression data from MCF\-7 cells treated under different experimental systems in order to perturb FGFR2 signalling. The data comes from Fletcher et al. \(Nature Comms 4\:2464\, 2013\) where further details about the background and the experimental design of the study can be found.


.. conda:package:: bioconductor-fletcher2013a

   |downloads_bioconductor-fletcher2013a| |docker_bioconductor-fletcher2013a|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fletcher2013a

   and update with::

      conda update bioconductor-fletcher2013a

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fletcher2013a:<tag>

   (see `bioconductor-fletcher2013a/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fletcher2013a| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fletcher2013a.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fletcher2013a
   :alt:   (downloads)
.. |docker_bioconductor-fletcher2013a| image:: https://quay.io/repository/biocontainers/bioconductor-fletcher2013a/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fletcher2013a
.. _`bioconductor-fletcher2013a/tags`: https://quay.io/repository/biocontainers/bioconductor-fletcher2013a?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fletcher2013a";
        var versions = ["1.28.0","1.26.0","1.26.0","1.25.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fletcher2013a/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fletcher2013a/README.html