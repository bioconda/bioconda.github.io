:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverm'
.. highlight: bash

coverm
======

.. conda:recipe:: coverm
   :replaces_section_title:
   :noindex:

   CoverM aims to be a configurable\, easy to use and fast DNA read coverage and relative abundance calculator focused on metagenomics applications

   :homepage: https://github.com/wwood/CoverM
   :license: GPL3 / GPL3
   :recipe: /`coverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm/meta.yaml>`_

   


.. conda:package:: coverm

   |downloads_coverm| |docker_coverm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.1-6</code>,  <code>0.6.1-5</code>,  <code>0.6.1-4</code>,  <code>0.6.1-3</code>,  <code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0.alpha7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.17``
   :depends dashing: ``>=0.4.0``
   :depends fastani: ``>=1.31``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: ``>=2.24``
   :depends openblas: 
   :depends samtools: ``>=1.9``
   :depends starcode: 
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

      mamba install coverm

   and update with::

      mamba update coverm

  To create a new environment, run::

      mamba create --name myenvname coverm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coverm:<tag>

   (see `coverm/tags`_ for valid values for ``<tag>``)


.. |downloads_coverm| image:: https://img.shields.io/conda/dn/bioconda/coverm.svg?style=flat
   :target: https://anaconda.org/bioconda/coverm
   :alt:   (downloads)
.. |docker_coverm| image:: https://quay.io/repository/biocontainers/coverm/status
   :target: https://quay.io/repository/biocontainers/coverm
.. _`coverm/tags`: https://quay.io/repository/biocontainers/coverm?tab=tags


.. raw:: html

    <script>
        var package = "coverm";
        var versions = ["0.7.0","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverm/README.html