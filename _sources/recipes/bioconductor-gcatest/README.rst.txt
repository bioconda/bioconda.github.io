:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcatest'
.. highlight: bash

bioconductor-gcatest
====================

.. conda:recipe:: bioconductor-gcatest
   :replaces_section_title:
   :noindex:

   Genotype Conditional Association TEST

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gcatest.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-gcatest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcatest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcatest/meta.yaml>`_
   :links: biotools: :biotools:`gcatest`, doi: :doi:`10.1101/012682`

   GCAT is an association test for genome wide association studies that controls for population structure under a general class of trait models.  This test conditions on the trait\, which makes it immune to confounding by unmodeled environmental factors.  Population structure is modeled via logistic factors\, which are estimated using the \`lfa\` package.


.. conda:package:: bioconductor-gcatest

   |downloads_bioconductor-gcatest| |docker_bioconductor-gcatest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.7-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.7-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-lfa: ``>=2.6.0,<2.7.0``
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

      mamba install bioconductor-gcatest

   and update with::

      mamba update bioconductor-gcatest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gcatest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcatest:<tag>

   (see `bioconductor-gcatest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcatest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcatest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcatest
   :alt:   (downloads)
.. |docker_bioconductor-gcatest| image:: https://quay.io/repository/biocontainers/bioconductor-gcatest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcatest
.. _`bioconductor-gcatest/tags`: https://quay.io/repository/biocontainers/bioconductor-gcatest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gcatest";
        var versions = ["2.6.0","2.2.0","2.0.7","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcatest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcatest/README.html