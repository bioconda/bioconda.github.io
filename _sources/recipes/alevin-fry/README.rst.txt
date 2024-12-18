:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alevin-fry'
.. highlight: bash

alevin-fry
==========

.. conda:recipe:: alevin-fry
   :replaces_section_title:
   :noindex:

   alevin\-fry is a tool for the efficient processing of single\-cell data based on RAD files produced by alevin

   :homepage: https://github.com/COMBINE-lab/alevin-fry
   :license: BSD 3-Clause
   :recipe: /`alevin-fry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry/meta.yaml>`_

   


.. conda:package:: alevin-fry

   |downloads_alevin-fry| |docker_alevin-fry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-2</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install alevin-fry

   and update with::

      mamba update alevin-fry

  To create a new environment, run::

      mamba create --name myenvname alevin-fry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alevin-fry:<tag>

   (see `alevin-fry/tags`_ for valid values for ``<tag>``)


.. |downloads_alevin-fry| image:: https://img.shields.io/conda/dn/bioconda/alevin-fry.svg?style=flat
   :target: https://anaconda.org/bioconda/alevin-fry
   :alt:   (downloads)
.. |docker_alevin-fry| image:: https://quay.io/repository/biocontainers/alevin-fry/status
   :target: https://quay.io/repository/biocontainers/alevin-fry
.. _`alevin-fry/tags`: https://quay.io/repository/biocontainers/alevin-fry?tab=tags


.. raw:: html

    <script>
        var package = "alevin-fry";
        var versions = ["0.11.0","0.11.0","0.10.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alevin-fry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alevin-fry/README.html