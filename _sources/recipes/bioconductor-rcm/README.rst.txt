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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rcm

   and update with::

      mamba update bioconductor-rcm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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