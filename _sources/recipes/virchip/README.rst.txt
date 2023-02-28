:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virchip'
.. highlight: bash

virchip
=======

.. conda:recipe:: virchip
   :replaces_section_title:
   :noindex:

   Virtual ChIP\-seq predicts transcription factor binding in any cell type with chromatin accessibility and transcriptome data. Manuscript DOI\: https\:\/\/doi.org\/10.1101\/168419

   :homepage: https://virchip.hoffmanlab.org
   :license: General Public License version 3
   :recipe: /`virchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip/meta.yaml>`_

   


.. conda:package:: virchip

   |downloads_virchip| |docker_virchip|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends numpy: ``>=1.4.15``
   :depends pandas: ``0.23.*``
   :depends python: ``<3``
   :depends r-base: 
   :depends scikit-learn: ``>=0.18.1``
   :depends scipy: ``1.1.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virchip

   and update with::

      conda update virchip

   or use the docker container::

      docker pull quay.io/biocontainers/virchip:<tag>

   (see `virchip/tags`_ for valid values for ``<tag>``)


.. |downloads_virchip| image:: https://img.shields.io/conda/dn/bioconda/virchip.svg?style=flat
   :target: https://anaconda.org/bioconda/virchip
   :alt:   (downloads)
.. |docker_virchip| image:: https://quay.io/repository/biocontainers/virchip/status
   :target: https://quay.io/repository/biocontainers/virchip
.. _`virchip/tags`: https://quay.io/repository/biocontainers/virchip?tab=tags


.. raw:: html

    <script>
        var package = "virchip";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virchip/README.html