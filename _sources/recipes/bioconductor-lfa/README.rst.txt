:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lfa'
.. highlight: bash

bioconductor-lfa
================

.. conda:recipe:: bioconductor-lfa
   :replaces_section_title:
   :noindex:

   Logistic Factor Analysis for Categorical Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lfa.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-lfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa/meta.yaml>`_
   :links: biotools: :biotools:`lfa`, doi: :doi:`10.1093/bioinformatics/btv641`

   Logistic Factor Analysis is a method for a PCA analogue on Binomial data via estimation of latent structure in the natural parameter.  The main method estimates genetic population structure from genotype data.  There are also methods for estimating individual\-specific allele frequencies using the population structure.  Lastly\, a structured Hardy\-Weinberg equilibrium \(HWE\) test is developed\, which quantifies the goodness of fit of the genotype data to the estimated population structure\, via the estimated individual\-specific allele frequencies \(all of which generalizes traditional HWE tests\).


.. conda:package:: bioconductor-lfa

   |downloads_bioconductor-lfa| |docker_bioconductor-lfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.11-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.11-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-corpcor: 
   :depends r-rspectra: 
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

      mamba install bioconductor-lfa

   and update with::

      mamba update bioconductor-lfa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lfa:<tag>

   (see `bioconductor-lfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lfa
   :alt:   (downloads)
.. |docker_bioconductor-lfa| image:: https://quay.io/repository/biocontainers/bioconductor-lfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lfa
.. _`bioconductor-lfa/tags`: https://quay.io/repository/biocontainers/bioconductor-lfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lfa";
        var versions = ["2.10.0","2.6.0","2.2.0","2.0.11","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lfa/README.html