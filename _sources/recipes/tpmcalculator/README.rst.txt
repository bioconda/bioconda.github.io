:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tpmcalculator'
.. highlight: bash

tpmcalculator
=============

.. conda:recipe:: tpmcalculator
   :replaces_section_title:
   :noindex:

   TPMCalculator quantifies mRNA abundance directly from the alignments by parsing BAM files.

   :homepage: https://github.com/NLM-DIR/TPMCalculator
   :license: Public Domain
   :recipe: /`tpmcalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator/meta.yaml>`_

   


.. conda:package:: tpmcalculator

   |downloads_tpmcalculator| |docker_tpmcalculator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6-0</code>,  <code>0.0.5-3</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  <code>0.0.4-2</code>,  <code>0.0.4-1</code>,  </span></summary>
      

      ``0.0.6-0``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install tpmcalculator

   and update with::

      mamba update tpmcalculator

  To create a new environment, run::

      mamba create --name myenvname tpmcalculator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tpmcalculator:<tag>

   (see `tpmcalculator/tags`_ for valid values for ``<tag>``)


.. |downloads_tpmcalculator| image:: https://img.shields.io/conda/dn/bioconda/tpmcalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/tpmcalculator
   :alt:   (downloads)
.. |docker_tpmcalculator| image:: https://quay.io/repository/biocontainers/tpmcalculator/status
   :target: https://quay.io/repository/biocontainers/tpmcalculator
.. _`tpmcalculator/tags`: https://quay.io/repository/biocontainers/tpmcalculator?tab=tags


.. raw:: html

    <script>
        var package = "tpmcalculator";
        var versions = ["0.0.6","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpmcalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpmcalculator/README.html