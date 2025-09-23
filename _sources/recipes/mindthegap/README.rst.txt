:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mindthegap'
.. highlight: bash

mindthegap
==========

.. conda:recipe:: mindthegap
   :replaces_section_title:
   :noindex:

   MindTheGap performs detection and assembly of DNA insertion variants in NGS read datasets with respect to a reference genome. MindTheGap can also be used as a genome assembly finishing tool\, it can fill the gaps between a set of input contigs without any a priori on their relative order and orientation.

   :homepage: https://github.com/GATB/mindthegap
   :license: AGPL-3.0-or-later
   :recipe: /`mindthegap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindthegap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindthegap/meta.yaml>`_
   :links: biotools: :biotools:`mindthegap`, doi: :doi:`10.1093/bioinformatics/btu545`

   


.. conda:package:: mindthegap

   |downloads_mindthegap| |docker_mindthegap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-6</code>,  <code>2.3.0-5</code>,  <code>2.3.0-4</code>,  <code>2.3.0-3</code>,  <code>2.3.0-2</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.3-1</code>,  <code>2.2.3-0</code>,  </span></summary>
      

      ``2.3.0-6``,  ``2.3.0-5``,  ``2.3.0-4``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mindthegap

   and update with::

      mamba update mindthegap

  To create a new environment, run::

      mamba create --name myenvname mindthegap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mindthegap:<tag>

   (see `mindthegap/tags`_ for valid values for ``<tag>``)


.. |downloads_mindthegap| image:: https://img.shields.io/conda/dn/bioconda/mindthegap.svg?style=flat
   :target: https://anaconda.org/bioconda/mindthegap
   :alt:   (downloads)
.. |docker_mindthegap| image:: https://quay.io/repository/biocontainers/mindthegap/status
   :target: https://quay.io/repository/biocontainers/mindthegap
.. _`mindthegap/tags`: https://quay.io/repository/biocontainers/mindthegap?tab=tags


.. raw:: html

    <script>
        var package = "mindthegap";
        var versions = ["2.3.0","2.3.0","2.3.0","2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mindthegap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mindthegap/README.html