:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysamstats'
.. highlight: bash

pysamstats
==========

.. conda:recipe:: pysamstats
   :replaces_section_title:
   :noindex:

   Calculate read mapping stats from SAM\/BAM\/CRAM

   :homepage: https://github.com/alimanfoo/pysamstats
   :license: MIT
   :recipe: /`pysamstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats/meta.yaml>`_
   :links: biotools: :biotools:`pysamstats`

   


.. conda:package:: pysamstats

   |downloads_pysamstats| |docker_pysamstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-11</code>,  <code>1.1.2-10</code>,  <code>1.1.2-9</code>,  <code>1.1.2-8</code>,  <code>1.1.2-7</code>,  <code>1.1.2-6</code>,  <code>1.1.2-5</code>,  <code>1.1.2-4</code>,  <code>1.1.2-3</code>,  </span></summary>
      

      ``1.1.2-11``,  ``1.1.2-10``,  ``1.1.2-9``,  ``1.1.2-8``,  ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.24.3-0``,  ``0.24.2-1``,  ``0.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends pysam: ``>=0.22.1,<0.22.2.0a0``
   :depends pysam: ``>=0.22.1,<0.23.0a0``
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pysamstats

   and update with::

      mamba update pysamstats

  To create a new environment, run::

      mamba create --name myenvname pysamstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysamstats:<tag>

   (see `pysamstats/tags`_ for valid values for ``<tag>``)


.. |downloads_pysamstats| image:: https://img.shields.io/conda/dn/bioconda/pysamstats.svg?style=flat
   :target: https://anaconda.org/bioconda/pysamstats
   :alt:   (downloads)
.. |docker_pysamstats| image:: https://quay.io/repository/biocontainers/pysamstats/status
   :target: https://quay.io/repository/biocontainers/pysamstats
.. _`pysamstats/tags`: https://quay.io/repository/biocontainers/pysamstats?tab=tags


.. raw:: html

    <script>
        var package = "pysamstats";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysamstats/README.html