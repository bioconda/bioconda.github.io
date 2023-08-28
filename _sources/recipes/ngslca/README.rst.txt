:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngslca'
.. highlight: bash

ngslca
======

.. conda:recipe:: ngslca
   :replaces_section_title:
   :noindex:

   ngsLCA\: fast and flexible taxonomic classification of DNA reads aligned to reference databases

   :homepage: https://github.com/miwipe/ngsLCA
   :license: GPLv3, MIT
   :recipe: /`ngslca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngslca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngslca/meta.yaml>`_

   


.. conda:package:: ngslca

   |downloads_ngslca| |docker_ngslca|

   :versions:
      
      

      ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install ngslca

   and update with::

      mamba update ngslca

  To create a new environment, run::

      mamba create --name myenvname ngslca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngslca:<tag>

   (see `ngslca/tags`_ for valid values for ``<tag>``)


.. |downloads_ngslca| image:: https://img.shields.io/conda/dn/bioconda/ngslca.svg?style=flat
   :target: https://anaconda.org/bioconda/ngslca
   :alt:   (downloads)
.. |docker_ngslca| image:: https://quay.io/repository/biocontainers/ngslca/status
   :target: https://quay.io/repository/biocontainers/ngslca
.. _`ngslca/tags`: https://quay.io/repository/biocontainers/ngslca?tab=tags


.. raw:: html

    <script>
        var package = "ngslca";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngslca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngslca/README.html