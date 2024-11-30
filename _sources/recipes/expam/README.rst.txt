:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expam'
.. highlight: bash

expam
=====

.. conda:recipe:: expam
   :replaces_section_title:
   :noindex:

   Metagenomic profiling using a reference phylogeny

   :homepage: https://github.com/seansolari/expam
   :documentation: https://expam.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`expam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam/meta.yaml>`_

   


.. conda:package:: expam

   |downloads_expam| |docker_expam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0.5-0</code>,  <code>1.2.2.5-1</code>,  <code>1.2.2.5-0</code>,  <code>1.2.2.4-0</code>,  <code>1.2.2.3-0</code>,  <code>1.2.2.1-0</code>,  <code>1.2.2-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.4.0.5-0``,  ``1.2.2.5-1``,  ``1.2.2.5-0``,  ``1.2.2.4-0``,  ``1.2.2.3-0``,  ``1.2.2.1-0``,  ``1.2.2-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends ete3: 
   :depends libgcc: ``>=12``
   :depends matplotlib-base: 
   :depends multiprocess: 
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=1.22.0``
   :depends pandas: 
   :depends psutil: 
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
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

      mamba install expam

   and update with::

      mamba update expam

  To create a new environment, run::

      mamba create --name myenvname expam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/expam:<tag>

   (see `expam/tags`_ for valid values for ``<tag>``)


.. |downloads_expam| image:: https://img.shields.io/conda/dn/bioconda/expam.svg?style=flat
   :target: https://anaconda.org/bioconda/expam
   :alt:   (downloads)
.. |docker_expam| image:: https://quay.io/repository/biocontainers/expam/status
   :target: https://quay.io/repository/biocontainers/expam
.. _`expam/tags`: https://quay.io/repository/biocontainers/expam?tab=tags


.. raw:: html

    <script>
        var package = "expam";
        var versions = ["1.4.0.5","1.2.2.5","1.2.2.5","1.2.2.4","1.2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expam/README.html