:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'buscolite'
.. highlight: bash

buscolite
=========

.. conda:recipe:: buscolite
   :replaces_section_title:
   :noindex:

   buscolite\: busco analysis for gene predictions

   :homepage: https://github.com/nextgenusfs/buscolite
   :license: BSD / BSD-2-Clause
   :recipe: /`buscolite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/buscolite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/buscolite/meta.yaml>`_

   


.. conda:package:: buscolite

   |downloads_buscolite| |docker_buscolite|

   :versions:
      
      

      ``24.11.3-0``,  ``23.10.26-0``

      

   
   :depends augustus: ``>=3.5.0``
   :depends miniprot: 
   :depends natsort: 
   :depends pyfastx: 
   :depends pyhmmer: 
   :depends python: ``>=3.6``
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

      mamba install buscolite

   and update with::

      mamba update buscolite

  To create a new environment, run::

      mamba create --name myenvname buscolite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/buscolite:<tag>

   (see `buscolite/tags`_ for valid values for ``<tag>``)


.. |downloads_buscolite| image:: https://img.shields.io/conda/dn/bioconda/buscolite.svg?style=flat
   :target: https://anaconda.org/bioconda/buscolite
   :alt:   (downloads)
.. |docker_buscolite| image:: https://quay.io/repository/biocontainers/buscolite/status
   :target: https://quay.io/repository/biocontainers/buscolite
.. _`buscolite/tags`: https://quay.io/repository/biocontainers/buscolite?tab=tags


.. raw:: html

    <script>
        var package = "buscolite";
        var versions = ["24.11.3","23.10.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/buscolite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/buscolite/README.html