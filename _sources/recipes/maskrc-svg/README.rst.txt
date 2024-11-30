:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maskrc-svg'
.. highlight: bash

maskrc-svg
==========

.. conda:recipe:: maskrc-svg
   :replaces_section_title:
   :noindex:

   Masks recombinant regions in an alignment based on ClonalFrameML or Gubbins output Option to draw SVG of recombinant regions.

   :homepage: https://github.com/kwongj/maskrc-svg
   :license: GPL-3.0
   :recipe: /`maskrc-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg/meta.yaml>`_

   


.. conda:package:: maskrc-svg

   |downloads_maskrc-svg| |docker_maskrc-svg|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends ete3: 
   :depends python: 
   :depends svgwrite: 
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

      mamba install maskrc-svg

   and update with::

      mamba update maskrc-svg

  To create a new environment, run::

      mamba create --name myenvname maskrc-svg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maskrc-svg:<tag>

   (see `maskrc-svg/tags`_ for valid values for ``<tag>``)


.. |downloads_maskrc-svg| image:: https://img.shields.io/conda/dn/bioconda/maskrc-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/maskrc-svg
   :alt:   (downloads)
.. |docker_maskrc-svg| image:: https://quay.io/repository/biocontainers/maskrc-svg/status
   :target: https://quay.io/repository/biocontainers/maskrc-svg
.. _`maskrc-svg/tags`: https://quay.io/repository/biocontainers/maskrc-svg?tab=tags


.. raw:: html

    <script>
        var package = "maskrc-svg";
        var versions = ["0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maskrc-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maskrc-svg/README.html