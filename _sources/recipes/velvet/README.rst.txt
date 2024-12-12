:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velvet'
.. highlight: bash

velvet
======

.. conda:recipe:: velvet
   :replaces_section_title:
   :noindex:

   Sequence Assembler for short reads

   :homepage: https://europepmc.org/article/pmc/2336801
   :documentation: https://europepmc.org/article/pmc/2336801#free-full-text
   
   :developer docs: https://github.com/dzerbino/velvet
   :license: GPL / GPL-2.0-only
   :recipe: /`velvet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet/meta.yaml>`_
   :links: biotools: :biotools:`velvet`

   


.. conda:package:: velvet

   |downloads_velvet| |docker_velvet|

   :versions:
      
      

      ``1.2.10-8``,  ``1.2.10-7``,  ``1.2.10-6``,  ``1.2.10-5``,  ``1.2.10-4``,  ``1.2.10-3``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install velvet

   and update with::

      mamba update velvet

  To create a new environment, run::

      mamba create --name myenvname velvet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/velvet:<tag>

   (see `velvet/tags`_ for valid values for ``<tag>``)


.. |downloads_velvet| image:: https://img.shields.io/conda/dn/bioconda/velvet.svg?style=flat
   :target: https://anaconda.org/bioconda/velvet
   :alt:   (downloads)
.. |docker_velvet| image:: https://quay.io/repository/biocontainers/velvet/status
   :target: https://quay.io/repository/biocontainers/velvet
.. _`velvet/tags`: https://quay.io/repository/biocontainers/velvet?tab=tags


.. raw:: html

    <script>
        var package = "velvet";
        var versions = ["1.2.10","1.2.10","1.2.10","1.2.10","1.2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velvet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velvet/README.html