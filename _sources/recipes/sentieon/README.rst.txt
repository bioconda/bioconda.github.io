:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sentieon'
.. highlight: bash

sentieon
========

.. conda:recipe:: sentieon
   :replaces_section_title:
   :noindex:

   Accelerated performance bioinformatics tools for mapping and variant calling

   :homepage: https://www.sentieon.com
   :license: Commercial (requires license for use; redistribution allowed)
   :recipe: /`sentieon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon/meta.yaml>`_

   


.. conda:package:: sentieon

   |downloads_sentieon| |docker_sentieon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>202308.03-3</code>,  <code>202308.03-2</code>,  <code>202308.03-1</code>,  <code>202308.03-0</code>,  <code>202308.02-0</code>,  <code>202308.01-0</code>,  <code>202308-0</code>,  <code>202112.07-3</code>,  <code>202112.07-2</code>,  </span></summary>
      

      ``202308.03-3``,  ``202308.03-2``,  ``202308.03-1``,  ``202308.03-0``,  ``202308.02-0``,  ``202308.01-0``,  ``202308-0``,  ``202112.07-3``,  ``202112.07-2``,  ``202112.07-1``,  ``202112.07-0``,  ``202112.06-1``,  ``202112.06-0``,  ``202112.05-1``,  ``202112.05-0``,  ``202112.04-1``,  ``202112.04-0``,  ``202112.02-0``,  ``202112.01-0``,  ``202112-1``,  ``202112-0``,  ``202010.04-0``,  ``202010.02-0``,  ``201808.08-1``,  ``201808.08-0``,  ``201808.07-0``,  ``201808.05-0``,  ``201808.03-0``,  ``201808.02-0``,  ``201808.01-0``,  ``201808-0``,  ``201711.04-3``,  ``201711.04-2``,  ``201711.03-1``,  ``201711.03-0``,  ``201711.02-0``,  ``201711.01-2``,  ``201711.01-1``,  ``201711.01-0``,  ``201711-0``,  ``201704.03-0``,  ``201704.02-0``,  ``201704-0``,  ``201611.03-0``,  ``201611-0``,  ``201606-0``,  ``201603.02-1``,  ``201603.02-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libudev: 
   :depends libudev1: ``>=256.9``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=2.7``
   :depends zlib: 
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

      mamba install sentieon

   and update with::

      mamba update sentieon

  To create a new environment, run::

      mamba create --name myenvname sentieon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sentieon:<tag>

   (see `sentieon/tags`_ for valid values for ``<tag>``)


.. |downloads_sentieon| image:: https://img.shields.io/conda/dn/bioconda/sentieon.svg?style=flat
   :target: https://anaconda.org/bioconda/sentieon
   :alt:   (downloads)
.. |docker_sentieon| image:: https://quay.io/repository/biocontainers/sentieon/status
   :target: https://quay.io/repository/biocontainers/sentieon
.. _`sentieon/tags`: https://quay.io/repository/biocontainers/sentieon?tab=tags


.. raw:: html

    <script>
        var package = "sentieon";
        var versions = ["202308.03","202308.03","202308.03","202308.03","202308.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sentieon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sentieon/README.html