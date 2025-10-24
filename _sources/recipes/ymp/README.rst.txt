:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ymp'
.. highlight: bash

ymp
===

.. conda:recipe:: ymp
   :replaces_section_title:
   :noindex:

   Create entire NGS pipelines with one command

   :homepage: https://ymp.readthedocs.io
   :developer docs: https://github.com/epruesse/ymp
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`ymp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp/meta.yaml>`_

   YMP allows composing complex NGS data analysis workflows from
   conceptual building blocks \(\"stages\"\) using a single command line
   statement. Pre\-tested conda environments are installed on\-the fly\,
   reference databases downloaded as needed and requested workflows
   executed using Snakemake.

   With YMP\, developing new pipelines or testing alternative
   approaches using differnt tools or optimizing parameters becomes
   easy. Results from previous results are reused where possible. The
   collection of stages included with YMP is can be extended with
   project specific YMP stage definitions or simple Snakefiles.



.. conda:package:: ymp

   |downloads_ymp| |docker_ymp|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.0-0``

      

   
   :depends aiohttp: 
   :depends click: ``>8``
   :depends click-completion: 
   :depends coloredlogs: 
   :depends conda: 
   :depends drmaa: 
   :depends mamba: 
   :depends networkx: ``>=2``
   :depends openpyxl: 
   :depends pandas: ``>=0.20``
   :depends python: ``>=3.10``
   :depends ruamel.yaml: ``>0.15``
   :depends snakemake: ``>=7.32.1,<8.0a0``
   :depends tqdm: ``>=4.21.0``
   :depends xdg: 
   :depends xlrd: 
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

      mamba install ymp

   and update with::

      mamba update ymp

  To create a new environment, run::

      mamba create --name myenvname ymp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ymp:<tag>

   (see `ymp/tags`_ for valid values for ``<tag>``)


.. |downloads_ymp| image:: https://img.shields.io/conda/dn/bioconda/ymp.svg?style=flat
   :target: https://anaconda.org/bioconda/ymp
   :alt:   (downloads)
.. |docker_ymp| image:: https://quay.io/repository/biocontainers/ymp/status
   :target: https://quay.io/repository/biocontainers/ymp
.. _`ymp/tags`: https://quay.io/repository/biocontainers/ymp?tab=tags


.. raw:: html

    <script>
        var package = "ymp";
        var versions = ["0.3.2","0.3.1","0.2.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ymp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ymp/README.html