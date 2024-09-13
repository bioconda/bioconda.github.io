:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shorah'
.. highlight: bash

shorah
======

.. conda:recipe:: shorah/1.1.3
   :replaces_section_title:
   :noindex:

   The Short Reads Assembly into Haplotypes \(ShoRAH\) program for inferring viral haplotypes from NGS data

   :homepage: https://github.com/cbg-ethz/shorah
   :license: GPL3 / GPLv3
   :recipe: /`shorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah>`_/`1.1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.3/meta.yaml>`_
   :links: biotools: :biotools:`shorah`

   


.. conda:package:: shorah

   |downloads_shorah| |docker_shorah|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.99.2-8</code>,  <code>1.99.2-7</code>,  <code>1.99.2-6</code>,  <code>1.99.2-5</code>,  <code>1.99.2-4</code>,  <code>1.99.2-3</code>,  <code>1.99.2-2</code>,  <code>1.99.2-1</code>,  <code>1.99.2-0</code>,  </span></summary>
      

      ``1.99.2-8``,  ``1.99.2-7``,  ``1.99.2-6``,  ``1.99.2-5``,  ``1.99.2-4``,  ``1.99.2-3``,  ``1.99.2-2``,  ``1.99.2-1``,  ``1.99.2-0``,  ``1.99.1-1``,  ``1.99.1-0``,  ``1.99.0-8``,  ``1.99.0-7``,  ``1.99.0-6``,  ``1.99.0-5``,  ``1.99.0-4``,  ``1.99.0-3``,  ``1.99.0-2``,  ``1.99.0-1``,  ``1.99.0-0``,  ``1.1.3-11``,  ``1.1.3-10``,  ``1.1.3-9``,  ``1.1.3-8``,  ``1.1.3-7``,  ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install shorah

   and update with::

      mamba update shorah

  To create a new environment, run::

      mamba create --name myenvname shorah

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shorah:<tag>

   (see `shorah/tags`_ for valid values for ``<tag>``)


.. |downloads_shorah| image:: https://img.shields.io/conda/dn/bioconda/shorah.svg?style=flat
   :target: https://anaconda.org/bioconda/shorah
   :alt:   (downloads)
.. |docker_shorah| image:: https://quay.io/repository/biocontainers/shorah/status
   :target: https://quay.io/repository/biocontainers/shorah
.. _`shorah/tags`: https://quay.io/repository/biocontainers/shorah?tab=tags


.. raw:: html

    <script>
        var package = "shorah";
        var versions = ["1.99.2","1.99.2","1.99.2","1.99.2","1.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorah/README.html