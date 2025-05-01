:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapad'
.. highlight: bash

mapad
=====

.. conda:recipe:: mapad
   :replaces_section_title:
   :noindex:

   An aDNA aware short\-read mapper

   :homepage: https://github.com/mpieva/mapAD
   :license: MIT
   :recipe: /`mapad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad/meta.yaml>`_

   


.. conda:package:: mapad

   |downloads_mapad| |docker_mapad|

   :versions:
      
      

      ``0.45.0-1``,  ``0.45.0-0``,  ``0.44.1-0``,  ``0.43.0-1``,  ``0.43.0-0``,  ``0.42.1-2``,  ``0.42.1-1``,  ``0.42.1-0``,  ``0.41.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install mapad

   and update with::

      mamba update mapad

  To create a new environment, run::

      mamba create --name myenvname mapad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapad:<tag>

   (see `mapad/tags`_ for valid values for ``<tag>``)


.. |downloads_mapad| image:: https://img.shields.io/conda/dn/bioconda/mapad.svg?style=flat
   :target: https://anaconda.org/bioconda/mapad
   :alt:   (downloads)
.. |docker_mapad| image:: https://quay.io/repository/biocontainers/mapad/status
   :target: https://quay.io/repository/biocontainers/mapad
.. _`mapad/tags`: https://quay.io/repository/biocontainers/mapad?tab=tags


.. raw:: html

    <script>
        var package = "mapad";
        var versions = ["0.45.0","0.45.0","0.44.1","0.43.0","0.43.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapad/README.html