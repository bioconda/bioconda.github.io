:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treekin'
.. highlight: bash

treekin
=======

.. conda:recipe:: treekin
   :replaces_section_title:
   :noindex:

   Compute folding dynamics on coarse grained version of an energy landscape by numeric integration of a Markov process

   :homepage: https://www.tbi.univie.ac.at/RNA/Treekin/
   :license: GPL
   :recipe: /`treekin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin/meta.yaml>`_

   


.. conda:package:: treekin

   |downloads_treekin| |docker_treekin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.3.1-3</code>,  </span></summary>
      

      ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends lapack: ``<3.9``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
   :depends mlapack: 
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

      mamba install treekin

   and update with::

      mamba update treekin

  To create a new environment, run::

      mamba create --name myenvname treekin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treekin:<tag>

   (see `treekin/tags`_ for valid values for ``<tag>``)


.. |downloads_treekin| image:: https://img.shields.io/conda/dn/bioconda/treekin.svg?style=flat
   :target: https://anaconda.org/bioconda/treekin
   :alt:   (downloads)
.. |docker_treekin| image:: https://quay.io/repository/biocontainers/treekin/status
   :target: https://quay.io/repository/biocontainers/treekin
.. _`treekin/tags`: https://quay.io/repository/biocontainers/treekin?tab=tags


.. raw:: html

    <script>
        var package = "treekin";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treekin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treekin/README.html