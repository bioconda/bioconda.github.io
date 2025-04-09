:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biskit'
.. highlight: bash

biskit
======

.. conda:recipe:: biskit
   :replaces_section_title:
   :noindex:

   A Python platform for structural bioinformatics.

   :homepage: https://biskit.pasteur.fr
   :developer docs: https://github.com/graik/biskit
   :license: LGPL / GPL-3.0-or-later
   :recipe: /`biskit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit/meta.yaml>`_

   Biskit is a modular\, object\-oriented Python library for structural bioinformatics research.


.. conda:package:: biskit

   |downloads_biskit| |docker_biskit|

   :versions:
      
      

      ``3.0.1-0``,  ``2.5.1-0``,  ``2.4.3-1``,  ``2.4.3-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends parmed: 
   :depends python: 
   :depends scipy: 
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

      mamba install biskit

   and update with::

      mamba update biskit

  To create a new environment, run::

      mamba create --name myenvname biskit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biskit:<tag>

   (see `biskit/tags`_ for valid values for ``<tag>``)


.. |downloads_biskit| image:: https://img.shields.io/conda/dn/bioconda/biskit.svg?style=flat
   :target: https://anaconda.org/bioconda/biskit
   :alt:   (downloads)
.. |docker_biskit| image:: https://quay.io/repository/biocontainers/biskit/status
   :target: https://quay.io/repository/biocontainers/biskit
.. _`biskit/tags`: https://quay.io/repository/biocontainers/biskit?tab=tags


.. raw:: html

    <script>
        var package = "biskit";
        var versions = ["3.0.1","2.5.1","2.4.3","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biskit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biskit/README.html