:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmergenie'
.. highlight: bash

kmergenie
=========

.. conda:recipe:: kmergenie
   :replaces_section_title:
   :noindex:

   KmerGenie estimates the best k\-mer length for genome de novo assembly

   :homepage: http://kmergenie.bx.psu.edu
   :license: free software license
   :recipe: /`kmergenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie/meta.yaml>`_
   :links: biotools: :biotools:`kmergenie`, doi: :doi:`10.1093/bioinformatics/btt310`

   


.. conda:package:: kmergenie

   |downloads_kmergenie| |docker_kmergenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7051-8</code>,  <code>1.7051-7</code>,  <code>1.7051-5</code>,  <code>1.7051-4</code>,  <code>1.7051-3</code>,  <code>1.7051-2</code>,  <code>1.7051-1</code>,  <code>1.7051-0</code>,  <code>1.7016-5</code>,  </span></summary>
      

      ``1.7051-8``,  ``1.7051-7``,  ``1.7051-5``,  ``1.7051-4``,  ``1.7051-3``,  ``1.7051-2``,  ``1.7051-1``,  ``1.7051-0``,  ``1.7016-5``,  ``1.7016-4``,  ``1.7016-3``,  ``1.7016-2``,  ``1.7016-1``,  ``1.7016-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install kmergenie

   and update with::

      mamba update kmergenie

  To create a new environment, run::

      mamba create --name myenvname kmergenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmergenie:<tag>

   (see `kmergenie/tags`_ for valid values for ``<tag>``)


.. |downloads_kmergenie| image:: https://img.shields.io/conda/dn/bioconda/kmergenie.svg?style=flat
   :target: https://anaconda.org/bioconda/kmergenie
   :alt:   (downloads)
.. |docker_kmergenie| image:: https://quay.io/repository/biocontainers/kmergenie/status
   :target: https://quay.io/repository/biocontainers/kmergenie
.. _`kmergenie/tags`: https://quay.io/repository/biocontainers/kmergenie?tab=tags


.. raw:: html

    <script>
        var package = "kmergenie";
        var versions = ["1.7051","1.7051","1.7051","1.7051","1.7051"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmergenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmergenie/README.html