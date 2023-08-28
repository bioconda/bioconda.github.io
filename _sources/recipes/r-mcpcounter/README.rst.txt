:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mcpcounter'
.. highlight: bash

r-mcpcounter
============

.. conda:recipe:: r-mcpcounter
   :replaces_section_title:
   :noindex:

   Estimating tissue\-infiltrating immune and other stromal subpopulations abundances using gene expression

   :homepage: https://github.com/ebecht/MCPcounter
   :license: GPL / GPL-3
   :recipe: /`r-mcpcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mcpcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mcpcounter/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-016-1070-5`

   


.. conda:package:: r-mcpcounter

   |downloads_r-mcpcounter| |docker_r-mcpcounter|

   :versions:
      
      

      ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: ``>=2.6``
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

      mamba install r-mcpcounter

   and update with::

      mamba update r-mcpcounter

  To create a new environment, run::

      mamba create --name myenvname r-mcpcounter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mcpcounter:<tag>

   (see `r-mcpcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mcpcounter| image:: https://img.shields.io/conda/dn/bioconda/r-mcpcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mcpcounter
   :alt:   (downloads)
.. |docker_r-mcpcounter| image:: https://quay.io/repository/biocontainers/r-mcpcounter/status
   :target: https://quay.io/repository/biocontainers/r-mcpcounter
.. _`r-mcpcounter/tags`: https://quay.io/repository/biocontainers/r-mcpcounter?tab=tags


.. raw:: html

    <script>
        var package = "r-mcpcounter";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mcpcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mcpcounter/README.html