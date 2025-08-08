:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana_pipetools'
.. highlight: bash

sequana_pipetools
=================

.. conda:recipe:: sequana_pipetools
   :replaces_section_title:
   :noindex:

   A set of tools to help building or using Sequana pipelines

   :homepage: https://github.com/sequana/sequana_pipetools
   :documentation: https://sequana.readthedocs.io/en/main/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sequana_pipetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools/meta.yaml>`_

   


.. conda:package:: sequana_pipetools

   |downloads_sequana_pipetools| |docker_sequana_pipetools|

   :versions:
      
      

      ``1.2.2-0``,  ``0.9.4-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.6-0``,  ``0.7.5-0``

      

   
   :depends aiohttp: ``>=3.8.4``
   :depends charset-normalizer: ``>=2.0.0,<3.0.0``
   :depends deprecated: ``>=1.2.13``
   :depends easydev: ``>=0.12.1``
   :depends importlib_resources: ``>=5.4.0``
   :depends packaging: ``>=23.1``
   :depends parse: ``>=1.19.0``
   :depends pykwalify: ``>=1.8``
   :depends python: ``>=3.8``
   :depends pyyaml: ``>=1.3``
   :depends requests: 
   :depends ruamel.yaml: ``>=0.17.32``
   :depends tqdm: ``>=4.65``
   :depends versionix: ``>=0.2.0``
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

      mamba install sequana_pipetools

   and update with::

      mamba update sequana_pipetools

  To create a new environment, run::

      mamba create --name myenvname sequana_pipetools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequana_pipetools:<tag>

   (see `sequana_pipetools/tags`_ for valid values for ``<tag>``)


.. |downloads_sequana_pipetools| image:: https://img.shields.io/conda/dn/bioconda/sequana_pipetools.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana_pipetools
   :alt:   (downloads)
.. |docker_sequana_pipetools| image:: https://quay.io/repository/biocontainers/sequana_pipetools/status
   :target: https://quay.io/repository/biocontainers/sequana_pipetools
.. _`sequana_pipetools/tags`: https://quay.io/repository/biocontainers/sequana_pipetools?tab=tags


.. raw:: html

    <script>
        var package = "sequana_pipetools";
        var versions = ["1.2.2","0.9.4","0.9.0","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana_pipetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana_pipetools/README.html