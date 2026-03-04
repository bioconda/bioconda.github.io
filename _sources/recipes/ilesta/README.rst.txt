:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ilesta'
.. highlight: bash

ilesta
======

.. conda:recipe:: ilesta
   :replaces_section_title:
   :noindex:

   De novo genome assembler for long\-read sequencing data

   :homepage: https://github.com/yvlaere/Ilesta
   :license: GLP-3.0-only
   :recipe: /`ilesta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ilesta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ilesta/meta.yaml>`_

   


.. conda:package:: ilesta

   |downloads_ilesta| |docker_ilesta|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
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

      mamba install ilesta

   and update with::

      mamba update ilesta

  To create a new environment, run::

      mamba create --name myenvname ilesta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ilesta:<tag>

   (see `ilesta/tags`_ for valid values for ``<tag>``)


.. |downloads_ilesta| image:: https://img.shields.io/conda/dn/bioconda/ilesta.svg?style=flat
   :target: https://anaconda.org/bioconda/ilesta
   :alt:   (downloads)
.. |docker_ilesta| image:: https://quay.io/repository/biocontainers/ilesta/status
   :target: https://quay.io/repository/biocontainers/ilesta
.. _`ilesta/tags`: https://quay.io/repository/biocontainers/ilesta?tab=tags


.. raw:: html

    <script>
        var package = "ilesta";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ilesta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ilesta/README.html