:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosigt'
.. highlight: bash

cosigt
======

.. conda:recipe:: cosigt
   :replaces_section_title:
   :noindex:

   Cosigt \(COsine SImilarity\-based GenoTyper\)

   :homepage: https://github.com/davidebolo1993/cosigt
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`cosigt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosigt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosigt/meta.yaml>`_

   


.. conda:package:: cosigt

   |downloads_cosigt| |docker_cosigt|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
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

      mamba install cosigt

   and update with::

      mamba update cosigt

  To create a new environment, run::

      mamba create --name myenvname cosigt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cosigt:<tag>

   (see `cosigt/tags`_ for valid values for ``<tag>``)


.. |downloads_cosigt| image:: https://img.shields.io/conda/dn/bioconda/cosigt.svg?style=flat
   :target: https://anaconda.org/bioconda/cosigt
   :alt:   (downloads)
.. |docker_cosigt| image:: https://quay.io/repository/biocontainers/cosigt/status
   :target: https://quay.io/repository/biocontainers/cosigt
.. _`cosigt/tags`: https://quay.io/repository/biocontainers/cosigt?tab=tags


.. raw:: html

    <script>
        var package = "cosigt";
        var versions = ["0.1.5","0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosigt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosigt/README.html