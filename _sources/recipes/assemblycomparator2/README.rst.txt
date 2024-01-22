:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblycomparator2'
.. highlight: bash

assemblycomparator2
===================

.. conda:recipe:: assemblycomparator2
   :replaces_section_title:
   :noindex:

   assemblycomparator2\: Compare prokaryotic genomic assemblies

   :homepage: https://github.com/cmkobel/assemblycomparator2
   :license: GPL / GPL-3.0
   :recipe: /`assemblycomparator2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblycomparator2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblycomparator2/meta.yaml>`_

   


.. conda:package:: assemblycomparator2

   |downloads_assemblycomparator2| |docker_assemblycomparator2|

   :versions:
      
      

      ``2.5.16-0``,  ``2.5.15-0``,  ``2.5.14-0``,  ``2.5.13-0``,  ``2.5.12-0``,  ``2.5.9-0``,  ``2.5.8-0``,  ``2.5.7-0``,  ``2.5.6-0``

      

   
   :depends mamba: ``>=1.4.9``
   :depends snakemake: ``7.32.4.*``
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

      mamba install assemblycomparator2

   and update with::

      mamba update assemblycomparator2

  To create a new environment, run::

      mamba create --name myenvname assemblycomparator2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/assemblycomparator2:<tag>

   (see `assemblycomparator2/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblycomparator2| image:: https://img.shields.io/conda/dn/bioconda/assemblycomparator2.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblycomparator2
   :alt:   (downloads)
.. |docker_assemblycomparator2| image:: https://quay.io/repository/biocontainers/assemblycomparator2/status
   :target: https://quay.io/repository/biocontainers/assemblycomparator2
.. _`assemblycomparator2/tags`: https://quay.io/repository/biocontainers/assemblycomparator2?tab=tags


.. raw:: html

    <script>
        var package = "assemblycomparator2";
        var versions = ["2.5.16","2.5.15","2.5.14","2.5.13","2.5.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblycomparator2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblycomparator2/README.html