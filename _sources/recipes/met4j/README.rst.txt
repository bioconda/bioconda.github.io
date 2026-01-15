:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'met4j'
.. highlight: bash

met4j
=====

.. conda:recipe:: met4j
   :replaces_section_title:
   :noindex:

   Met4J is an open\-source Java library dedicated to the structural analysis of metabolic networks

   :homepage: https://forge.inrae.fr/metexplore/met4j/-/blob/master/met4j-toolbox/README.md
   :license: CeCILL-2.1
   :recipe: /`met4j <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/met4j>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/met4j/meta.yaml>`_

   


.. conda:package:: met4j

   |downloads_met4j| |docker_met4j|

   :versions:
      
      

      ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends openjdk: ``>17``
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

      mamba install met4j

   and update with::

      mamba update met4j

  To create a new environment, run::

      mamba create --name myenvname met4j

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/met4j:<tag>

   (see `met4j/tags`_ for valid values for ``<tag>``)


.. |downloads_met4j| image:: https://img.shields.io/conda/dn/bioconda/met4j.svg?style=flat
   :target: https://anaconda.org/bioconda/met4j
   :alt:   (downloads)
.. |docker_met4j| image:: https://quay.io/repository/biocontainers/met4j/status
   :target: https://quay.io/repository/biocontainers/met4j
.. _`met4j/tags`: https://quay.io/repository/biocontainers/met4j?tab=tags


.. raw:: html

    <script>
        var package = "met4j";
        var versions = ["2.2.1","2.2.0","2.1.0","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/met4j/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/met4j/README.html