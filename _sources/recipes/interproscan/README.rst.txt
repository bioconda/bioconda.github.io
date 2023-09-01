:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interproscan'
.. highlight: bash

interproscan
============

.. conda:recipe:: interproscan
   :replaces_section_title:
   :noindex:

   InterPro integrates together predictive information about proteins function from a number of partner resources

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: Apache / GPLv3
   :recipe: /`interproscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan/meta.yaml>`_
   :links: biotools: :biotools:`interproscan_ebi`

   


.. conda:package:: interproscan

   |downloads_interproscan| |docker_interproscan|

   :versions:
      
      

      ``5.59_91.0-1``,  ``5.59_91.0-0``,  ``5.55_88.0-1``,  ``5.55_88.0-0``,  ``5.54_87.0-3``,  ``5.54_87.0-2``,  ``5.54_87.0-1``,  ``5.54_87.0-0``,  ``5.52_86.0-0``

      

   
   :depends blast: ``>=2.12``
   :depends cath-tools: 
   :depends emboss: 
   :depends hmmer: ``>=3``
   :depends hmmer2: 
   :depends libgcc-ng: ``>=12``
   :depends openjdk: ``>=11,<17``
   :depends perl: ``>=5.08``
   :depends pftools: 
   :depends python: ``>=3``
   :depends sfld: 
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

      mamba install interproscan

   and update with::

      mamba update interproscan

  To create a new environment, run::

      mamba create --name myenvname interproscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/interproscan:<tag>

   (see `interproscan/tags`_ for valid values for ``<tag>``)


.. |downloads_interproscan| image:: https://img.shields.io/conda/dn/bioconda/interproscan.svg?style=flat
   :target: https://anaconda.org/bioconda/interproscan
   :alt:   (downloads)
.. |docker_interproscan| image:: https://quay.io/repository/biocontainers/interproscan/status
   :target: https://quay.io/repository/biocontainers/interproscan
.. _`interproscan/tags`: https://quay.io/repository/biocontainers/interproscan?tab=tags


.. raw:: html

    <script>
        var package = "interproscan";
        var versions = ["5.59_91.0","5.59_91.0","5.55_88.0","5.55_88.0","5.54_87.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interproscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interproscan/README.html