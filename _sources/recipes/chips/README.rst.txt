:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chips'
.. highlight: bash

chips
=====

.. conda:recipe:: chips
   :replaces_section_title:
   :noindex:

   ChIPs is a tool for simulating ChIP\-sequencing experiments.

   :homepage: https://github.com/gymreklab/chips
   :license: GNU General Public License v3.0
   :recipe: /`chips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips/meta.yaml>`_

   


.. conda:package:: chips

   |downloads_chips| |docker_chips|

   :versions:
      
      

      ``2.4-7``,  ``2.4-6``,  ``2.4-5``,  ``2.4-4``,  ``2.4-3``,  ``2.4-2``,  ``2.4-1``,  ``2.4-0``,  ``2.3-0``

      

   
   :depends htslib: ``>=1.20,<1.24.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install chips

   and update with::

      mamba update chips

  To create a new environment, run::

      mamba create --name myenvname chips

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chips:<tag>

   (see `chips/tags`_ for valid values for ``<tag>``)


.. |downloads_chips| image:: https://img.shields.io/conda/dn/bioconda/chips.svg?style=flat
   :target: https://anaconda.org/bioconda/chips
   :alt:   (downloads)
.. |docker_chips| image:: https://quay.io/repository/biocontainers/chips/status
   :target: https://quay.io/repository/biocontainers/chips
.. _`chips/tags`: https://quay.io/repository/biocontainers/chips?tab=tags


.. raw:: html

    <script>
        var package = "chips";
        var versions = ["2.4","2.4","2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chips/README.html