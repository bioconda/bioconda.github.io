:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorax'
.. highlight: bash

lorax
=====

.. conda:recipe:: lorax
   :replaces_section_title:
   :noindex:

   A long\-read analysis toolbox for cancer genomics

   :homepage: https://github.com/tobiasrausch/lorax
   :license: BSD / BSD-3-Clause
   :recipe: /`lorax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.xgen.2023.100281`

   


.. conda:package:: lorax

   |downloads_lorax| |docker_lorax|

   :versions:
      
      

      ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.18,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lorax

   and update with::

      mamba update lorax

  To create a new environment, run::

      mamba create --name myenvname lorax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lorax:<tag>

   (see `lorax/tags`_ for valid values for ``<tag>``)


.. |downloads_lorax| image:: https://img.shields.io/conda/dn/bioconda/lorax.svg?style=flat
   :target: https://anaconda.org/bioconda/lorax
   :alt:   (downloads)
.. |docker_lorax| image:: https://quay.io/repository/biocontainers/lorax/status
   :target: https://quay.io/repository/biocontainers/lorax
.. _`lorax/tags`: https://quay.io/repository/biocontainers/lorax?tab=tags


.. raw:: html

    <script>
        var package = "lorax";
        var versions = ["0.3.9","0.3.8","0.3.7","0.3.7","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorax/README.html