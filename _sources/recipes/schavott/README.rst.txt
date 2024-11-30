:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schavott'
.. highlight: bash

schavott
========

.. conda:recipe:: schavott
   :replaces_section_title:
   :noindex:

   Assembly and scaffolding of bacterial genomes in real time using MinION\-sequencing.

   :homepage: http://github.com/emilhaegglund/schavott
   :license: MIT
   :recipe: /`schavott <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott/meta.yaml>`_

   


.. conda:package:: schavott

   |downloads_schavott| |docker_schavott|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends bokeh: 
   :depends h5py: ``>=2.2.0``
   :depends numpy: 
   :depends pyfasta: 
   :depends python: 
   :depends watchdog: ``>=0.8.3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install schavott

   and update with::

      mamba update schavott

  To create a new environment, run::

      mamba create --name myenvname schavott

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/schavott:<tag>

   (see `schavott/tags`_ for valid values for ``<tag>``)


.. |downloads_schavott| image:: https://img.shields.io/conda/dn/bioconda/schavott.svg?style=flat
   :target: https://anaconda.org/bioconda/schavott
   :alt:   (downloads)
.. |docker_schavott| image:: https://quay.io/repository/biocontainers/schavott/status
   :target: https://quay.io/repository/biocontainers/schavott
.. _`schavott/tags`: https://quay.io/repository/biocontainers/schavott?tab=tags


.. raw:: html

    <script>
        var package = "schavott";
        var versions = ["0.5.0","0.5.0","0.5.0","0.4.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schavott/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schavott/README.html