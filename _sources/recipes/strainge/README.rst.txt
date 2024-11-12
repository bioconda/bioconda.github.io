:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainge'
.. highlight: bash

strainge
========

.. conda:recipe:: strainge
   :replaces_section_title:
   :noindex:

   Strain Genome Explorer\: a tool suite for tracking and characterizing low\-abundance strains.

   :homepage: https://github.com/broadinstitute/strainge
   :license: BSD / BSD-3-Clause
   :recipe: /`strainge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainge/meta.yaml>`_

   


.. conda:package:: strainge

   |downloads_strainge| |docker_strainge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: 
   :depends intervaltree: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pysam: ``>=0.10``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-bio: ``>=0.5.8``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strainge

   and update with::

      mamba update strainge

  To create a new environment, run::

      mamba create --name myenvname strainge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strainge:<tag>

   (see `strainge/tags`_ for valid values for ``<tag>``)


.. |downloads_strainge| image:: https://img.shields.io/conda/dn/bioconda/strainge.svg?style=flat
   :target: https://anaconda.org/bioconda/strainge
   :alt:   (downloads)
.. |docker_strainge| image:: https://quay.io/repository/biocontainers/strainge/status
   :target: https://quay.io/repository/biocontainers/strainge
.. _`strainge/tags`: https://quay.io/repository/biocontainers/strainge?tab=tags


.. raw:: html

    <script>
        var package = "strainge";
        var versions = ["1.3.9","1.3.8","1.3.7","1.3.7","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainge/README.html