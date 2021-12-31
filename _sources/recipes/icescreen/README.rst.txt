:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icescreen'
.. highlight: bash

icescreen
=========

.. conda:recipe:: icescreen
   :replaces_section_title:
   :noindex:

   ICEscreen detects and annotates ICEs \(Integrative and Conjugative Elements\) and IMEs \(Integrative and Mobilizable Elements\) in Firmicutes genomes.

   :homepage: https://forgemia.inra.fr/ices_imes_analysis/icescreen
   :documentation: icescreen.migale.inrae.fr
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`icescreen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icescreen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icescreen/meta.yaml>`_

   


.. conda:package:: icescreen

   |downloads_icescreen| |docker_icescreen|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bcbio-gff: ``>=0.6.6``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.9.0``
   :depends hmmer: ``>=3.3.2``
   :depends pandas: ``>=0.25.3``
   :depends python: ``>=3.7``
   :depends snakemake-minimal: ``>=6.0.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install icescreen

   and update with::

      conda update icescreen

   or use the docker container::

      docker pull quay.io/biocontainers/icescreen:<tag>

   (see `icescreen/tags`_ for valid values for ``<tag>``)


.. |downloads_icescreen| image:: https://img.shields.io/conda/dn/bioconda/icescreen.svg?style=flat
   :target: https://anaconda.org/bioconda/icescreen
   :alt:   (downloads)
.. |docker_icescreen| image:: https://quay.io/repository/biocontainers/icescreen/status
   :target: https://quay.io/repository/biocontainers/icescreen
.. _`icescreen/tags`: https://quay.io/repository/biocontainers/icescreen?tab=tags


.. raw:: html

    <script>
        var package = "icescreen";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icescreen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icescreen/README.html