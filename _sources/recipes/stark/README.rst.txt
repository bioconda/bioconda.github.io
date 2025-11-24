:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stark'
.. highlight: bash

stark
=====

.. conda:recipe:: stark
   :replaces_section_title:
   :noindex:

   A tool for bluntifying a bidirected de bruijn graph by removing overlaps.

   :homepage: https://github.com/hnikaein/stark
   :license: MIT / MIT
   :recipe: /`stark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark/meta.yaml>`_

   


.. conda:package:: stark

   |downloads_stark| |docker_stark|

   :versions:
      
      

      ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install stark

   and update with::

      mamba update stark

  To create a new environment, run::

      mamba create --name myenvname stark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stark:<tag>

   (see `stark/tags`_ for valid values for ``<tag>``)


.. |downloads_stark| image:: https://img.shields.io/conda/dn/bioconda/stark.svg?style=flat
   :target: https://anaconda.org/bioconda/stark
   :alt:   (downloads)
.. |docker_stark| image:: https://quay.io/repository/biocontainers/stark/status
   :target: https://quay.io/repository/biocontainers/stark
.. _`stark/tags`: https://quay.io/repository/biocontainers/stark?tab=tags


.. raw:: html

    <script>
        var package = "stark";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stark/README.html