:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snap-aligner'
.. highlight: bash

snap-aligner
============

.. conda:recipe:: snap-aligner
   :replaces_section_title:
   :noindex:

   Scalable Nucleotide Alignment Program \-\- a fast and accurate read aligner for high\-throughput sequencing data.

   :homepage: https://snap.cs.berkeley.edu
   :documentation: https://www.microsoft.com/en-us/research/project/snap
   
   :developer docs: https://github.com/amplab/snap
   :license: APACHE / Apache-2.0
   :recipe: /`snap-aligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap-aligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap-aligner/meta.yaml>`_

   


.. conda:package:: snap-aligner

   |downloads_snap-aligner| |docker_snap-aligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.5-2</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.3-4</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  </span></summary>
      

      ``2.0.5-2``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0beta.23-0``,  ``1.0beta.18-0``,  ``1.0dev.97-3``,  ``1.0dev.97-2``,  ``1.0dev.97-1``,  ``1.0dev.97-0``,  ``1.0dev.96-4``,  ``1.0dev.96-3``,  ``1.0dev.96-2``,  ``1.0dev.96-1``,  ``1.0dev.96-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install snap-aligner

   and update with::

      mamba update snap-aligner

  To create a new environment, run::

      mamba create --name myenvname snap-aligner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snap-aligner:<tag>

   (see `snap-aligner/tags`_ for valid values for ``<tag>``)


.. |downloads_snap-aligner| image:: https://img.shields.io/conda/dn/bioconda/snap-aligner.svg?style=flat
   :target: https://anaconda.org/bioconda/snap-aligner
   :alt:   (downloads)
.. |docker_snap-aligner| image:: https://quay.io/repository/biocontainers/snap-aligner/status
   :target: https://quay.io/repository/biocontainers/snap-aligner
.. _`snap-aligner/tags`: https://quay.io/repository/biocontainers/snap-aligner?tab=tags


.. raw:: html

    <script>
        var package = "snap-aligner";
        var versions = ["2.0.5","2.0.5","2.0.5","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snap-aligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snap-aligner/README.html