:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poa'
.. highlight: bash

poa
===

.. conda:recipe:: poa
   :replaces_section_title:
   :noindex:

   POA is Partial Order Alignment\, a fast program for multiple sequence alignment in bioinformatics. Its advantages are speed\, scalability\, sensitivity\, and the superior ability to handle branching \/ indels in the alignment.

   :homepage: https://sourceforge.net/projects/poamsa
   :license: GPLv2
   :recipe: /`poa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa/meta.yaml>`_

   


.. conda:package:: poa

   |downloads_poa| |docker_poa|

   :versions:
      
      

      ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends blast-legacy: 
   :depends libgcc-ng: ``>=12``
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

      mamba install poa

   and update with::

      mamba update poa

  To create a new environment, run::

      mamba create --name myenvname poa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poa:<tag>

   (see `poa/tags`_ for valid values for ``<tag>``)


.. |downloads_poa| image:: https://img.shields.io/conda/dn/bioconda/poa.svg?style=flat
   :target: https://anaconda.org/bioconda/poa
   :alt:   (downloads)
.. |docker_poa| image:: https://quay.io/repository/biocontainers/poa/status
   :target: https://quay.io/repository/biocontainers/poa
.. _`poa/tags`: https://quay.io/repository/biocontainers/poa?tab=tags


.. raw:: html

    <script>
        var package = "poa";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poa/README.html