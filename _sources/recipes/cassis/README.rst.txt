:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassis'
.. highlight: bash

cassis
======

.. conda:recipe:: cassis
   :replaces_section_title:
   :noindex:

   Detection of genomic rearrangement breakpoints

   :homepage: http://pbil.univ-lyon1.fr/software/Cassis/
   :license: GPL3
   :recipe: /`cassis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassis/meta.yaml>`_

   The package Cassis implements methods for precise detection of genomic rearrangement breakpoints\, which were described in Lemaitre et al.\, 2008.


.. conda:package:: cassis

   |downloads_cassis| |docker_cassis|

   :versions:
      
      

      ``0.0.20120106-1``,  ``0.0.20120106-0``

      

   
   :depends ghostscript: 
   :depends lastz: 
   :depends perl: 
   :depends r-base: 
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

      mamba install cassis

   and update with::

      mamba update cassis

  To create a new environment, run::

      mamba create --name myenvname cassis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cassis:<tag>

   (see `cassis/tags`_ for valid values for ``<tag>``)


.. |downloads_cassis| image:: https://img.shields.io/conda/dn/bioconda/cassis.svg?style=flat
   :target: https://anaconda.org/bioconda/cassis
   :alt:   (downloads)
.. |docker_cassis| image:: https://quay.io/repository/biocontainers/cassis/status
   :target: https://quay.io/repository/biocontainers/cassis
.. _`cassis/tags`: https://quay.io/repository/biocontainers/cassis?tab=tags


.. raw:: html

    <script>
        var package = "cassis";
        var versions = ["0.0.20120106","0.0.20120106"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassis/README.html