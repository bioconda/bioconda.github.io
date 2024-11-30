:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasv'
.. highlight: bash

metasv
======

.. conda:recipe:: metasv
   :replaces_section_title:
   :noindex:

   An accurate and integrative structural\-variant caller for next generation sequencing

   :homepage: https://github.com/bioinform/metasv
   :license: MIT
   :recipe: /`metasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv/meta.yaml>`_

   


.. conda:package:: metasv

   |downloads_metasv| |docker_metasv|

   :versions:
      
      

      ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.4.0-4``,  ``0.4.0-3``

      

   
   :depends age-metasv: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends pybedtools: ``0.6.9``
   :depends pysam: ``0.7.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyvcf: ``0.6.7``
   :depends spades: 
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

      mamba install metasv

   and update with::

      mamba update metasv

  To create a new environment, run::

      mamba create --name myenvname metasv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metasv:<tag>

   (see `metasv/tags`_ for valid values for ``<tag>``)


.. |downloads_metasv| image:: https://img.shields.io/conda/dn/bioconda/metasv.svg?style=flat
   :target: https://anaconda.org/bioconda/metasv
   :alt:   (downloads)
.. |docker_metasv| image:: https://quay.io/repository/biocontainers/metasv/status
   :target: https://quay.io/repository/biocontainers/metasv
.. _`metasv/tags`: https://quay.io/repository/biocontainers/metasv?tab=tags


.. raw:: html

    <script>
        var package = "metasv";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasv/README.html