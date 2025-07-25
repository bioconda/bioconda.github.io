:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covtobed'
.. highlight: bash

covtobed
========

.. conda:recipe:: covtobed
   :replaces_section_title:
   :noindex:

   covtobed \- generate a BED file of covered regions from a BAM file.

   :homepage: https://github.com/telatin/covtobed
   :documentation: https://github.com/telatin/covtobed/wiki
   
   :license: MIT / MIT
   :recipe: /`covtobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covtobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covtobed/meta.yaml>`_

   


.. conda:package:: covtobed

   |downloads_covtobed| |docker_covtobed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.5-5</code>,  <code>1.3.5-4</code>,  <code>1.3.5-3</code>,  <code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.5-5``,  ``1.3.5-4``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6-0``,  ``0.4-0``,  ``0.3-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``2.5.3``
   :depends bamtools: ``>=2.5.3,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install covtobed

   and update with::

      mamba update covtobed

  To create a new environment, run::

      mamba create --name myenvname covtobed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/covtobed:<tag>

   (see `covtobed/tags`_ for valid values for ``<tag>``)


.. |downloads_covtobed| image:: https://img.shields.io/conda/dn/bioconda/covtobed.svg?style=flat
   :target: https://anaconda.org/bioconda/covtobed
   :alt:   (downloads)
.. |docker_covtobed| image:: https://quay.io/repository/biocontainers/covtobed/status
   :target: https://quay.io/repository/biocontainers/covtobed
.. _`covtobed/tags`: https://quay.io/repository/biocontainers/covtobed?tab=tags


.. raw:: html

    <script>
        var package = "covtobed";
        var versions = ["1.4.0","1.3.5","1.3.5","1.3.5","1.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covtobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covtobed/README.html