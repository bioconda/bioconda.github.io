:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrpro'
.. highlight: bash

nmrpro
======

.. conda:recipe:: nmrpro
   :replaces_section_title:
   :noindex:

   NMRPro reads and processes different types of NMR spectra.

   :homepage: https://github.com/ahmohamed/nmrpro
   :license: MIT
   :recipe: /`nmrpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrpro/meta.yaml>`_

   


.. conda:package:: nmrpro

   |downloads_nmrpro| |docker_nmrpro|

   :versions:
      
      

      ``20161019-2``,  ``20161019-1``,  ``20161019-0``

      

   
   :depends nmrglue: ``>=0.5``
   :depends numpy: 
   :depends python: 
   :depends scipy: 
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

      mamba install nmrpro

   and update with::

      mamba update nmrpro

  To create a new environment, run::

      mamba create --name myenvname nmrpro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nmrpro:<tag>

   (see `nmrpro/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrpro| image:: https://img.shields.io/conda/dn/bioconda/nmrpro.svg?style=flat
   :target: https://anaconda.org/bioconda/nmrpro
   :alt:   (downloads)
.. |docker_nmrpro| image:: https://quay.io/repository/biocontainers/nmrpro/status
   :target: https://quay.io/repository/biocontainers/nmrpro
.. _`nmrpro/tags`: https://quay.io/repository/biocontainers/nmrpro?tab=tags


.. raw:: html

    <script>
        var package = "nmrpro";
        var versions = ["20161019","20161019","20161019"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrpro/README.html