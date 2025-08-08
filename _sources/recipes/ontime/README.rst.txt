:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ontime'
.. highlight: bash

ontime
======

.. conda:recipe:: ontime
   :replaces_section_title:
   :noindex:

   Extract subsets of ONT \(Nanopore\) reads based on time.

   :homepage: https://github.com/mbhall88/ontime
   :license: MIT / MIT
   :recipe: /`ontime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ontime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ontime/meta.yaml>`_

   


.. conda:package:: ontime

   |downloads_ontime| |docker_ontime|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ontime

   and update with::

      mamba update ontime

  To create a new environment, run::

      mamba create --name myenvname ontime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ontime:<tag>

   (see `ontime/tags`_ for valid values for ``<tag>``)


.. |downloads_ontime| image:: https://img.shields.io/conda/dn/bioconda/ontime.svg?style=flat
   :target: https://anaconda.org/bioconda/ontime
   :alt:   (downloads)
.. |docker_ontime| image:: https://quay.io/repository/biocontainers/ontime/status
   :target: https://quay.io/repository/biocontainers/ontime
.. _`ontime/tags`: https://quay.io/repository/biocontainers/ontime?tab=tags


.. raw:: html

    <script>
        var package = "ontime";
        var versions = ["0.3.1","0.3.1","0.3.0","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ontime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ontime/README.html