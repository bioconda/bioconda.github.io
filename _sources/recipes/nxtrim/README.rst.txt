:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nxtrim'
.. highlight: bash

nxtrim
======

.. conda:recipe:: nxtrim
   :replaces_section_title:
   :noindex:

   Software to remove Nextera Mate Pair adapters and categorise reads according to the orientation implied by the adapter location.

   :homepage: https://github.com/sequencing/NxTrim
   :license: BSD-2-Clause
   :recipe: /`nxtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim/meta.yaml>`_
   :links: biotools: :biotools:`nxtrim`, doi: :doi:`10.1093/bioinformatics/btv057`

   


.. conda:package:: nxtrim

   |downloads_nxtrim| |docker_nxtrim|

   :versions:
      
      

      ``0.4.3-4``,  ``0.4.3-3``,  ``0.4.3-2``,  ``0.4.3-1``,  ``0.4.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nxtrim

   and update with::

      mamba update nxtrim

  To create a new environment, run::

      mamba create --name myenvname nxtrim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nxtrim:<tag>

   (see `nxtrim/tags`_ for valid values for ``<tag>``)


.. |downloads_nxtrim| image:: https://img.shields.io/conda/dn/bioconda/nxtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/nxtrim
   :alt:   (downloads)
.. |docker_nxtrim| image:: https://quay.io/repository/biocontainers/nxtrim/status
   :target: https://quay.io/repository/biocontainers/nxtrim
.. _`nxtrim/tags`: https://quay.io/repository/biocontainers/nxtrim?tab=tags


.. raw:: html

    <script>
        var package = "nxtrim";
        var versions = ["0.4.3","0.4.3","0.4.3","0.4.3","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nxtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nxtrim/README.html