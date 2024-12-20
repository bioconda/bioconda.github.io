:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowfp'
.. highlight: bash

bioconductor-flowfp
===================

.. conda:recipe:: bioconductor-flowfp
   :replaces_section_title:
   :noindex:

   Fingerprinting for Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowFP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp/meta.yaml>`_
   :links: biotools: :biotools:`flowfp`, doi: :doi:`10.1155/2009/193947`

   Fingerprint generation of flow cytometry data\, used to facilitate the application of machine learning and datamining tools for flow cytometry.


.. conda:package:: bioconductor-flowfp

   |downloads_bioconductor-flowfp| |docker_bioconductor-flowfp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.55.0-1</code>,  <code>1.55.0-0</code>,  <code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.55.0-1``,  ``1.55.0-0``,  ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-flowviz: ``>=1.70.0,<1.71.0``
   :depends bioconductor-flowviz: ``>=1.70.0,<1.71.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-flowfp

   and update with::

      mamba update bioconductor-flowfp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowfp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowfp:<tag>

   (see `bioconductor-flowfp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowfp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowfp
   :alt:   (downloads)
.. |docker_bioconductor-flowfp| image:: https://quay.io/repository/biocontainers/bioconductor-flowfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowfp
.. _`bioconductor-flowfp/tags`: https://quay.io/repository/biocontainers/bioconductor-flowfp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowfp";
        var versions = ["1.64.0","1.60.0","1.60.0","1.58.0","1.55.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowfp/README.html