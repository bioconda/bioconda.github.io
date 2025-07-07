:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gaftools'
.. highlight: bash

gaftools
========

.. conda:recipe:: gaftools
   :replaces_section_title:
   :noindex:

   gaftools is a fast and comprehensive toolkit designed for processing pangenome alignments in GAF format

   :homepage: https://github.com/marschall-lab/gaftools
   :documentation: https://gaftools.readthedocs.io/en/latest/index.html
   
   :developer docs: https://github.com/marschall-lab
   :license: MIT / MIT
   :recipe: /`gaftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaftools/meta.yaml>`_

   


.. conda:package:: gaftools

   |downloads_gaftools| |docker_gaftools|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends pywfa: ``0.5.1``
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

      mamba install gaftools

   and update with::

      mamba update gaftools

  To create a new environment, run::

      mamba create --name myenvname gaftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gaftools:<tag>

   (see `gaftools/tags`_ for valid values for ``<tag>``)


.. |downloads_gaftools| image:: https://img.shields.io/conda/dn/bioconda/gaftools.svg?style=flat
   :target: https://anaconda.org/bioconda/gaftools
   :alt:   (downloads)
.. |docker_gaftools| image:: https://quay.io/repository/biocontainers/gaftools/status
   :target: https://quay.io/repository/biocontainers/gaftools
.. _`gaftools/tags`: https://quay.io/repository/biocontainers/gaftools?tab=tags


.. raw:: html

    <script>
        var package = "gaftools";
        var versions = ["1.2.0","1.1.3","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gaftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gaftools/README.html