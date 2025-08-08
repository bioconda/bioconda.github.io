:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseg'
.. highlight: bash

rseg
====

.. conda:recipe:: rseg
   :replaces_section_title:
   :noindex:

   The RSEG software package is used to analyze ChIP\-Seq data\, especially for identifying genomic regions and their boundaries marked by diffusive histone modification markers\, such as H3K36me3 and H3K27me3.

   :homepage: https://smithlabresearch.org/software/rseg
   :documentation: https://smithlabresearch.org/wp-content/uploads/rseg_manual-v0.4.9.pdf
   
   :developer docs: https://github.com/smithlabcode/rseg
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg/meta.yaml>`_

   


.. conda:package:: rseg

   |downloads_rseg| |docker_rseg|

   :versions:
      
      

      ``0.4.9-3``,  ``0.4.9-1``,  ``0.4.9-0``

      

   
   :depends bayestyper: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install rseg

   and update with::

      mamba update rseg

  To create a new environment, run::

      mamba create --name myenvname rseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rseg:<tag>

   (see `rseg/tags`_ for valid values for ``<tag>``)


.. |downloads_rseg| image:: https://img.shields.io/conda/dn/bioconda/rseg.svg?style=flat
   :target: https://anaconda.org/bioconda/rseg
   :alt:   (downloads)
.. |docker_rseg| image:: https://quay.io/repository/biocontainers/rseg/status
   :target: https://quay.io/repository/biocontainers/rseg
.. _`rseg/tags`: https://quay.io/repository/biocontainers/rseg?tab=tags


.. raw:: html

    <script>
        var package = "rseg";
        var versions = ["0.4.9","0.4.9","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseg/README.html