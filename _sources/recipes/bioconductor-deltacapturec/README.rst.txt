:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deltacapturec'
.. highlight: bash

bioconductor-deltacapturec
==========================

.. conda:recipe:: bioconductor-deltacapturec
   :replaces_section_title:
   :noindex:

   This Package Discovers Meso\-scale Chromatin Remodeling from 3C Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/deltaCaptureC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-deltacapturec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltacapturec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltacapturec/meta.yaml>`_

   This package discovers meso\-scale chromatin remodelling from 3C data.  3C data is local in nature.  It givens interaction counts between restriction enzyme digestion fragments and a preferred \'viewpoint\' region.  By binning this data and using permutation testing\, this package can test whether there are statistically significant changes in the interaction counts between the data from two cell types or two treatments.


.. conda:package:: bioconductor-deltacapturec

   |downloads_bioconductor-deltacapturec| |docker_bioconductor-deltacapturec|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-tictoc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deltacapturec

   and update with::

      conda update bioconductor-deltacapturec

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deltacapturec:<tag>

   (see `bioconductor-deltacapturec/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deltacapturec| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deltacapturec.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deltacapturec
   :alt:   (downloads)
.. |docker_bioconductor-deltacapturec| image:: https://quay.io/repository/biocontainers/bioconductor-deltacapturec/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deltacapturec
.. _`bioconductor-deltacapturec/tags`: https://quay.io/repository/biocontainers/bioconductor-deltacapturec?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deltacapturec";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deltacapturec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deltacapturec/README.html