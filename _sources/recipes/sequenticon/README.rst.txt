:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenticon'
.. highlight: bash

sequenticon
===========

.. conda:recipe:: sequenticon
   :replaces_section_title:
   :noindex:

   Generate human\-friendly icons from DNA sequences.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/sequenticon
   :documentation: https://github.com/Edinburgh-Genome-Foundry/sequenticon/blob/v0.1.8/README.rst
   
   :license: MIT / MIT
   :recipe: /`sequenticon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenticon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenticon/meta.yaml>`_

   


.. conda:package:: sequenticon

   |downloads_sequenticon| |docker_sequenticon|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends biopython: 
   :depends flametree: 
   :depends pdf-reports: 
   :depends pydenticon: 
   :depends python: ``>=3.9``
   :depends snapgene-reader: 
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

      mamba install sequenticon

   and update with::

      mamba update sequenticon

  To create a new environment, run::

      mamba create --name myenvname sequenticon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequenticon:<tag>

   (see `sequenticon/tags`_ for valid values for ``<tag>``)


.. |downloads_sequenticon| image:: https://img.shields.io/conda/dn/bioconda/sequenticon.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenticon
   :alt:   (downloads)
.. |docker_sequenticon| image:: https://quay.io/repository/biocontainers/sequenticon/status
   :target: https://quay.io/repository/biocontainers/sequenticon
.. _`sequenticon/tags`: https://quay.io/repository/biocontainers/sequenticon?tab=tags


.. raw:: html

    <script>
        var package = "sequenticon";
        var versions = ["0.1.8","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenticon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenticon/README.html