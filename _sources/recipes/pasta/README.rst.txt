:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasta'
.. highlight: bash

pasta
=====

.. conda:recipe:: pasta
   :replaces_section_title:
   :noindex:

   An implementation of the PASTA \(Practical Alignment using Sate and TrAnsitivity\) algorithm

   :homepage: https://github.com/smirarab/pasta
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta/meta.yaml>`_

   


.. conda:package:: pasta

   |downloads_pasta| |docker_pasta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.2-3</code>,  <code>1.9.2-2</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  <code>1.9.0-0</code>,  <code>1.7.8-4</code>,  <code>1.7.8-3</code>,  <code>1.7.8-2</code>,  <code>1.7.8-0</code>,  </span></summary>
      

      ``1.9.2-3``,  ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.0-0``,  ``1.7.8-4``,  ``1.7.8-3``,  ``1.7.8-2``,  ``1.7.8-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends clustalw: ``>=2.1,<2.2.0a0``
   :depends dendropy: ``>=5.0.1,<6.0a0``
   :depends fasttree: ``>=2.1.11,<3.0a0``
   :depends hmmer: ``>=3.4,<3.5.0a0``
   :depends mafft: ``>=7.526,<8.0a0``
   :depends muscle: ``<4``
   :depends muscle: ``>=3.8.1551,<4.0a0``
   :depends openjdk: 
   :depends pcre: ``>=8.45,<9.0a0``
   :depends prank: ``>=170427,<170428.0a0``
   :depends pymongo: ``>=3.3.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends raxml: ``>=8.2.13,<9.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pasta

   and update with::

      mamba update pasta

  To create a new environment, run::

      mamba create --name myenvname pasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pasta:<tag>

   (see `pasta/tags`_ for valid values for ``<tag>``)


.. |downloads_pasta| image:: https://img.shields.io/conda/dn/bioconda/pasta.svg?style=flat
   :target: https://anaconda.org/bioconda/pasta
   :alt:   (downloads)
.. |docker_pasta| image:: https://quay.io/repository/biocontainers/pasta/status
   :target: https://quay.io/repository/biocontainers/pasta
.. _`pasta/tags`: https://quay.io/repository/biocontainers/pasta?tab=tags


.. raw:: html

    <script>
        var package = "pasta";
        var versions = ["1.9.2","1.9.2","1.9.2","1.9.2","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasta/README.html