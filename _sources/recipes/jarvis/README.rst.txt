:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jarvis'
.. highlight: bash

jarvis
======

.. conda:recipe:: jarvis
   :replaces_section_title:
   :noindex:

   Efficient lossless compression of genomic sequences

   :homepage: https://github.com/cobilab/jarvis
   :license: GPL / GPL3
   :recipe: /`jarvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis/meta.yaml>`_

   


.. conda:package:: jarvis

   |downloads_jarvis| |docker_jarvis|

   :versions:
      
      

      ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install jarvis

   and update with::

      mamba update jarvis

  To create a new environment, run::

      mamba create --name myenvname jarvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jarvis:<tag>

   (see `jarvis/tags`_ for valid values for ``<tag>``)


.. |downloads_jarvis| image:: https://img.shields.io/conda/dn/bioconda/jarvis.svg?style=flat
   :target: https://anaconda.org/bioconda/jarvis
   :alt:   (downloads)
.. |docker_jarvis| image:: https://quay.io/repository/biocontainers/jarvis/status
   :target: https://quay.io/repository/biocontainers/jarvis
.. _`jarvis/tags`: https://quay.io/repository/biocontainers/jarvis?tab=tags


.. raw:: html

    <script>
        var package = "jarvis";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jarvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jarvis/README.html