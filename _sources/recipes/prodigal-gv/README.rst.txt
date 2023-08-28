:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prodigal-gv'
.. highlight: bash

prodigal-gv
===========

.. conda:recipe:: prodigal-gv
   :replaces_section_title:
   :noindex:

   A fork of Prodigal meant to improve gene calling for giant viruses

   :homepage: https://github.com/apcamargo/prodigal-gv
   :license: GPL v3
   :recipe: /`prodigal-gv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal-gv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal-gv/meta.yaml>`_

   


.. conda:package:: prodigal-gv

   |downloads_prodigal-gv| |docker_prodigal-gv|

   :versions:
      
      

      ``2.11.0-2``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install prodigal-gv

   and update with::

      mamba update prodigal-gv

  To create a new environment, run::

      mamba create --name myenvname prodigal-gv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prodigal-gv:<tag>

   (see `prodigal-gv/tags`_ for valid values for ``<tag>``)


.. |downloads_prodigal-gv| image:: https://img.shields.io/conda/dn/bioconda/prodigal-gv.svg?style=flat
   :target: https://anaconda.org/bioconda/prodigal-gv
   :alt:   (downloads)
.. |docker_prodigal-gv| image:: https://quay.io/repository/biocontainers/prodigal-gv/status
   :target: https://quay.io/repository/biocontainers/prodigal-gv
.. _`prodigal-gv/tags`: https://quay.io/repository/biocontainers/prodigal-gv?tab=tags


.. raw:: html

    <script>
        var package = "prodigal-gv";
        var versions = ["2.11.0","2.11.0","2.11.0","2.10.0","2.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prodigal-gv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prodigal-gv/README.html