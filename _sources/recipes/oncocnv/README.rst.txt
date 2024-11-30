:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncocnv'
.. highlight: bash

oncocnv
=======

.. conda:recipe:: oncocnv
   :replaces_section_title:
   :noindex:

   a package to detect copy number changes in Deep Sequencing data

   :homepage: https://github.com/BoevaLab/ONCOCNV/blob/master/README.md
   :license: GNU GPLv3
   :recipe: /`oncocnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncocnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncocnv/meta.yaml>`_

   


.. conda:package:: oncocnv

   |downloads_oncocnv| |docker_oncocnv|

   :versions:
      
      

      ``7.0-1``,  ``7.0-0``

      

   
   :depends bedtools: ``>=2.27.1``
   :depends bioconductor-dnacopy: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-fastica: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-pscbs: 
   :depends r-remotes: 
   :depends r-scales: 
   :depends samtools: ``>=1.16.1``
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

      mamba install oncocnv

   and update with::

      mamba update oncocnv

  To create a new environment, run::

      mamba create --name myenvname oncocnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oncocnv:<tag>

   (see `oncocnv/tags`_ for valid values for ``<tag>``)


.. |downloads_oncocnv| image:: https://img.shields.io/conda/dn/bioconda/oncocnv.svg?style=flat
   :target: https://anaconda.org/bioconda/oncocnv
   :alt:   (downloads)
.. |docker_oncocnv| image:: https://quay.io/repository/biocontainers/oncocnv/status
   :target: https://quay.io/repository/biocontainers/oncocnv
.. _`oncocnv/tags`: https://quay.io/repository/biocontainers/oncocnv?tab=tags


.. raw:: html

    <script>
        var package = "oncocnv";
        var versions = ["7.0","7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncocnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncocnv/README.html