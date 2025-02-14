:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbuffer'
.. highlight: bash

mbuffer
=======

.. conda:recipe:: mbuffer
   :replaces_section_title:
   :noindex:

   mbuffer is a tool for buffering data streams with a large set of unique features

   :homepage: http://www.maier-komor.de/mbuffer.html
   :license: GPLv3
   :recipe: /`mbuffer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer/meta.yaml>`_

   


.. conda:package:: mbuffer

   |downloads_mbuffer| |docker_mbuffer|

   :versions:
      
      

      ``20160228-8``,  ``20160228-7``,  ``20160228-6``,  ``20160228-5``,  ``20160228-4``,  ``20160228-3``,  ``20160228-2``,  ``20160228-1``,  ``20160228-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mbuffer

   and update with::

      mamba update mbuffer

  To create a new environment, run::

      mamba create --name myenvname mbuffer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mbuffer:<tag>

   (see `mbuffer/tags`_ for valid values for ``<tag>``)


.. |downloads_mbuffer| image:: https://img.shields.io/conda/dn/bioconda/mbuffer.svg?style=flat
   :target: https://anaconda.org/bioconda/mbuffer
   :alt:   (downloads)
.. |docker_mbuffer| image:: https://quay.io/repository/biocontainers/mbuffer/status
   :target: https://quay.io/repository/biocontainers/mbuffer
.. _`mbuffer/tags`: https://quay.io/repository/biocontainers/mbuffer?tab=tags


.. raw:: html

    <script>
        var package = "mbuffer";
        var versions = ["20160228","20160228","20160228","20160228","20160228"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbuffer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbuffer/README.html