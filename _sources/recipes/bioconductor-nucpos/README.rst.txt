:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucpos'
.. highlight: bash

bioconductor-nucpos
===================

.. conda:recipe:: bioconductor-nucpos
   :replaces_section_title:
   :noindex:

   An R package for prediction of nucleosome positions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/nuCpos.html
   :license: GPL-2
   :recipe: /`bioconductor-nucpos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos/meta.yaml>`_

   nuCpos\, a derivative of NuPoP\, is an R package for prediction of nucleosome positions. nuCpos calculates local and whole nucleosomal histone binding affinity \(HBA\) scores for a given 147\-bp sequence. Note\: This package was designed to demonstrate the use of chemical maps in prediction. As the parental package NuPoP now provides chemical\-map\-based prediction\, the function for dHMM\-based prediction was removed from this package. nuCpos continues to provide functions for HBA calculation.


.. conda:package:: bioconductor-nucpos

   |downloads_bioconductor-nucpos| |docker_bioconductor-nucpos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-nucpos

   and update with::

      mamba update bioconductor-nucpos

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nucpos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucpos:<tag>

   (see `bioconductor-nucpos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucpos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucpos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nucpos
   :alt:   (downloads)
.. |docker_bioconductor-nucpos| image:: https://quay.io/repository/biocontainers/bioconductor-nucpos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucpos
.. _`bioconductor-nucpos/tags`: https://quay.io/repository/biocontainers/bioconductor-nucpos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nucpos";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucpos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucpos/README.html