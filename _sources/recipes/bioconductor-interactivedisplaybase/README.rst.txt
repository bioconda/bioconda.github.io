:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplaybase'
.. highlight: bash

bioconductor-interactivedisplaybase
===================================

.. conda:recipe:: bioconductor-interactivedisplaybase
   :replaces_section_title:
   :noindex:

   Base package for enabling powerful shiny web displays of Bioconductor objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/interactiveDisplayBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplaybase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplaybase`, doi: :doi:`10.1038/nmeth.3252`

   The interactiveDisplayBase package contains the the basic methods needed to generate interactive Shiny based display methods for Bioconductor objects.


.. conda:package:: bioconductor-interactivedisplaybase

   |downloads_bioconductor-interactivedisplaybase| |docker_bioconductor-interactivedisplaybase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-shiny: 
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

      mamba install bioconductor-interactivedisplaybase

   and update with::

      mamba update bioconductor-interactivedisplaybase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-interactivedisplaybase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interactivedisplaybase:<tag>

   (see `bioconductor-interactivedisplaybase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivedisplaybase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplaybase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivedisplaybase
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplaybase| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase
.. _`bioconductor-interactivedisplaybase/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interactivedisplaybase";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html