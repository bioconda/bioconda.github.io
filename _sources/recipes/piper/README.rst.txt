:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piper'
.. highlight: bash

piper
=====

.. conda:recipe:: piper
   :replaces_section_title:
   :noindex:

   A lightweight python toolkit for gluing together restartable\, robust command line pipelines

   :homepage: https://github.com/databio/pypiper/
   :documentation: https://pypiper.databio.org/en/latest/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`piper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piper/meta.yaml>`_

   


.. conda:package:: piper

   |downloads_piper| |docker_piper|

   :versions:
      
      

      ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.12.3-0``,  ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends attmap: ``>=0.12.5``
   :depends logmuse: ``>=0.2.4``
   :depends pandas: 
   :depends pipestat: ``>=0.9.a1``
   :depends psutil: 
   :depends python: ``>=3``
   :depends ubiquerg: ``>=0.8.0``
   :depends yacman: ``>=0.9.3``
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

      mamba install piper

   and update with::

      mamba update piper

  To create a new environment, run::

      mamba create --name myenvname piper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piper:<tag>

   (see `piper/tags`_ for valid values for ``<tag>``)


.. |downloads_piper| image:: https://img.shields.io/conda/dn/bioconda/piper.svg?style=flat
   :target: https://anaconda.org/bioconda/piper
   :alt:   (downloads)
.. |docker_piper| image:: https://quay.io/repository/biocontainers/piper/status
   :target: https://quay.io/repository/biocontainers/piper
.. _`piper/tags`: https://quay.io/repository/biocontainers/piper?tab=tags


.. raw:: html

    <script>
        var package = "piper";
        var versions = ["0.14.3","0.14.2","0.14.0","0.13.2","0.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piper/README.html