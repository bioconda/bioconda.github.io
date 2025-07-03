:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flash2'
.. highlight: bash

flash2
======

.. conda:recipe:: flash2
   :replaces_section_title:
   :noindex:

   Merge paired\-end reads from fragments that are shorter than twice the read length

   :homepage: https://github.com/dstreett/FLASH2
   :license: GPLv3+
   :recipe: /`flash2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2/meta.yaml>`_

   


.. conda:package:: flash2

   |downloads_flash2| |docker_flash2|

   :versions:
      
      

      ``2.2.00-8``,  ``2.2.00-7``,  ``2.2.00-6``,  ``2.2.00-5``,  ``2.2.00-4``,  ``2.2.00-3``,  ``2.2.00-2``,  ``2.2.00-1``,  ``2.2.00-0``

      

   
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

      mamba install flash2

   and update with::

      mamba update flash2

  To create a new environment, run::

      mamba create --name myenvname flash2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flash2:<tag>

   (see `flash2/tags`_ for valid values for ``<tag>``)


.. |downloads_flash2| image:: https://img.shields.io/conda/dn/bioconda/flash2.svg?style=flat
   :target: https://anaconda.org/bioconda/flash2
   :alt:   (downloads)
.. |docker_flash2| image:: https://quay.io/repository/biocontainers/flash2/status
   :target: https://quay.io/repository/biocontainers/flash2
.. _`flash2/tags`: https://quay.io/repository/biocontainers/flash2?tab=tags


.. raw:: html

    <script>
        var package = "flash2";
        var versions = ["2.2.00","2.2.00","2.2.00","2.2.00","2.2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flash2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flash2/README.html