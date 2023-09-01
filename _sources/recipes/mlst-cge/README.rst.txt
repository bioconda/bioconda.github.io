:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlst-cge'
.. highlight: bash

mlst-cge
========

.. conda:recipe:: mlst-cge
   :replaces_section_title:
   :noindex:

   Multi Locus Sequence Typing \(MLST\) determine the ST from an assembled genome or from a set of reads.

   :homepage: https://bitbucket.org/genomicepidemiology/mlst
   :license: APACHE / APACHE-2.0
   :recipe: /`mlst-cge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst-cge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst-cge/meta.yaml>`_

   


.. conda:package:: mlst-cge

   |downloads_mlst-cge| |docker_mlst-cge|

   :versions:
      
      

      ``2.0.9-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``1.5.5.*``
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: ``0.7.7.*``
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

      mamba install mlst-cge

   and update with::

      mamba update mlst-cge

  To create a new environment, run::

      mamba create --name myenvname mlst-cge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlst-cge:<tag>

   (see `mlst-cge/tags`_ for valid values for ``<tag>``)


.. |downloads_mlst-cge| image:: https://img.shields.io/conda/dn/bioconda/mlst-cge.svg?style=flat
   :target: https://anaconda.org/bioconda/mlst-cge
   :alt:   (downloads)
.. |docker_mlst-cge| image:: https://quay.io/repository/biocontainers/mlst-cge/status
   :target: https://quay.io/repository/biocontainers/mlst-cge
.. _`mlst-cge/tags`: https://quay.io/repository/biocontainers/mlst-cge?tab=tags


.. raw:: html

    <script>
        var package = "mlst-cge";
        var versions = ["2.0.9"];
    </script>





Notes
-----
MLST requires a database that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlst-cge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlst-cge/README.html