:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swalign'
.. highlight: bash

swalign
=======

.. conda:recipe:: swalign
   :replaces_section_title:
   :noindex:

   Smith\-Waterman local aligner

   :homepage: https://github.com/mbreese/swalign/
   :license: BSD
   :recipe: /`swalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swalign/meta.yaml>`_

   


.. conda:package:: swalign

   |downloads_swalign| |docker_swalign|

   :versions:
      
      

      ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-2``,  ``0.3.3-0``

      

   
   :depends python: ``>=3.1``
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

      mamba install swalign

   and update with::

      mamba update swalign

  To create a new environment, run::

      mamba create --name myenvname swalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/swalign:<tag>

   (see `swalign/tags`_ for valid values for ``<tag>``)


.. |downloads_swalign| image:: https://img.shields.io/conda/dn/bioconda/swalign.svg?style=flat
   :target: https://anaconda.org/bioconda/swalign
   :alt:   (downloads)
.. |docker_swalign| image:: https://quay.io/repository/biocontainers/swalign/status
   :target: https://quay.io/repository/biocontainers/swalign
.. _`swalign/tags`: https://quay.io/repository/biocontainers/swalign?tab=tags


.. raw:: html

    <script>
        var package = "swalign";
        var versions = ["0.3.7","0.3.6","0.3.4","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swalign/README.html