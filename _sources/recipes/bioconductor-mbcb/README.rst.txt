:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbcb'
.. highlight: bash

bioconductor-mbcb
=================

.. conda:recipe:: bioconductor-mbcb
   :replaces_section_title:
   :noindex:

   MBCB \(Model\-based Background Correction for Beadarray\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MBCB.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mbcb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbcb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbcb/meta.yaml>`_

   This package provides a model\-based background correction method\, which incorporates the negative control beads to pre\-process Illumina BeadArray data.


.. conda:package:: bioconductor-mbcb

   |downloads_bioconductor-mbcb| |docker_bioconductor-mbcb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-tcltk2: 
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

      mamba install bioconductor-mbcb

   and update with::

      mamba update bioconductor-mbcb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbcb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbcb:<tag>

   (see `bioconductor-mbcb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbcb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbcb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbcb
   :alt:   (downloads)
.. |docker_bioconductor-mbcb| image:: https://quay.io/repository/biocontainers/bioconductor-mbcb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbcb
.. _`bioconductor-mbcb/tags`: https://quay.io/repository/biocontainers/bioconductor-mbcb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbcb";
        var versions = ["1.54.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbcb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbcb/README.html