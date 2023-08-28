:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnu-getopt'
.. highlight: bash

gnu-getopt
==========

.. conda:recipe:: gnu-getopt
   :replaces_section_title:
   :noindex:

   Command\-line option parsing library

   :homepage: http://software.frodo.looijaard.name/getopt/
   :license: GPLv2
   :recipe: /`gnu-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt/meta.yaml>`_

   


.. conda:package:: gnu-getopt

   |downloads_gnu-getopt| |docker_gnu-getopt|

   :versions:
      
      

      ``1.1.6-4``,  ``1.1.6-3``,  ``1.1.6-2``,  ``1.1.6-1``

      

   
   :depends gettext: 
   :depends libgcc: 
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

      mamba install gnu-getopt

   and update with::

      mamba update gnu-getopt

  To create a new environment, run::

      mamba create --name myenvname gnu-getopt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnu-getopt:<tag>

   (see `gnu-getopt/tags`_ for valid values for ``<tag>``)


.. |downloads_gnu-getopt| image:: https://img.shields.io/conda/dn/bioconda/gnu-getopt.svg?style=flat
   :target: https://anaconda.org/bioconda/gnu-getopt
   :alt:   (downloads)
.. |docker_gnu-getopt| image:: https://quay.io/repository/biocontainers/gnu-getopt/status
   :target: https://quay.io/repository/biocontainers/gnu-getopt
.. _`gnu-getopt/tags`: https://quay.io/repository/biocontainers/gnu-getopt?tab=tags


.. raw:: html

    <script>
        var package = "gnu-getopt";
        var versions = ["1.1.6","1.1.6","1.1.6","1.1.6"];
    </script>





Notes
-----
On Linux systems gnu\-getopt is simply called \'getopt\'\, however due to potential collision with the native BSD getopt on OSX\, this binary is renamed \'gnu\-getopt\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-getopt/README.html