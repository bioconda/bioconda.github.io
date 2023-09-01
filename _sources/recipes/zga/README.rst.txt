:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zga'
.. highlight: bash

zga
===

.. conda:recipe:: zga
   :replaces_section_title:
   :noindex:

   Prokaryotic genome assembly and annotation pipeline

   :homepage: https://github.com/laxeye/zga
   :developer docs: https://github.com/laxeye/zga/
   :license: BSD / BSD
   :recipe: /`zga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga/meta.yaml>`_

   


.. conda:package:: zga

   |downloads_zga| |docker_zga|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.9.post2-1``,  ``0.0.9.post2-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``

      

   
   :depends bbmap: 
   :depends biopython: 
   :depends blast: 
   :depends checkm-genome: ``>=1.1.0``
   :depends dfast: ``>=1.2.12``
   :depends fastp: 
   :depends flye: ``>=2.6``
   :depends mash: ``>=2``
   :depends minimap2: 
   :depends nxtrim: 
   :depends python: ``>=3.6``
   :depends racon: 
   :depends samtools: ``>=1.9``
   :depends spades: ``>=3.12``
   :depends unicycler: 
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

      mamba install zga

   and update with::

      mamba update zga

  To create a new environment, run::

      mamba create --name myenvname zga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zga:<tag>

   (see `zga/tags`_ for valid values for ``<tag>``)


.. |downloads_zga| image:: https://img.shields.io/conda/dn/bioconda/zga.svg?style=flat
   :target: https://anaconda.org/bioconda/zga
   :alt:   (downloads)
.. |docker_zga| image:: https://quay.io/repository/biocontainers/zga/status
   :target: https://quay.io/repository/biocontainers/zga
.. _`zga/tags`: https://quay.io/repository/biocontainers/zga?tab=tags


.. raw:: html

    <script>
        var package = "zga";
        var versions = ["0.1.0","0.0.9.post2","0.0.9.post2","0.0.9","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zga/README.html