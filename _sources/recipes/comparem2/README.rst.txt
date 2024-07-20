:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparem2'
.. highlight: bash

comparem2
=========

.. conda:recipe:: comparem2
   :replaces_section_title:
   :noindex:

   CompareM2 genomes\-to\-report pipeline

   :homepage: https://github.com/cmkobel/comparem2
   :documentation: https://comparem2.readthedocs.io
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`comparem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem2/meta.yaml>`_

   


.. conda:package:: comparem2

   |downloads_comparem2| |docker_comparem2|

   :versions:
      
      

      ``2.9.1-0``,  ``2.8.2-0``,  ``2.8.1-0``

      

   
   :depends mamba: 
   :depends pandas: 
   :depends pulp: ``<2.8``
   :depends python: ``<3.12``
   :depends snakemake-minimal: ``<8``
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

      mamba install comparem2

   and update with::

      mamba update comparem2

  To create a new environment, run::

      mamba create --name myenvname comparem2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/comparem2:<tag>

   (see `comparem2/tags`_ for valid values for ``<tag>``)


.. |downloads_comparem2| image:: https://img.shields.io/conda/dn/bioconda/comparem2.svg?style=flat
   :target: https://anaconda.org/bioconda/comparem2
   :alt:   (downloads)
.. |docker_comparem2| image:: https://quay.io/repository/biocontainers/comparem2/status
   :target: https://quay.io/repository/biocontainers/comparem2
.. _`comparem2/tags`: https://quay.io/repository/biocontainers/comparem2?tab=tags


.. raw:: html

    <script>
        var package = "comparem2";
        var versions = ["2.9.1","2.8.2","2.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparem2/README.html