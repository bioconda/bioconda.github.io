:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylofisher'
.. highlight: bash

phylofisher
===========

.. conda:recipe:: phylofisher
   :replaces_section_title:
   :noindex:

   A package for the creation\, analysis\, and visualization of eukaryotic phylogenomic datasets.

   :homepage: https://github.com/TheBrownLab/PhyloFisher
   :license: MIT / MIT
   :recipe: /`phylofisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylofisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylofisher/meta.yaml>`_

   


.. conda:package:: phylofisher

   |downloads_phylofisher| |docker_phylofisher|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends astral-tree: ``5.7.8.*``
   :depends binutils: ``1.0.1.*``
   :depends biopython: ``1.78.*``
   :depends blast: ``2.9.0.*``
   :depends bmge: ``1.12.*``
   :depends cd-hit: ``4.8.1.*``
   :depends diamond: ``2.0.15.*``
   :depends dist_est: ``1.1.*``
   :depends divvier: ``1.01.*``
   :depends ete3: ``3.1.2.*``
   :depends fasttree: ``2.1.10.*``
   :depends hmmer: ``3.3.*``
   :depends mafft: ``7.455.*``
   :depends matplotlib-base: ``3.4.1.*``
   :depends pandas: ``1.2.4.*``
   :depends prequal: ``1.02.*``
   :depends pyqt: ``5.12.3.*``
   :depends python: ``3.7.10.*``
   :depends raxml: ``8.2.12.*``
   :depends snakemake-minimal: ``6.5.3.*``
   :depends trimal: ``1.4.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylofisher

   and update with::

      conda update phylofisher

   or use the docker container::

      docker pull quay.io/biocontainers/phylofisher:<tag>

   (see `phylofisher/tags`_ for valid values for ``<tag>``)


.. |downloads_phylofisher| image:: https://img.shields.io/conda/dn/bioconda/phylofisher.svg?style=flat
   :target: https://anaconda.org/bioconda/phylofisher
   :alt:   (downloads)
.. |docker_phylofisher| image:: https://quay.io/repository/biocontainers/phylofisher/status
   :target: https://quay.io/repository/biocontainers/phylofisher
.. _`phylofisher/tags`: https://quay.io/repository/biocontainers/phylofisher?tab=tags


.. raw:: html

    <script>
        var package = "phylofisher";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylofisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylofisher/README.html