:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcm'
.. highlight: bash

bioconductor-rcm
================

.. conda:recipe:: bioconductor-rcm
   :replaces_section_title:
   :noindex:

   Fit row\-column association models with the negative binomial distribution for the microbiome

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RCM.html
   :license: GPL-2
   :recipe: /`bioconductor-rcm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcm/meta.yaml>`_

   Combine ideas of log\-linear analysis of contingency table\, flexible response function estimation and empirical Bayes dispersion estimation for explorative visualization of microbiome datasets. The package includes unconstrained as well as constrained analysis. In addition\, diagnostic plot to detect lack of fit are available.


.. conda:package:: bioconductor-rcm

   |downloads_bioconductor-rcm| |docker_bioconductor-rcm|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends r-alabama: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-ggplot2: ``>=2.2.1.9000``
   :depends r-mass: 
   :depends r-nleqslv: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tensor: 
   :depends r-tseries: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcm

   and update with::

      conda update bioconductor-rcm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcm:<tag>

   (see `bioconductor-rcm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcm
   :alt:   (downloads)
.. |docker_bioconductor-rcm| image:: https://quay.io/repository/biocontainers/bioconductor-rcm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcm
.. _`bioconductor-rcm/tags`: https://quay.io/repository/biocontainers/bioconductor-rcm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcm";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcm/README.html