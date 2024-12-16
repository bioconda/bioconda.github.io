:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ndexr'
.. highlight: bash

bioconductor-ndexr
==================

.. conda:recipe:: bioconductor-ndexr
   :replaces_section_title:
   :noindex:

   NDEx R client library

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ndexr.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-ndexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr/meta.yaml>`_

   This package offers an interface to NDEx servers\, e.g. the public server at http\:\/\/ndexbio.org\/. It can retrieve and save networks via the API. Networks are offered as RCX object and as igraph representation.


.. conda:package:: bioconductor-ndexr

   |downloads_bioconductor-ndexr| |docker_bioconductor-ndexr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rcx: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ndexr

   and update with::

      mamba update bioconductor-ndexr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ndexr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ndexr:<tag>

   (see `bioconductor-ndexr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ndexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ndexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ndexr
   :alt:   (downloads)
.. |docker_bioconductor-ndexr| image:: https://quay.io/repository/biocontainers/bioconductor-ndexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ndexr
.. _`bioconductor-ndexr/tags`: https://quay.io/repository/biocontainers/bioconductor-ndexr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ndexr";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ndexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ndexr/README.html