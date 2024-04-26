:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqerakit'
.. highlight: bash

seqerakit
=========

.. conda:recipe:: seqerakit
   :replaces_section_title:
   :noindex:

   Automate creation of Seqera Platform resources

   :homepage: https://github.com/seqeralabs/seqera-kit
   :license: Apache-2.0
   :recipe: /`seqerakit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqerakit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqerakit/meta.yaml>`_

   


.. conda:package:: seqerakit

   |downloads_seqerakit| |docker_seqerakit|

   :versions:
      
      

      ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends python: ``>=3.8,<4.0``
   :depends pyyaml: ``>=6.0.0``
   :depends tower-cli: ``>=0.9.0``
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

      mamba install seqerakit

   and update with::

      mamba update seqerakit

  To create a new environment, run::

      mamba create --name myenvname seqerakit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqerakit:<tag>

   (see `seqerakit/tags`_ for valid values for ``<tag>``)


.. |downloads_seqerakit| image:: https://img.shields.io/conda/dn/bioconda/seqerakit.svg?style=flat
   :target: https://anaconda.org/bioconda/seqerakit
   :alt:   (downloads)
.. |docker_seqerakit| image:: https://quay.io/repository/biocontainers/seqerakit/status
   :target: https://quay.io/repository/biocontainers/seqerakit
.. _`seqerakit/tags`: https://quay.io/repository/biocontainers/seqerakit?tab=tags


.. raw:: html

    <script>
        var package = "seqerakit";
        var versions = ["0.4.7","0.4.6","0.4.5","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqerakit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqerakit/README.html