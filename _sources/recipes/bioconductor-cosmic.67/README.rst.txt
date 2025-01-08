:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmic.67'
.. highlight: bash

bioconductor-cosmic.67
======================

.. conda:recipe:: bioconductor-cosmic.67
   :replaces_section_title:
   :noindex:

   COSMIC.67

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/COSMIC.67.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmic.67 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmic.67>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmic.67/meta.yaml>`_

   COSMIC\: Catalogue Of Somatic Mutations In Cancer\, version 67 \(2013\-10\-24\)


.. conda:package:: bioconductor-cosmic.67

   |downloads_bioconductor-cosmic.67| |docker_bioconductor-cosmic.67|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends curl: 
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

      mamba install bioconductor-cosmic.67

   and update with::

      mamba update bioconductor-cosmic.67

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosmic.67

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmic.67:<tag>

   (see `bioconductor-cosmic.67/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmic.67| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmic.67.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmic.67
   :alt:   (downloads)
.. |docker_bioconductor-cosmic.67| image:: https://quay.io/repository/biocontainers/bioconductor-cosmic.67/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmic.67
.. _`bioconductor-cosmic.67/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmic.67?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosmic.67";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmic.67/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmic.67/README.html