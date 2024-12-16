:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequencetools'
.. highlight: bash

sequencetools
=============

.. conda:recipe:: sequencetools
   :replaces_section_title:
   :noindex:

   Tools for population genetics on sequencing data

   :homepage: https://github.com/stschiff/sequenceTools
   :license: MIT
   :recipe: /`sequencetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequencetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequencetools/meta.yaml>`_

   


.. conda:package:: sequencetools

   |downloads_sequencetools| |docker_sequencetools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.4.0-1</code>,  <code>1.5.4.0-0</code>,  <code>1.5.3.2-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.4.0.6-1</code>,  </span></summary>
      

      ``1.5.4.0-1``,  ``1.5.4.0-0``,  ``1.5.3.2-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.0.6-1``,  ``1.4.0.6-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends samtools: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sequencetools

   and update with::

      mamba update sequencetools

  To create a new environment, run::

      mamba create --name myenvname sequencetools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequencetools:<tag>

   (see `sequencetools/tags`_ for valid values for ``<tag>``)


.. |downloads_sequencetools| image:: https://img.shields.io/conda/dn/bioconda/sequencetools.svg?style=flat
   :target: https://anaconda.org/bioconda/sequencetools
   :alt:   (downloads)
.. |docker_sequencetools| image:: https://quay.io/repository/biocontainers/sequencetools/status
   :target: https://quay.io/repository/biocontainers/sequencetools
.. _`sequencetools/tags`: https://quay.io/repository/biocontainers/sequencetools?tab=tags


.. raw:: html

    <script>
        var package = "sequencetools";
        var versions = ["1.5.4.0","1.5.4.0","1.5.3.2","1.5.3","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequencetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequencetools/README.html