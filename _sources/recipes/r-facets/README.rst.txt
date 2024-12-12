:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-facets'
.. highlight: bash

r-facets
========

.. conda:recipe:: r-facets
   :replaces_section_title:
   :noindex:

   Cellular Fraction and Copy Numbers from Tumor Sequencing

   :homepage: https://github.com/mskcc/facets
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-facets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-facets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-facets/meta.yaml>`_
   :links: biotools: :biotools:`facets`

   


.. conda:package:: r-facets

   |downloads_r-facets| |docker_r-facets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-7</code>,  <code>0.6.2-6</code>,  <code>0.6.2-5</code>,  <code>0.6.2-4</code>,  <code>0.6.2-3</code>,  <code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-1</code>,  </span></summary>
      

      ``0.6.2-7``,  ``0.6.2-6``,  ``0.6.2-5``,  ``0.6.2-4``,  ``0.6.2-3``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.14-4``,  ``0.5.14-3``,  ``0.5.14-2``,  ``0.5.14-1``,  ``0.5.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=13.2.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pctgcdata: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-facets

   and update with::

      mamba update r-facets

  To create a new environment, run::

      mamba create --name myenvname r-facets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-facets:<tag>

   (see `r-facets/tags`_ for valid values for ``<tag>``)


.. |downloads_r-facets| image:: https://img.shields.io/conda/dn/bioconda/r-facets.svg?style=flat
   :target: https://anaconda.org/bioconda/r-facets
   :alt:   (downloads)
.. |docker_r-facets| image:: https://quay.io/repository/biocontainers/r-facets/status
   :target: https://quay.io/repository/biocontainers/r-facets
.. _`r-facets/tags`: https://quay.io/repository/biocontainers/r-facets?tab=tags


.. raw:: html

    <script>
        var package = "r-facets";
        var versions = ["0.6.2","0.6.2","0.6.2","0.6.2","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-facets/README.html