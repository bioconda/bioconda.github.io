:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-tombo'
.. highlight: bash

ont-tombo
=========

.. conda:recipe:: ont-tombo
   :replaces_section_title:
   :noindex:

   Detection of modified bases from raw nanopore sequencing data.

   :homepage: https://nanoporetech.github.io/tombo/
   :license: mpl-2.0
   :recipe: /`ont-tombo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-tombo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-tombo/meta.yaml>`_

   


.. conda:package:: ont-tombo

   |downloads_ont-tombo| |docker_ont-tombo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-2</code>,  <code>1.5.1-0</code>,  <code>1.5-2</code>,  <code>1.5-1</code>,  <code>1.5-0</code>,  <code>1.4-0</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2.1.2-0</code>,  </span></summary>
      

      ``1.5.1-2``,  ``1.5.1-0``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1.2-0``,  ``1.2.1-0``,  ``1.2.1b-0``,  ``1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: 
   :depends h5py: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends mappy: ``>=2.10``
   :depends numpy: 
   :depends pyfaidx: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends rpy2: ``<=2.8.6``
   :depends scipy: 
   :depends tqdm: 
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

      mamba install ont-tombo

   and update with::

      mamba update ont-tombo

  To create a new environment, run::

      mamba create --name myenvname ont-tombo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ont-tombo:<tag>

   (see `ont-tombo/tags`_ for valid values for ``<tag>``)


.. |downloads_ont-tombo| image:: https://img.shields.io/conda/dn/bioconda/ont-tombo.svg?style=flat
   :target: https://anaconda.org/bioconda/ont-tombo
   :alt:   (downloads)
.. |docker_ont-tombo| image:: https://quay.io/repository/biocontainers/ont-tombo/status
   :target: https://quay.io/repository/biocontainers/ont-tombo
.. _`ont-tombo/tags`: https://quay.io/repository/biocontainers/ont-tombo?tab=tags


.. raw:: html

    <script>
        var package = "ont-tombo";
        var versions = ["1.5.1","1.5.1","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-tombo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-tombo/README.html