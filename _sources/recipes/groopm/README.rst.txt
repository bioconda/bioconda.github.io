:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'groopm'
.. highlight: bash

groopm
======

.. conda:recipe:: groopm
   :replaces_section_title:
   :noindex:

   Metagenomic binning suite

   :homepage: https://ecogenomics.github.io/GroopM/
   :license: LGPL-3.0
   :recipe: /`groopm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groopm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groopm/meta.yaml>`_

   


.. conda:package:: groopm

   |downloads_groopm| |docker_groopm|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends bamm: 
   :depends matplotlib: ``>=1.1.0``
   :depends numpy: ``>=1.6.1``
   :depends pillow: 
   :depends pytables: ``>=2.3``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends scipy: ``>=0.10.1``
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

      mamba install groopm

   and update with::

      mamba update groopm

  To create a new environment, run::

      mamba create --name myenvname groopm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/groopm:<tag>

   (see `groopm/tags`_ for valid values for ``<tag>``)


.. |downloads_groopm| image:: https://img.shields.io/conda/dn/bioconda/groopm.svg?style=flat
   :target: https://anaconda.org/bioconda/groopm
   :alt:   (downloads)
.. |docker_groopm| image:: https://quay.io/repository/biocontainers/groopm/status
   :target: https://quay.io/repository/biocontainers/groopm
.. _`groopm/tags`: https://quay.io/repository/biocontainers/groopm?tab=tags


.. raw:: html

    <script>
        var package = "groopm";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/groopm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/groopm/README.html