:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stopfree'
.. highlight: bash

stopfree
========

.. conda:recipe:: stopfree
   :replaces_section_title:
   :noindex:

   Rust implementation of the stopFree coding potential tool

   :homepage: https://github.com/afg1/stopfree
   :documentation: https://pypi.org/project/stopfree/
   
   :license: Apache-2.0
   :recipe: /`stopfree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stopfree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stopfree/meta.yaml>`_

   A fast Rust implementation \(with Python bindings via PyO3\) of the stopFree
   coding potential tool. It measures the longest stop codon free length of
   sequence in each of the 6 possible reading frames\, calculates per\-sequence
   GC content\, and computes the probability of observing a stop\-free run of
   the given length under an iid model corrected for GC content.



.. conda:package:: stopfree

   |downloads_stopfree| |docker_stopfree|

   :versions:
      
      

      ``0.2.4-0``

      

   
   :depends libgcc: ``>=14``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends python_abi: ``3.14.* *_cp314``
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

      mamba install stopfree

   and update with::

      mamba update stopfree

  To create a new environment, run::

      mamba create --name myenvname stopfree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stopfree:<tag>

   (see `stopfree/tags`_ for valid values for ``<tag>``)


.. |downloads_stopfree| image:: https://img.shields.io/conda/dn/bioconda/stopfree.svg?style=flat
   :target: https://anaconda.org/bioconda/stopfree
   :alt:   (downloads)
.. |docker_stopfree| image:: https://quay.io/repository/biocontainers/stopfree/status
   :target: https://quay.io/repository/biocontainers/stopfree
.. _`stopfree/tags`: https://quay.io/repository/biocontainers/stopfree?tab=tags


.. raw:: html

    <script>
        var package = "stopfree";
        var versions = ["0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stopfree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stopfree/README.html