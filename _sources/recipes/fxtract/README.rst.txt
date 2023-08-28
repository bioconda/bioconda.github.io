:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fxtract'
.. highlight: bash

fxtract
=======

.. conda:recipe:: fxtract
   :replaces_section_title:
   :noindex:

   Extract sequences from a fastx file given a subsequence or identifier.

   :homepage: https://github.com/ctSkennerton/fxtract
   :license: MIT / MIT
   :recipe: /`fxtract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fxtract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fxtract/meta.yaml>`_

   


.. conda:package:: fxtract

   |downloads_fxtract| |docker_fxtract|

   :versions:
      
      

      ``2.4-2``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
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

      mamba install fxtract

   and update with::

      mamba update fxtract

  To create a new environment, run::

      mamba create --name myenvname fxtract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fxtract:<tag>

   (see `fxtract/tags`_ for valid values for ``<tag>``)


.. |downloads_fxtract| image:: https://img.shields.io/conda/dn/bioconda/fxtract.svg?style=flat
   :target: https://anaconda.org/bioconda/fxtract
   :alt:   (downloads)
.. |docker_fxtract| image:: https://quay.io/repository/biocontainers/fxtract/status
   :target: https://quay.io/repository/biocontainers/fxtract
.. _`fxtract/tags`: https://quay.io/repository/biocontainers/fxtract?tab=tags


.. raw:: html

    <script>
        var package = "fxtract";
        var versions = ["2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fxtract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fxtract/README.html