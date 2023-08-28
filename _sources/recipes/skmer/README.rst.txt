:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skmer'
.. highlight: bash

skmer
=====

.. conda:recipe:: skmer
   :replaces_section_title:
   :noindex:

   Assembly\-free and alignment\-free tool for estimating genomic distances between genome\-skims

   :homepage: https://github.com/shahab-sarmashghi/Skmer
   :license: BSD / BSD-3-Clause
   :recipe: /`skmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer/meta.yaml>`_

   


.. conda:package:: skmer

   |downloads_skmer| |docker_skmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.2-3``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends kmer-jellyfish: ``2.3``
   :depends mash: ``2.3``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends seqtk: ``1.3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install skmer

   and update with::

      mamba update skmer

  To create a new environment, run::

      mamba create --name myenvname skmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skmer:<tag>

   (see `skmer/tags`_ for valid values for ``<tag>``)


.. |downloads_skmer| image:: https://img.shields.io/conda/dn/bioconda/skmer.svg?style=flat
   :target: https://anaconda.org/bioconda/skmer
   :alt:   (downloads)
.. |docker_skmer| image:: https://quay.io/repository/biocontainers/skmer/status
   :target: https://quay.io/repository/biocontainers/skmer
.. _`skmer/tags`: https://quay.io/repository/biocontainers/skmer?tab=tags


.. raw:: html

    <script>
        var package = "skmer";
        var versions = ["3.3.0","3.2.1","3.1.0","3.1.0","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skmer/README.html