:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrsfast'
.. highlight: bash

mrsfast
=======

.. conda:recipe:: mrsfast
   :replaces_section_title:
   :noindex:

   mrsFAST \- micro\-read substitution\-only Fast Alignment Search Tool.

   :homepage: https://github.com/sfu-compbio/mrsfast
   :license: BSD
   :recipe: /`mrsfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrsfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrsfast/meta.yaml>`_

   


.. conda:package:: mrsfast

   |downloads_mrsfast| |docker_mrsfast|

   :versions:
      
      

      ``3.4.2-4``,  ``3.4.2-3``,  ``3.4.2-2``,  ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install mrsfast

   and update with::

      mamba update mrsfast

  To create a new environment, run::

      mamba create --name myenvname mrsfast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mrsfast:<tag>

   (see `mrsfast/tags`_ for valid values for ``<tag>``)


.. |downloads_mrsfast| image:: https://img.shields.io/conda/dn/bioconda/mrsfast.svg?style=flat
   :target: https://anaconda.org/bioconda/mrsfast
   :alt:   (downloads)
.. |docker_mrsfast| image:: https://quay.io/repository/biocontainers/mrsfast/status
   :target: https://quay.io/repository/biocontainers/mrsfast
.. _`mrsfast/tags`: https://quay.io/repository/biocontainers/mrsfast?tab=tags


.. raw:: html

    <script>
        var package = "mrsfast";
        var versions = ["3.4.2","3.4.2","3.4.2","3.4.2","3.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrsfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrsfast/README.html