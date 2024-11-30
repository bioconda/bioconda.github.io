:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smhasher'
.. highlight: bash

smhasher
========

.. conda:recipe:: smhasher
   :replaces_section_title:
   :noindex:

   Python extension for smhasher hash functions

   :homepage: http://github.com/phensley/python-smhasher
   :license: MIT / MIT License
   :recipe: /`smhasher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher/meta.yaml>`_

   


.. conda:package:: smhasher

   |downloads_smhasher| |docker_smhasher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.150.1-10</code>,  <code>0.150.1-9</code>,  <code>0.150.1-7</code>,  <code>0.150.1-6</code>,  <code>0.150.1-5</code>,  <code>0.150.1-4</code>,  <code>0.150.1-3</code>,  <code>0.150.1-2</code>,  <code>0.150.1-1</code>,  </span></summary>
      

      ``0.150.1-10``,  ``0.150.1-9``,  ``0.150.1-7``,  ``0.150.1-6``,  ``0.150.1-5``,  ``0.150.1-4``,  ``0.150.1-3``,  ``0.150.1-2``,  ``0.150.1-1``,  ``0.150.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install smhasher

   and update with::

      mamba update smhasher

  To create a new environment, run::

      mamba create --name myenvname smhasher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smhasher:<tag>

   (see `smhasher/tags`_ for valid values for ``<tag>``)


.. |downloads_smhasher| image:: https://img.shields.io/conda/dn/bioconda/smhasher.svg?style=flat
   :target: https://anaconda.org/bioconda/smhasher
   :alt:   (downloads)
.. |docker_smhasher| image:: https://quay.io/repository/biocontainers/smhasher/status
   :target: https://quay.io/repository/biocontainers/smhasher
.. _`smhasher/tags`: https://quay.io/repository/biocontainers/smhasher?tab=tags


.. raw:: html

    <script>
        var package = "smhasher";
        var versions = ["0.150.1","0.150.1","0.150.1","0.150.1","0.150.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smhasher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smhasher/README.html