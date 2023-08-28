:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapbin'
.. highlight: bash

hapbin
======

.. conda:recipe:: hapbin
   :replaces_section_title:
   :noindex:

   hapbin is a collection of tools for efficiently calculating Extended Haplotype Homozygosity \(EHH\)\, the Integrated Haplotype Score \(iHS\) and the Cross Population Extended Haplotype Homozogysity \(XP\-EHH\) statistic.

   :homepage: https://github.com/evotools/hapbin
   :license: GPLv3
   :recipe: /`hapbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapbin/meta.yaml>`_

   


.. conda:package:: hapbin

   |downloads_hapbin| |docker_hapbin|

   :versions:
      
      

      ``1.3.0-5``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
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

      mamba install hapbin

   and update with::

      mamba update hapbin

  To create a new environment, run::

      mamba create --name myenvname hapbin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hapbin:<tag>

   (see `hapbin/tags`_ for valid values for ``<tag>``)


.. |downloads_hapbin| image:: https://img.shields.io/conda/dn/bioconda/hapbin.svg?style=flat
   :target: https://anaconda.org/bioconda/hapbin
   :alt:   (downloads)
.. |docker_hapbin| image:: https://quay.io/repository/biocontainers/hapbin/status
   :target: https://quay.io/repository/biocontainers/hapbin
.. _`hapbin/tags`: https://quay.io/repository/biocontainers/hapbin?tab=tags


.. raw:: html

    <script>
        var package = "hapbin";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapbin/README.html