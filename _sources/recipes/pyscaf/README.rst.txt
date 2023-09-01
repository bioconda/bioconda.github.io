:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyscaf'
.. highlight: bash

pyscaf
======

.. conda:recipe:: pyscaf
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolding using information from paired\-end\/mate\-pair libraries\, long reads\, and synteny to closely related species.

   :homepage: https://github.com/lpryszcz/pyScaf
   :license: GPL3 / GPLv3
   :recipe: /`pyscaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscaf/meta.yaml>`_

   


.. conda:package:: pyscaf

   |downloads_pyscaf| |docker_pyscaf|

   :versions:
      
      

      ``0.12a4-3``,  ``0.12a4-2``,  ``0.12a4-0``

      

   
   :depends fastaindex: 
   :depends python: ``<3``
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

      mamba install pyscaf

   and update with::

      mamba update pyscaf

  To create a new environment, run::

      mamba create --name myenvname pyscaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyscaf:<tag>

   (see `pyscaf/tags`_ for valid values for ``<tag>``)


.. |downloads_pyscaf| image:: https://img.shields.io/conda/dn/bioconda/pyscaf.svg?style=flat
   :target: https://anaconda.org/bioconda/pyscaf
   :alt:   (downloads)
.. |docker_pyscaf| image:: https://quay.io/repository/biocontainers/pyscaf/status
   :target: https://quay.io/repository/biocontainers/pyscaf
.. _`pyscaf/tags`: https://quay.io/repository/biocontainers/pyscaf?tab=tags


.. raw:: html

    <script>
        var package = "pyscaf";
        var versions = ["0.12a4","0.12a4","0.12a4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyscaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyscaf/README.html