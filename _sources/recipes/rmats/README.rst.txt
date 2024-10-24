:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats'
.. highlight: bash

rmats
=====

.. conda:recipe:: rmats
   :replaces_section_title:
   :noindex:

   MATS is a computational tool to detect differential alternative splicing events from RNA\-Seq data.

   :homepage: http://rnaseq-mats.sourceforge.net
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`rmats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats/meta.yaml>`_

   


.. conda:package:: rmats

   |downloads_rmats| |docker_rmats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-3</code>,  <code>4.3.0-2</code>,  <code>4.3.0-1</code>,  <code>4.3.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.2-5</code>,  <code>4.1.2-4</code>,  <code>4.1.2-3</code>,  <code>4.1.2-2</code>,  </span></summary>
      

      ``4.3.0-3``,  ``4.3.0-2``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.2-5``,  ``4.1.2-4``,  ``4.1.2-3``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-4``,  ``4.1.0-3``,  ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.2-4``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``4.0.2-0``,  ``3.2.5-2``,  ``3.2.5-1``,  ``3.2.5-0``,  ``3.2.2beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends gsl: ``2.5.*``
   :depends gsl: ``>=2.5,<2.6.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=12``
   :depends libgfortran: 
   :depends libgfortran5: ``>=12.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends star: ``>=2.5``
   :depends zlib: 
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

      mamba install rmats

   and update with::

      mamba update rmats

  To create a new environment, run::

      mamba create --name myenvname rmats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmats:<tag>

   (see `rmats/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats| image:: https://img.shields.io/conda/dn/bioconda/rmats.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats
   :alt:   (downloads)
.. |docker_rmats| image:: https://quay.io/repository/biocontainers/rmats/status
   :target: https://quay.io/repository/biocontainers/rmats
.. _`rmats/tags`: https://quay.io/repository/biocontainers/rmats?tab=tags


.. raw:: html

    <script>
        var package = "rmats";
        var versions = ["4.3.0","4.3.0","4.3.0","4.3.0","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats/README.html