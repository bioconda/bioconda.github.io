:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi'
.. highlight: bash

fermi
=====

.. conda:recipe:: fermi
   :replaces_section_title:
   :noindex:

   A WGS de novo assembler based on the FMD\-index for large genomes

   :homepage: https://github.com/lh3/fermi
   :license: Unknown
   :recipe: /`fermi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi/meta.yaml>`_

   


.. conda:package:: fermi

   |downloads_fermi| |docker_fermi|

   :versions:
      
      

      ``1.1_r751_beta-8``,  ``1.1_r751_beta-7``,  ``1.1_r751_beta-6``,  ``1.1_r751_beta-5``,  ``1.1_r751_beta-4``,  ``1.1_r751_beta-3``,  ``1.1_r751_beta-2``,  ``1.1_r751_beta-1``,  ``1.1_r751_beta-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
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

      mamba install fermi

   and update with::

      mamba update fermi

  To create a new environment, run::

      mamba create --name myenvname fermi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fermi:<tag>

   (see `fermi/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi| image:: https://img.shields.io/conda/dn/bioconda/fermi.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi
   :alt:   (downloads)
.. |docker_fermi| image:: https://quay.io/repository/biocontainers/fermi/status
   :target: https://quay.io/repository/biocontainers/fermi
.. _`fermi/tags`: https://quay.io/repository/biocontainers/fermi?tab=tags


.. raw:: html

    <script>
        var package = "fermi";
        var versions = ["1.1_r751_beta","1.1_r751_beta","1.1_r751_beta","1.1_r751_beta","1.1_r751_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi/README.html