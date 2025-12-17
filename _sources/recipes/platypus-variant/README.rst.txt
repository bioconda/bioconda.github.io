:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platypus-variant'
.. highlight: bash

platypus-variant
================

.. conda:recipe:: platypus-variant
   :replaces_section_title:
   :noindex:

   A Haplotype\-Based Variant Caller For Next Generation Sequence Data

   :homepage: http://www.well.ox.ac.uk/platypus
   :license: GPLv3
   :recipe: /`platypus-variant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant/meta.yaml>`_

   


.. conda:package:: platypus-variant

   |downloads_platypus-variant| |docker_platypus-variant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1.2-6</code>,  <code>0.8.1.2-5</code>,  <code>0.8.1.2-4</code>,  <code>0.8.1.2-3</code>,  <code>0.8.1.2-2</code>,  <code>0.8.1.2-1</code>,  <code>0.8.1.2-0</code>,  <code>0.8.1.1-3</code>,  <code>0.8.1.1-2</code>,  </span></summary>
      

      ``0.8.1.2-6``,  ``0.8.1.2-5``,  ``0.8.1.2-4``,  ``0.8.1.2-3``,  ``0.8.1.2-2``,  ``0.8.1.2-1``,  ``0.8.1.2-0``,  ``0.8.1.1-3``,  ``0.8.1.1-2``,  ``0.8.1.1-1``,  ``0.8.1.1-0``,  ``0.8.1-1``,  ``0.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.24.0a0``
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install platypus-variant

   and update with::

      mamba update platypus-variant

  To create a new environment, run::

      mamba create --name myenvname platypus-variant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/platypus-variant:<tag>

   (see `platypus-variant/tags`_ for valid values for ``<tag>``)


.. |downloads_platypus-variant| image:: https://img.shields.io/conda/dn/bioconda/platypus-variant.svg?style=flat
   :target: https://anaconda.org/bioconda/platypus-variant
   :alt:   (downloads)
.. |docker_platypus-variant| image:: https://quay.io/repository/biocontainers/platypus-variant/status
   :target: https://quay.io/repository/biocontainers/platypus-variant
.. _`platypus-variant/tags`: https://quay.io/repository/biocontainers/platypus-variant?tab=tags


.. raw:: html

    <script>
        var package = "platypus-variant";
        var versions = ["0.8.1.2","0.8.1.2","0.8.1.2","0.8.1.2","0.8.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-variant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-variant/README.html