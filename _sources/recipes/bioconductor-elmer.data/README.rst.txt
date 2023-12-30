:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elmer.data'
.. highlight: bash

bioconductor-elmer.data
=======================

.. conda:recipe:: bioconductor-elmer.data
   :replaces_section_title:
   :noindex:

   Data for the ELMER package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ELMER.data.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer.data/meta.yaml>`_

   Supporting data for the ELMER package. It includes\: \- elmer.data.example.promoter\: mae.promoter \- elmer.data.example\: data \- EPIC.hg38.manifest \- EPIC.hg19.manifest \- hm450.hg38.manifest \- hm450.hg19.manifest \- hocomoco.table \- human.TF \- LUSC\_meth\_refined\: Meth \- LUSC\_RNA\_refined\: GeneExp \- Probes.motif.hg19.450K \- Probes.motif.hg19.EPIC \- Probes.motif.hg38.450K \- Probes.motif.hg38.EPIC \- TF.family \- TF.subfamily \- Human\_genes\_\_GRCh37\_p13 \- Human\_genes\_\_GRCh38\_p12 \- Human\_genes\_\_GRCh37\_p13\_\_tss \- Human\_genes\_\_GRCh38\_p12\_\_tss


.. conda:package:: bioconductor-elmer.data

   |downloads_bioconductor-elmer.data| |docker_bioconductor-elmer.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``,  ``2.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-elmer.data

   and update with::

      mamba update bioconductor-elmer.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-elmer.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-elmer.data:<tag>

   (see `bioconductor-elmer.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-elmer.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elmer.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elmer.data
   :alt:   (downloads)
.. |docker_bioconductor-elmer.data| image:: https://quay.io/repository/biocontainers/bioconductor-elmer.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elmer.data
.. _`bioconductor-elmer.data/tags`: https://quay.io/repository/biocontainers/bioconductor-elmer.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-elmer.data";
        var versions = ["2.26.0","2.24.0","2.22.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elmer.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elmer.data/README.html