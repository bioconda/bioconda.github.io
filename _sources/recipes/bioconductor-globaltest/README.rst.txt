:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globaltest'
.. highlight: bash

bioconductor-globaltest
=======================

.. conda:recipe:: bioconductor-globaltest
   :replaces_section_title:
   :noindex:

   Testing Groups of Covariates\/Features for Association with a Response Variable\, with Applications to Gene Set Testing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/globaltest.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globaltest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest/meta.yaml>`_
   :links: biotools: :biotools:`globaltest`

   The global test tests groups of covariates \(or features\) for association with a response variable. This package implements the test with diagnostic plots and multiple testing utilities\, along with several functions to facilitate the use of this test for gene set testing of GO and KEGG terms.


.. conda:package:: bioconductor-globaltest

   |downloads_bioconductor-globaltest| |docker_bioconductor-globaltest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.60.0-0</code>,  <code>5.56.0-0</code>,  <code>5.54.0-0</code>,  <code>5.52.0-0</code>,  <code>5.48.0-0</code>,  <code>5.46.0-0</code>,  <code>5.44.0-1</code>,  <code>5.44.0-0</code>,  <code>5.42.0-0</code>,  </span></summary>
      

      ``5.60.0-0``,  ``5.56.0-0``,  ``5.54.0-0``,  ``5.52.0-0``,  ``5.48.0-0``,  ``5.46.0-0``,  ``5.44.0-1``,  ``5.44.0-0``,  ``5.42.0-0``,  ``5.40.0-0``,  ``5.38.0-1``,  ``5.36.0-1``,  ``5.36.0-0``,  ``5.34.1-0``,  ``5.32.0-0``,  ``5.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-survival: 
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

      mamba install bioconductor-globaltest

   and update with::

      mamba update bioconductor-globaltest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-globaltest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-globaltest:<tag>

   (see `bioconductor-globaltest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-globaltest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globaltest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-globaltest
   :alt:   (downloads)
.. |docker_bioconductor-globaltest| image:: https://quay.io/repository/biocontainers/bioconductor-globaltest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globaltest
.. _`bioconductor-globaltest/tags`: https://quay.io/repository/biocontainers/bioconductor-globaltest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-globaltest";
        var versions = ["5.60.0","5.56.0","5.54.0","5.52.0","5.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globaltest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globaltest/README.html