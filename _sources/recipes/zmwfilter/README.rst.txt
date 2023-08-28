:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zmwfilter'
.. highlight: bash

zmwfilter
=========

.. conda:recipe:: zmwfilter
   :replaces_section_title:
   :noindex:

   PacBio utility to filter reads on ZMW ID\(s\)

   :homepage: https://github.com/PacificBiosciences/zmwfilter
   :license: BSD-3-Clause-Clear
   :recipe: /`zmwfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zmwfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zmwfilter/meta.yaml>`_

   


.. conda:package:: zmwfilter

   |downloads_zmwfilter| |docker_zmwfilter|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends pbtk: 
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

      mamba install zmwfilter

   and update with::

      mamba update zmwfilter

  To create a new environment, run::

      mamba create --name myenvname zmwfilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zmwfilter:<tag>

   (see `zmwfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_zmwfilter| image:: https://img.shields.io/conda/dn/bioconda/zmwfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/zmwfilter
   :alt:   (downloads)
.. |docker_zmwfilter| image:: https://quay.io/repository/biocontainers/zmwfilter/status
   :target: https://quay.io/repository/biocontainers/zmwfilter
.. _`zmwfilter/tags`: https://quay.io/repository/biocontainers/zmwfilter?tab=tags


.. raw:: html

    <script>
        var package = "zmwfilter";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zmwfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zmwfilter/README.html