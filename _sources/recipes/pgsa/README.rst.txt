:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgsa'
.. highlight: bash

pgsa
====

.. conda:recipe:: pgsa
   :replaces_section_title:
   :noindex:

   Pseudogenome Suffix Array is a compact index for collections of reads from sequencing.

   :homepage: http://sun.aei.polsl.pl/pgsa/
   :license: Creative Commons Attribution License
   :recipe: /`pgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa/meta.yaml>`_

   


.. conda:package:: pgsa

   |downloads_pgsa| |docker_pgsa|

   :versions:
      
      

      ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install pgsa

   and update with::

      mamba update pgsa

  To create a new environment, run::

      mamba create --name myenvname pgsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgsa:<tag>

   (see `pgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_pgsa| image:: https://img.shields.io/conda/dn/bioconda/pgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/pgsa
   :alt:   (downloads)
.. |docker_pgsa| image:: https://quay.io/repository/biocontainers/pgsa/status
   :target: https://quay.io/repository/biocontainers/pgsa
.. _`pgsa/tags`: https://quay.io/repository/biocontainers/pgsa?tab=tags


.. raw:: html

    <script>
        var package = "pgsa";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgsa/README.html