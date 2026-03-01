:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgumi'
.. highlight: bash

fgumi
=====

.. conda:recipe:: fgumi
   :replaces_section_title:
   :noindex:

   High\-performance tools for UMI\-tagged sequencing data.

   :homepage: https://github.com/fulcrumgenomics/fgumi
   :documentation: https://github.com/fulcrumgenomics/fgumi/blob/fgumi-v0.1.1/README.md
   
   :license: MIT / MIT
   :recipe: /`fgumi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgumi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgumi/meta.yaml>`_

   


.. conda:package:: fgumi

   |downloads_fgumi| |docker_fgumi|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=14``
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-scales: 
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

      mamba install fgumi

   and update with::

      mamba update fgumi

  To create a new environment, run::

      mamba create --name myenvname fgumi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgumi:<tag>

   (see `fgumi/tags`_ for valid values for ``<tag>``)


.. |downloads_fgumi| image:: https://img.shields.io/conda/dn/bioconda/fgumi.svg?style=flat
   :target: https://anaconda.org/bioconda/fgumi
   :alt:   (downloads)
.. |docker_fgumi| image:: https://quay.io/repository/biocontainers/fgumi/status
   :target: https://quay.io/repository/biocontainers/fgumi
.. _`fgumi/tags`: https://quay.io/repository/biocontainers/fgumi?tab=tags


.. raw:: html

    <script>
        var package = "fgumi";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgumi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgumi/README.html