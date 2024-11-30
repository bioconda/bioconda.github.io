:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minet'
.. highlight: bash

bioconductor-minet
==================

.. conda:recipe:: bioconductor-minet
   :replaces_section_title:
   :noindex:

   Mutual Information NETworks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/minet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet/meta.yaml>`_
   :links: biotools: :biotools:`minet`, doi: :doi:`10.1186/1471-2105-9-461`

   This package implements various algorithms for inferring mutual information networks from data.


.. conda:package:: bioconductor-minet

   |downloads_bioconductor-minet| |docker_bioconductor-minet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.60.0-1</code>,  <code>3.60.0-0</code>,  <code>3.58.0-0</code>,  <code>3.56.0-2</code>,  <code>3.56.0-1</code>,  <code>3.56.0-0</code>,  <code>3.52.0-2</code>,  <code>3.52.0-1</code>,  <code>3.52.0-0</code>,  </span></summary>
      

      ``3.60.0-1``,  ``3.60.0-0``,  ``3.58.0-0``,  ``3.56.0-2``,  ``3.56.0-1``,  ``3.56.0-0``,  ``3.52.0-2``,  ``3.52.0-1``,  ``3.52.0-0``,  ``3.50.0-0``,  ``3.48.0-1``,  ``3.48.0-0``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.42.0-1``,  ``3.42.0-0``,  ``3.40.0-0``,  ``3.38.0-0``,  ``3.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-infotheo: 
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

      mamba install bioconductor-minet

   and update with::

      mamba update bioconductor-minet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-minet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minet:<tag>

   (see `bioconductor-minet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minet
   :alt:   (downloads)
.. |docker_bioconductor-minet| image:: https://quay.io/repository/biocontainers/bioconductor-minet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minet
.. _`bioconductor-minet/tags`: https://quay.io/repository/biocontainers/bioconductor-minet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minet";
        var versions = ["3.60.0","3.60.0","3.58.0","3.56.0","3.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minet/README.html