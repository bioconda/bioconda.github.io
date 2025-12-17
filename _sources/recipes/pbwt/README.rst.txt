:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbwt'
.. highlight: bash

pbwt
====

.. conda:recipe:: pbwt
   :replaces_section_title:
   :noindex:

   Positional Burrows\-Wheeler Transform \-  methods for storing and computing on genome variation data sets

   :homepage: https://github.com/richarddurbin/pbwt
   :license: Apache / Apache-2.0
   :recipe: /`pbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbwt/meta.yaml>`_
   :links: biotools: :biotools:`pbwt`

   


.. conda:package:: pbwt

   |downloads_pbwt| |docker_pbwt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0-11</code>,  <code>3.0-10</code>,  <code>3.0-9</code>,  <code>3.0-8</code>,  <code>3.0-7</code>,  <code>3.0-6</code>,  <code>3.0-5</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  </span></summary>
      

      ``3.0-11``,  ``3.0-10``,  ``3.0-9``,  ``3.0-8``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.21,<1.24.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install pbwt

   and update with::

      mamba update pbwt

  To create a new environment, run::

      mamba create --name myenvname pbwt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbwt:<tag>

   (see `pbwt/tags`_ for valid values for ``<tag>``)


.. |downloads_pbwt| image:: https://img.shields.io/conda/dn/bioconda/pbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/pbwt
   :alt:   (downloads)
.. |docker_pbwt| image:: https://quay.io/repository/biocontainers/pbwt/status
   :target: https://quay.io/repository/biocontainers/pbwt
.. _`pbwt/tags`: https://quay.io/repository/biocontainers/pbwt?tab=tags


.. raw:: html

    <script>
        var package = "pbwt";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbwt/README.html