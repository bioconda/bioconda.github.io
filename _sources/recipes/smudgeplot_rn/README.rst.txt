:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smudgeplot_rn'
.. highlight: bash

smudgeplot_rn
=============

.. conda:recipe:: smudgeplot_rn
   :replaces_section_title:
   :noindex:

   Inference of ploidy and heterozygosity structure using whole genome sequencing data. Fork of Kamil S. Jarons Smudgeplot.

   :homepage: https://github.com/RNieuwenhuis/smudgeplot
   :license: Apache-2.0
   :recipe: /`smudgeplot_rn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot_rn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot_rn/meta.yaml>`_

   


.. conda:package:: smudgeplot_rn

   |downloads_smudgeplot_rn| |docker_smudgeplot_rn|

   :versions:
      
      

      ``0.2.5_RN-2``,  ``0.2.5_RN-1``,  ``0.2.5_RN-0``,  ``0.2.4_RN-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends r-argparse: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-viridis: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smudgeplot_rn

   and update with::

      conda update smudgeplot_rn

   or use the docker container::

      docker pull quay.io/biocontainers/smudgeplot_rn:<tag>

   (see `smudgeplot_rn/tags`_ for valid values for ``<tag>``)


.. |downloads_smudgeplot_rn| image:: https://img.shields.io/conda/dn/bioconda/smudgeplot_rn.svg?style=flat
   :target: https://anaconda.org/bioconda/smudgeplot_rn
   :alt:   (downloads)
.. |docker_smudgeplot_rn| image:: https://quay.io/repository/biocontainers/smudgeplot_rn/status
   :target: https://quay.io/repository/biocontainers/smudgeplot_rn
.. _`smudgeplot_rn/tags`: https://quay.io/repository/biocontainers/smudgeplot_rn?tab=tags


.. raw:: html

    <script>
        var package = "smudgeplot_rn";
        var versions = ["0.2.5_RN","0.2.5_RN","0.2.5_RN","0.2.4_RN"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smudgeplot_rn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smudgeplot_rn/README.html