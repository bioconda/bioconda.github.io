:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitcode'
.. highlight: bash

splitcode
=========

.. conda:recipe:: splitcode
   :replaces_section_title:
   :noindex:

   Flexible parsing\, interpretation\, and editing of technical sequences

   :homepage: https://github.com/pachterlab/splitcode
   :documentation: https://splitcode.readthedocs.io
   
   :license: BSD / BSD-2-Clause
   :recipe: /`splitcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitcode/meta.yaml>`_
   :links: biotools: :biotools:`splitcode`, doi: :doi:`10.1101/2023.03.20.533521`

   


.. conda:package:: splitcode

   |downloads_splitcode| |docker_splitcode|

   :versions:
      
      

      ``0.31.2-1``,  ``0.31.2-0``,  ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install splitcode

   and update with::

      mamba update splitcode

  To create a new environment, run::

      mamba create --name myenvname splitcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/splitcode:<tag>

   (see `splitcode/tags`_ for valid values for ``<tag>``)


.. |downloads_splitcode| image:: https://img.shields.io/conda/dn/bioconda/splitcode.svg?style=flat
   :target: https://anaconda.org/bioconda/splitcode
   :alt:   (downloads)
.. |docker_splitcode| image:: https://quay.io/repository/biocontainers/splitcode/status
   :target: https://quay.io/repository/biocontainers/splitcode
.. _`splitcode/tags`: https://quay.io/repository/biocontainers/splitcode?tab=tags


.. raw:: html

    <script>
        var package = "splitcode";
        var versions = ["0.31.2","0.31.2","0.31.1","0.31.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitcode/README.html