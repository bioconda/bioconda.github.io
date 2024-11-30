:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scaffold_builder'
.. highlight: bash

scaffold_builder
================

.. conda:recipe:: scaffold_builder
   :replaces_section_title:
   :noindex:

   Scaffold\_builder\: Combining de novo and reference\-guided assembly with Scaffold\_builder.

   :homepage: http://edwards.sdsu.edu/scaffold_builder
   :developer docs: https://github.com/metageni/Scaffold_builder
   :license: GPL / GPL-3.0
   :recipe: /`scaffold_builder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder/meta.yaml>`_

   


.. conda:package:: scaffold_builder

   |downloads_scaffold_builder| |docker_scaffold_builder|

   :versions:
      
      

      ``2.3-0``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends mummer: 
   :depends python: ``<3``
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

      mamba install scaffold_builder

   and update with::

      mamba update scaffold_builder

  To create a new environment, run::

      mamba create --name myenvname scaffold_builder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scaffold_builder:<tag>

   (see `scaffold_builder/tags`_ for valid values for ``<tag>``)


.. |downloads_scaffold_builder| image:: https://img.shields.io/conda/dn/bioconda/scaffold_builder.svg?style=flat
   :target: https://anaconda.org/bioconda/scaffold_builder
   :alt:   (downloads)
.. |docker_scaffold_builder| image:: https://quay.io/repository/biocontainers/scaffold_builder/status
   :target: https://quay.io/repository/biocontainers/scaffold_builder
.. _`scaffold_builder/tags`: https://quay.io/repository/biocontainers/scaffold_builder?tab=tags


.. raw:: html

    <script>
        var package = "scaffold_builder";
        var versions = ["2.3","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scaffold_builder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scaffold_builder/README.html