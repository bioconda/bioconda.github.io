:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sativa'
.. highlight: bash

sativa
======

.. conda:recipe:: sativa
   :replaces_section_title:
   :noindex:

   SATIVA Semi\-Automatic Taxonomy Improvement and Validation Algorithm

   :homepage: https://github.com/amkozlov/sativa
   :license: GPL / GPL-3
   :recipe: /`sativa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sativa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sativa/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw396`

   


.. conda:package:: sativa

   |downloads_sativa| |docker_sativa|

   :versions:
      
      

      ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install sativa

   and update with::

      mamba update sativa

  To create a new environment, run::

      mamba create --name myenvname sativa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sativa:<tag>

   (see `sativa/tags`_ for valid values for ``<tag>``)


.. |downloads_sativa| image:: https://img.shields.io/conda/dn/bioconda/sativa.svg?style=flat
   :target: https://anaconda.org/bioconda/sativa
   :alt:   (downloads)
.. |docker_sativa| image:: https://quay.io/repository/biocontainers/sativa/status
   :target: https://quay.io/repository/biocontainers/sativa
.. _`sativa/tags`: https://quay.io/repository/biocontainers/sativa?tab=tags


.. raw:: html

    <script>
        var package = "sativa";
        var versions = ["0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sativa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sativa/README.html