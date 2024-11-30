:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnacode'
.. highlight: bash

rnacode
=======

.. conda:recipe:: rnacode
   :replaces_section_title:
   :noindex:

   RNAcode \- Analyze the protein coding potential in multiple sequence alignments RNAcode relies on evolutionary signatures including synonymous\/conservative mutations and conservation of the reading frame. It does not use any species specific sequence characteristics whatsoever and does not use any machine learning techniques.

   :homepage: http://wash.github.io/rnacode/
   :license: unknown
   :recipe: /`rnacode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnacode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnacode/meta.yaml>`_

   


.. conda:package:: rnacode

   |downloads_rnacode| |docker_rnacode|

   :versions:
      
      

      ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
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

      mamba install rnacode

   and update with::

      mamba update rnacode

  To create a new environment, run::

      mamba create --name myenvname rnacode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnacode:<tag>

   (see `rnacode/tags`_ for valid values for ``<tag>``)


.. |downloads_rnacode| image:: https://img.shields.io/conda/dn/bioconda/rnacode.svg?style=flat
   :target: https://anaconda.org/bioconda/rnacode
   :alt:   (downloads)
.. |docker_rnacode| image:: https://quay.io/repository/biocontainers/rnacode/status
   :target: https://quay.io/repository/biocontainers/rnacode
.. _`rnacode/tags`: https://quay.io/repository/biocontainers/rnacode?tab=tags


.. raw:: html

    <script>
        var package = "rnacode";
        var versions = ["0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnacode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnacode/README.html