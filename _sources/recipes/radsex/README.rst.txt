:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radsex'
.. highlight: bash

radsex
======

.. conda:recipe:: radsex
   :replaces_section_title:
   :noindex:

   The radsex software is part of RADSex\, a computational workflow for the analysis of sex\-determination using RAD\-Sequencing data.

   :homepage: https://sexgenomicstoolkit.github.io/html/radsex/introduction.html
   :license: GPL3
   :recipe: /`radsex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radsex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radsex/meta.yaml>`_

   


.. conda:package:: radsex

   |downloads_radsex| |docker_radsex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0c-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install radsex

   and update with::

      mamba update radsex

  To create a new environment, run::

      mamba create --name myenvname radsex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/radsex:<tag>

   (see `radsex/tags`_ for valid values for ``<tag>``)


.. |downloads_radsex| image:: https://img.shields.io/conda/dn/bioconda/radsex.svg?style=flat
   :target: https://anaconda.org/bioconda/radsex
   :alt:   (downloads)
.. |docker_radsex| image:: https://quay.io/repository/biocontainers/radsex/status
   :target: https://quay.io/repository/biocontainers/radsex
.. _`radsex/tags`: https://quay.io/repository/biocontainers/radsex?tab=tags


.. raw:: html

    <script>
        var package = "radsex";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radsex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radsex/README.html