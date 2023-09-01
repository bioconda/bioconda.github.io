:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fadapa'
.. highlight: bash

fadapa
======

.. conda:recipe:: fadapa
   :replaces_section_title:
   :noindex:

   FAstqc DAta PArser \- A minimal parser to parse FastQC output data

   :homepage: https://github.com/fadapa/fadapa
   :license: uncopyrighted
   :recipe: /`fadapa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fadapa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fadapa/meta.yaml>`_

   


.. conda:package:: fadapa

   |downloads_fadapa| |docker_fadapa|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends python: 
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

      mamba install fadapa

   and update with::

      mamba update fadapa

  To create a new environment, run::

      mamba create --name myenvname fadapa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fadapa:<tag>

   (see `fadapa/tags`_ for valid values for ``<tag>``)


.. |downloads_fadapa| image:: https://img.shields.io/conda/dn/bioconda/fadapa.svg?style=flat
   :target: https://anaconda.org/bioconda/fadapa
   :alt:   (downloads)
.. |docker_fadapa| image:: https://quay.io/repository/biocontainers/fadapa/status
   :target: https://quay.io/repository/biocontainers/fadapa
.. _`fadapa/tags`: https://quay.io/repository/biocontainers/fadapa?tab=tags


.. raw:: html

    <script>
        var package = "fadapa";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fadapa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fadapa/README.html