:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zarp'
.. highlight: bash

zarp
====

.. conda:recipe:: zarp
   :replaces_section_title:
   :noindex:

   User\-friendly command\-line interface for the ZARP RNA\-Seq analysis pipeline

   :homepage: https://github.com/zavolanlab/zarp-cli
   :documentation: https://zavolanlab.github.io/zarp-cli
   
   :developer docs: https://github.com/zavolanlab/zarp-cli/tree/dev
   :license: APACHE / Apache License 2.0
   :recipe: /`zarp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp/meta.yaml>`_

   


.. conda:package:: zarp

   |downloads_zarp| |docker_zarp|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends addict: ``>=2.4.0``
   :depends bidict: ``>=0.22.0``
   :depends email-validator: ``>=1.2.1``
   :depends jsonref: ``>=0.2``
   :depends pandas: ``>=1.3.5``
   :depends pydantic: ``>=1.9.2``
   :depends pydantic-collections: ``>=0.3.0``
   :depends pygments: ``>=2.8.0``
   :depends python: ``>=3.7``
   :depends rich: ``>=12.5.1``
   :depends snakemake: ``>=7.19.1``
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

      mamba install zarp

   and update with::

      mamba update zarp

  To create a new environment, run::

      mamba create --name myenvname zarp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zarp:<tag>

   (see `zarp/tags`_ for valid values for ``<tag>``)


.. |downloads_zarp| image:: https://img.shields.io/conda/dn/bioconda/zarp.svg?style=flat
   :target: https://anaconda.org/bioconda/zarp
   :alt:   (downloads)
.. |docker_zarp| image:: https://quay.io/repository/biocontainers/zarp/status
   :target: https://quay.io/repository/biocontainers/zarp
.. _`zarp/tags`: https://quay.io/repository/biocontainers/zarp?tab=tags


.. raw:: html

    <script>
        var package = "zarp";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zarp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zarp/README.html