:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pneumo-typer'
.. highlight: bash

pneumo-typer
============

.. conda:recipe:: pneumo-typer
   :replaces_section_title:
   :noindex:

   Pneumo\-Typer is a fast and simple\-to\-use tool for predicting serotype and determining sequence type \(St\/cgSt\) for Streptococcus pneumoniae.

   :homepage: https://www.microbialgenomic.cn/Pneumo-Typer.html
   :documentation: How to install and use Pneumo-Typer at 'https://www.microbialgenomic.cn/Pneumo-Typer.html' and or https://github.com/Xiangyang1984/Pneumo-Typer.
   
   :license: perl_5
   :recipe: /`pneumo-typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumo-typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumo-typer/meta.yaml>`_

   Pneumo\-Typer is a stand\-alone perl application\, which requires blat\, prodigal\, NCBI BLASt\+\, boat and several perl Modules \(GD\, GD\:\:SVG\) to be installed before use.


.. conda:package:: pneumo-typer

   |downloads_pneumo-typer| |docker_pneumo-typer|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends blast: 
   :depends blat: 
   :depends perl-bioperl-core: 
   :depends perl-gd: 
   :depends perl-gd-svg: 
   :depends perl-svg: 
   :depends prodigal: 
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

      mamba install pneumo-typer

   and update with::

      mamba update pneumo-typer

  To create a new environment, run::

      mamba create --name myenvname pneumo-typer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pneumo-typer:<tag>

   (see `pneumo-typer/tags`_ for valid values for ``<tag>``)


.. |downloads_pneumo-typer| image:: https://img.shields.io/conda/dn/bioconda/pneumo-typer.svg?style=flat
   :target: https://anaconda.org/bioconda/pneumo-typer
   :alt:   (downloads)
.. |docker_pneumo-typer| image:: https://quay.io/repository/biocontainers/pneumo-typer/status
   :target: https://quay.io/repository/biocontainers/pneumo-typer
.. _`pneumo-typer/tags`: https://quay.io/repository/biocontainers/pneumo-typer?tab=tags


.. raw:: html

    <script>
        var package = "pneumo-typer";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pneumo-typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pneumo-typer/README.html