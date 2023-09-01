:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ra-integrate'
.. highlight: bash

ra-integrate
============

.. conda:recipe:: ra-integrate
   :replaces_section_title:
   :noindex:

   Integration of the Ra assembler \- a de novo DNA assembler for third generation sequencing data.

   :homepage: https://github.com/mariokostelac/ra-integrate
   :license: GPL3
   :recipe: /`ra-integrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra-integrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra-integrate/meta.yaml>`_

   


.. conda:package:: ra-integrate

   |downloads_ra-integrate| |docker_ra-integrate|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends graphviz: 
   :depends libgcc: 
   :depends ra: 
   :depends ruby: 
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

      mamba install ra-integrate

   and update with::

      mamba update ra-integrate

  To create a new environment, run::

      mamba create --name myenvname ra-integrate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ra-integrate:<tag>

   (see `ra-integrate/tags`_ for valid values for ``<tag>``)


.. |downloads_ra-integrate| image:: https://img.shields.io/conda/dn/bioconda/ra-integrate.svg?style=flat
   :target: https://anaconda.org/bioconda/ra-integrate
   :alt:   (downloads)
.. |docker_ra-integrate| image:: https://quay.io/repository/biocontainers/ra-integrate/status
   :target: https://quay.io/repository/biocontainers/ra-integrate
.. _`ra-integrate/tags`: https://quay.io/repository/biocontainers/ra-integrate?tab=tags


.. raw:: html

    <script>
        var package = "ra-integrate";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ra-integrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ra-integrate/README.html