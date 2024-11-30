:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnparser'
.. highlight: bash

gnparser
========

.. conda:recipe:: gnparser
   :replaces_section_title:
   :noindex:

   GNparser normalises scientific names and extracts their semantic elements

   :homepage: https://parser.globalnames.org/
   :developer docs: https://github.com/gnames/gnparser
   :license: MIT / MIT
   :recipe: /`gnparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnparser/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.5281/zenodo.5111569`

   


.. conda:package:: gnparser

   |downloads_gnparser| |docker_gnparser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.4-0</code>,  <code>1.10.3-1</code>,  <code>1.10.3-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.2-0</code>,  <code>1.9.1-0</code>,  </span></summary>
      

      ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.4-0``,  ``1.10.3-1``,  ``1.10.3-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install gnparser

   and update with::

      mamba update gnparser

  To create a new environment, run::

      mamba create --name myenvname gnparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnparser:<tag>

   (see `gnparser/tags`_ for valid values for ``<tag>``)


.. |downloads_gnparser| image:: https://img.shields.io/conda/dn/bioconda/gnparser.svg?style=flat
   :target: https://anaconda.org/bioconda/gnparser
   :alt:   (downloads)
.. |docker_gnparser| image:: https://quay.io/repository/biocontainers/gnparser/status
   :target: https://quay.io/repository/biocontainers/gnparser
.. _`gnparser/tags`: https://quay.io/repository/biocontainers/gnparser?tab=tags


.. raw:: html

    <script>
        var package = "gnparser";
        var versions = ["1.11.1","1.11.0","1.10.4","1.10.3","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnparser/README.html