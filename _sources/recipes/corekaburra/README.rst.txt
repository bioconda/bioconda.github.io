:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corekaburra'
.. highlight: bash

corekaburra
===========

.. conda:recipe:: corekaburra
   :replaces_section_title:
   :noindex:

   A commandline bioinformatics tool made to utilize syntenic information from genomes in the context of pan\-genomes

   :homepage: https://github.com/milnus/Corekaburra
   :documentation: https://github.com/milnus/Corekaburra/wiki
   
   :license: MIT / MIT
   :recipe: /`corekaburra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corekaburra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corekaburra/meta.yaml>`_

   


.. conda:package:: corekaburra

   |downloads_corekaburra| |docker_corekaburra|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends biopython: ``1.79``
   :depends gffutils: ``0.10.1``
   :depends networkx: ``2.6.3``
   :depends python: ``>=3.9``
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

      mamba install corekaburra

   and update with::

      mamba update corekaburra

  To create a new environment, run::

      mamba create --name myenvname corekaburra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corekaburra:<tag>

   (see `corekaburra/tags`_ for valid values for ``<tag>``)


.. |downloads_corekaburra| image:: https://img.shields.io/conda/dn/bioconda/corekaburra.svg?style=flat
   :target: https://anaconda.org/bioconda/corekaburra
   :alt:   (downloads)
.. |docker_corekaburra| image:: https://quay.io/repository/biocontainers/corekaburra/status
   :target: https://quay.io/repository/biocontainers/corekaburra
.. _`corekaburra/tags`: https://quay.io/repository/biocontainers/corekaburra?tab=tags


.. raw:: html

    <script>
        var package = "corekaburra";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corekaburra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corekaburra/README.html