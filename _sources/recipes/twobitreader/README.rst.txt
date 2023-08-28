:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'twobitreader'
.. highlight: bash

twobitreader
============

.. conda:recipe:: twobitreader
   :replaces_section_title:
   :noindex:

   A fast python package for reading .2bit files \(used by the UCSC genome browser\)

   :homepage: https://github.com/benjschiller/twobitreader
   :license: Artistic License
   :recipe: /`twobitreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twobitreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twobitreader/meta.yaml>`_

   


.. conda:package:: twobitreader

   |downloads_twobitreader| |docker_twobitreader|

   :versions:
      
      

      ``3.1.7-1``,  ``3.1.7-0``,  ``3.1.6-1``,  ``3.1.6-0``,  ``3.1.4-1``,  ``3.1.4-0``

      

   
   :depends python: 
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

      mamba install twobitreader

   and update with::

      mamba update twobitreader

  To create a new environment, run::

      mamba create --name myenvname twobitreader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/twobitreader:<tag>

   (see `twobitreader/tags`_ for valid values for ``<tag>``)


.. |downloads_twobitreader| image:: https://img.shields.io/conda/dn/bioconda/twobitreader.svg?style=flat
   :target: https://anaconda.org/bioconda/twobitreader
   :alt:   (downloads)
.. |docker_twobitreader| image:: https://quay.io/repository/biocontainers/twobitreader/status
   :target: https://quay.io/repository/biocontainers/twobitreader
.. _`twobitreader/tags`: https://quay.io/repository/biocontainers/twobitreader?tab=tags


.. raw:: html

    <script>
        var package = "twobitreader";
        var versions = ["3.1.7","3.1.7","3.1.6","3.1.6","3.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/twobitreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/twobitreader/README.html