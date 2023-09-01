:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgfast'
.. highlight: bash

wgfast
======

.. conda:recipe:: wgfast
   :replaces_section_title:
   :noindex:

   The whole genome focused array SNP typing \(WG\-FAST\) pipeline

   :homepage: https://github.com/jasonsahl/wgfast
   :license: GPL / GPL v3
   :recipe: /`wgfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast/meta.yaml>`_

   


.. conda:package:: wgfast

   |downloads_wgfast| |docker_wgfast|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends bbmap: 
   :depends biopython: 
   :depends bwa: 
   :depends click: 
   :depends dendropy: 
   :depends ete3: 
   :depends logbook: 
   :depends mash: 
   :depends nasp: 
   :depends ncbitk: 
   :depends pandas: 
   :depends pathos: 
   :depends picard: 
   :depends python: ``>=3``
   :depends qt: 
   :depends raxml: 
   :depends retrying: 
   :depends samtools: 
   :depends snakemake: ``>=5``
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

      mamba install wgfast

   and update with::

      mamba update wgfast

  To create a new environment, run::

      mamba create --name myenvname wgfast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgfast:<tag>

   (see `wgfast/tags`_ for valid values for ``<tag>``)


.. |downloads_wgfast| image:: https://img.shields.io/conda/dn/bioconda/wgfast.svg?style=flat
   :target: https://anaconda.org/bioconda/wgfast
   :alt:   (downloads)
.. |docker_wgfast| image:: https://quay.io/repository/biocontainers/wgfast/status
   :target: https://quay.io/repository/biocontainers/wgfast
.. _`wgfast/tags`: https://quay.io/repository/biocontainers/wgfast?tab=tags


.. raw:: html

    <script>
        var package = "wgfast";
        var versions = ["1.0.4","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgfast/README.html