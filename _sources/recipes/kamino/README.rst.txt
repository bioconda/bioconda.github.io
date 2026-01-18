:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kamino'
.. highlight: bash

kamino
======

.. conda:recipe:: kamino
   :replaces_section_title:
   :noindex:

   Tool for building phylogenomic datasets quickly and reproducibly.

   :homepage: https://github.com/rderelle/kamino
   :documentation: https://github.com/rderelle/kamino/blob/0.4.0/README.md
   
   :license: MIT / MIT
   :recipe: /`kamino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kamino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kamino/meta.yaml>`_

   


.. conda:package:: kamino

   |downloads_kamino| |docker_kamino|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
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

      mamba install kamino

   and update with::

      mamba update kamino

  To create a new environment, run::

      mamba create --name myenvname kamino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kamino:<tag>

   (see `kamino/tags`_ for valid values for ``<tag>``)


.. |downloads_kamino| image:: https://img.shields.io/conda/dn/bioconda/kamino.svg?style=flat
   :target: https://anaconda.org/bioconda/kamino
   :alt:   (downloads)
.. |docker_kamino| image:: https://quay.io/repository/biocontainers/kamino/status
   :target: https://quay.io/repository/biocontainers/kamino
.. _`kamino/tags`: https://quay.io/repository/biocontainers/kamino?tab=tags


.. raw:: html

    <script>
        var package = "kamino";
        var versions = ["0.4.0","0.3.0","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kamino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kamino/README.html