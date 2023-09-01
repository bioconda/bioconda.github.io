:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genie'
.. highlight: bash

genie
=====

.. conda:recipe:: genie
   :replaces_section_title:
   :noindex:

   A toolkit for working with next\-generation sequencing data

   :homepage: https://github.com/sakkayaphab/genie
   :license: MIT / MIT
   :recipe: /`genie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genie/meta.yaml>`_

   Genie is a collection of tools for a wide\-range of genomics analysis tasks.
   Genie provides a fast and flexible toolkit for reading\, writing\,
   and manipulating data.


.. conda:package:: genie

   |downloads_genie| |docker_genie|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
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

      mamba install genie

   and update with::

      mamba update genie

  To create a new environment, run::

      mamba create --name myenvname genie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genie:<tag>

   (see `genie/tags`_ for valid values for ``<tag>``)


.. |downloads_genie| image:: https://img.shields.io/conda/dn/bioconda/genie.svg?style=flat
   :target: https://anaconda.org/bioconda/genie
   :alt:   (downloads)
.. |docker_genie| image:: https://quay.io/repository/biocontainers/genie/status
   :target: https://quay.io/repository/biocontainers/genie
.. _`genie/tags`: https://quay.io/repository/biocontainers/genie?tab=tags


.. raw:: html

    <script>
        var package = "genie";
        var versions = ["0.7.0","0.6.0","0.5.0","0.5.0","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genie/README.html