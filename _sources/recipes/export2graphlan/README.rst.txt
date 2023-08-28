:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'export2graphlan'
.. highlight: bash

export2graphlan
===============

.. conda:recipe:: export2graphlan
   :replaces_section_title:
   :noindex:

   Conversion software tool for annotating tree with GraPhlAn

   :homepage: https://github.com/segatalab/export2graphlan
   :license: MIT / MIT License
   :recipe: /`export2graphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan/meta.yaml>`_

   export2graphlan is a conversion software tool for producing both annotation and tree file for GraPhlAn.
   It automatically generate the input tree and the annotation file for GraPhlAn\, starting from the
   input\/output of MetaPhlAn\, LEfSe\, and HUMAnN. It supports also the biom file format. The annotation file
   will highlight specific sub\-trees\/clades automatically inferred from input file\(s\) provided. The two output
   file of export2graphlan should then be used with GraPhlAn.


.. conda:package:: export2graphlan

   |downloads_export2graphlan| |docker_export2graphlan|

   :versions:
      
      

      ``0.22-0``,  ``0.20-0``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      

   
   :depends hclust2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``2.7.*``
   :depends scipy: 
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

      mamba install export2graphlan

   and update with::

      mamba update export2graphlan

  To create a new environment, run::

      mamba create --name myenvname export2graphlan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/export2graphlan:<tag>

   (see `export2graphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_export2graphlan| image:: https://img.shields.io/conda/dn/bioconda/export2graphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/export2graphlan
   :alt:   (downloads)
.. |docker_export2graphlan| image:: https://quay.io/repository/biocontainers/export2graphlan/status
   :target: https://quay.io/repository/biocontainers/export2graphlan
.. _`export2graphlan/tags`: https://quay.io/repository/biocontainers/export2graphlan?tab=tags


.. raw:: html

    <script>
        var package = "export2graphlan";
        var versions = ["0.22","0.20","0.19","0.19","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/export2graphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/export2graphlan/README.html