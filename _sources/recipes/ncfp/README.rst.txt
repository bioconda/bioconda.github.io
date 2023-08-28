:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncfp'
.. highlight: bash

ncfp
====

.. conda:recipe:: ncfp
   :replaces_section_title:
   :noindex:

   A program\/module to find nt sequences that code for aa sequences

   :homepage: http://widdowquinn.github.io/ncfp/
   :documentation: https://ncfp.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/widdowquinn/ncfp
   :license: MIT / MIT
   :recipe: /`ncfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp/meta.yaml>`_

   ncfp is a script and module that facilitates recovery of nucleotide sequences from NCBI that encode a set of input protein sequences


.. conda:package:: ncfp

   |downloads_ncfp| |docker_ncfp|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends bioservices: 
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install ncfp

   and update with::

      mamba update ncfp

  To create a new environment, run::

      mamba create --name myenvname ncfp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncfp:<tag>

   (see `ncfp/tags`_ for valid values for ``<tag>``)


.. |downloads_ncfp| image:: https://img.shields.io/conda/dn/bioconda/ncfp.svg?style=flat
   :target: https://anaconda.org/bioconda/ncfp
   :alt:   (downloads)
.. |docker_ncfp| image:: https://quay.io/repository/biocontainers/ncfp/status
   :target: https://quay.io/repository/biocontainers/ncfp
.. _`ncfp/tags`: https://quay.io/repository/biocontainers/ncfp?tab=tags


.. raw:: html

    <script>
        var package = "ncfp";
        var versions = ["0.2.0","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncfp/README.html