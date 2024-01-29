:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pfp'
.. highlight: bash

pfp
===

.. conda:recipe:: pfp
   :replaces_section_title:
   :noindex:

   Prefix Free Parsing.

   :homepage: https://github.com/marco-oliva/pfp
   :license: MIT
   :recipe: /`pfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfp/meta.yaml>`_

   


.. conda:package:: pfp

   |downloads_pfp| |docker_pfp|

   :versions:
      
      

      ``0.3.9-0``,  ``0.3.8-2``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pfp

   and update with::

      mamba update pfp

  To create a new environment, run::

      mamba create --name myenvname pfp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pfp:<tag>

   (see `pfp/tags`_ for valid values for ``<tag>``)


.. |downloads_pfp| image:: https://img.shields.io/conda/dn/bioconda/pfp.svg?style=flat
   :target: https://anaconda.org/bioconda/pfp
   :alt:   (downloads)
.. |docker_pfp| image:: https://quay.io/repository/biocontainers/pfp/status
   :target: https://quay.io/repository/biocontainers/pfp
.. _`pfp/tags`: https://quay.io/repository/biocontainers/pfp?tab=tags


.. raw:: html

    <script>
        var package = "pfp";
        var versions = ["0.3.9","0.3.8","0.3.8","0.3.8","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfp/README.html