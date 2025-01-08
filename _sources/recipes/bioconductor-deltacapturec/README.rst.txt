:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deltacapturec'
.. highlight: bash

bioconductor-deltacapturec
==========================

.. conda:recipe:: bioconductor-deltacapturec
   :replaces_section_title:
   :noindex:

   This Package Discovers Meso\-scale Chromatin Remodeling from 3C Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/deltaCaptureC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-deltacapturec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltacapturec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltacapturec/meta.yaml>`_

   This package discovers meso\-scale chromatin remodelling from 3C data.  3C data is local in nature.  It givens interaction counts between restriction enzyme digestion fragments and a preferred \'viewpoint\' region.  By binning this data and using permutation testing\, this package can test whether there are statistically significant changes in the interaction counts between the data from two cell types or two treatments.


.. conda:package:: bioconductor-deltacapturec

   |downloads_bioconductor-deltacapturec| |docker_bioconductor-deltacapturec|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-tictoc: 
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

      mamba install bioconductor-deltacapturec

   and update with::

      mamba update bioconductor-deltacapturec

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deltacapturec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
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