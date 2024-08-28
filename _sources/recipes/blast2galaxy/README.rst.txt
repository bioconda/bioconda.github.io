:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast2galaxy'
.. highlight: bash

blast2galaxy
============

.. conda:recipe:: blast2galaxy
   :replaces_section_title:
   :noindex:

   A Python package with a CLI and API to perform BLAST queries against Galaxy servers

   :homepage: https://github.com/IPK-BIT/blast2galaxy
   :documentation: https://ipk-bit.github.io/blast2galaxy/
   
   :license: MIT
   :recipe: /`blast2galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast2galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast2galaxy/meta.yaml>`_

   


.. conda:package:: blast2galaxy

   |downloads_blast2galaxy| |docker_blast2galaxy|

   :versions:
      
      

      ``0.1.0a1-0``

      

   
   :depends bioblend: ``>=1.2.0,<2.0.0``
   :depends python: ``>=3.10,<4.0``
   :depends rich: ``>=13.6.0,<14.0.0``
   :depends tomli: ``>=2.0.1,<3.0.0``
   :depends typer: ``>=0.9.0,<0.10.0``
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

      mamba install blast2galaxy

   and update with::

      mamba update blast2galaxy

  To create a new environment, run::

      mamba create --name myenvname blast2galaxy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blast2galaxy:<tag>

   (see `blast2galaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_blast2galaxy| image:: https://img.shields.io/conda/dn/bioconda/blast2galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/blast2galaxy
   :alt:   (downloads)
.. |docker_blast2galaxy| image:: https://quay.io/repository/biocontainers/blast2galaxy/status
   :target: https://quay.io/repository/biocontainers/blast2galaxy
.. _`blast2galaxy/tags`: https://quay.io/repository/biocontainers/blast2galaxy?tab=tags


.. raw:: html

    <script>
        var package = "blast2galaxy";
        var versions = ["0.1.0a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast2galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast2galaxy/README.html