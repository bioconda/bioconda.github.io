:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eta'
.. highlight: bash

eta
===

.. conda:recipe:: eta
   :replaces_section_title:
   :noindex:

   ETA Progress bar for command\-line utilities

   :homepage: http://github.com/mbreese/eta/
   :license: BSD
   :recipe: /`eta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eta/meta.yaml>`_

   


.. conda:package:: eta

   |downloads_eta| |docker_eta|

   :versions:
      
      

      ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends python: 
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

      mamba install eta

   and update with::

      mamba update eta

  To create a new environment, run::

      mamba create --name myenvname eta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eta:<tag>

   (see `eta/tags`_ for valid values for ``<tag>``)


.. |downloads_eta| image:: https://img.shields.io/conda/dn/bioconda/eta.svg?style=flat
   :target: https://anaconda.org/bioconda/eta
   :alt:   (downloads)
.. |docker_eta| image:: https://quay.io/repository/biocontainers/eta/status
   :target: https://quay.io/repository/biocontainers/eta
.. _`eta/tags`: https://quay.io/repository/biocontainers/eta?tab=tags


.. raw:: html

    <script>
        var package = "eta";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eta/README.html