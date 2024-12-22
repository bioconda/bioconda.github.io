:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-awst'
.. highlight: bash

bioconductor-awst
=================

.. conda:recipe:: bioconductor-awst
   :replaces_section_title:
   :noindex:

   Asymmetric Within\-Sample Transformation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/awst.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-awst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awst/meta.yaml>`_

   We propose an Asymmetric Within\-Sample Transformation \(AWST\) to regularize RNA\-seq read counts and reduce the effect of noise on the classification of samples. AWST comprises two main steps\: standardization and smoothing. These steps transform gene expression data to reduce the noise of the lowly expressed features\, which suffer from background effects and low signal\-to\-noise ratio\, and the influence of the highly expressed features\, which may be the result of amplification bias and other experimental artifacts.


.. conda:package:: bioconductor-awst

   |downloads_bioconductor-awst| |docker_bioconductor-awst|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-awst

   and update with::

      mamba update bioconductor-awst

  To create a new environment, run::

      mamba create --name myenvname bioconductor-awst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-awst:<tag>

   (see `bioconductor-awst/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-awst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-awst.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-awst
   :alt:   (downloads)
.. |docker_bioconductor-awst| image:: https://quay.io/repository/biocontainers/bioconductor-awst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-awst
.. _`bioconductor-awst/tags`: https://quay.io/repository/biocontainers/bioconductor-awst?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-awst";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-awst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-awst/README.html