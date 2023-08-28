:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctat-metagenomics'
.. highlight: bash

ctat-metagenomics
=================

.. conda:recipe:: ctat-metagenomics
   :replaces_section_title:
   :noindex:

   ctat\-metagenomics uses centrifuge

   :homepage: https://github.com/NCIP/ctat-metagenomics
   :license: BSD-3-Clause
   :recipe: /`ctat-metagenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-metagenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-metagenomics/meta.yaml>`_

   


.. conda:package:: ctat-metagenomics

   |downloads_ctat-metagenomics| |docker_ctat-metagenomics|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``

      

   
   :depends blast: 
   :depends centrifuge: 
   :depends python: ``<3``
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

      mamba install ctat-metagenomics

   and update with::

      mamba update ctat-metagenomics

  To create a new environment, run::

      mamba create --name myenvname ctat-metagenomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctat-metagenomics:<tag>

   (see `ctat-metagenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_ctat-metagenomics| image:: https://img.shields.io/conda/dn/bioconda/ctat-metagenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/ctat-metagenomics
   :alt:   (downloads)
.. |docker_ctat-metagenomics| image:: https://quay.io/repository/biocontainers/ctat-metagenomics/status
   :target: https://quay.io/repository/biocontainers/ctat-metagenomics
.. _`ctat-metagenomics/tags`: https://quay.io/repository/biocontainers/ctat-metagenomics?tab=tags


.. raw:: html

    <script>
        var package = "ctat-metagenomics";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-metagenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-metagenomics/README.html