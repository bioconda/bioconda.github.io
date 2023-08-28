:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ra'
.. highlight: bash

ra
==

.. conda:recipe:: ra
   :replaces_section_title:
   :noindex:

   Ra is short for RNA Assembler and it is a C\+\+ implementation of an overlap\-layout\-consensus transcriptome assembler.

   :homepage: https://github.com/mariokostelac/ra
   :license: GPL3
   :recipe: /`ra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra/meta.yaml>`_

   


.. conda:package:: ra

   |downloads_ra| |docker_ra|

   :versions:
      
      

      ``0.9-6``,  ``0.9-5``,  ``0.9-4``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install ra

   and update with::

      mamba update ra

  To create a new environment, run::

      mamba create --name myenvname ra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ra:<tag>

   (see `ra/tags`_ for valid values for ``<tag>``)


.. |downloads_ra| image:: https://img.shields.io/conda/dn/bioconda/ra.svg?style=flat
   :target: https://anaconda.org/bioconda/ra
   :alt:   (downloads)
.. |docker_ra| image:: https://quay.io/repository/biocontainers/ra/status
   :target: https://quay.io/repository/biocontainers/ra
.. _`ra/tags`: https://quay.io/repository/biocontainers/ra?tab=tags


.. raw:: html

    <script>
        var package = "ra";
        var versions = ["0.9","0.9","0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ra/README.html