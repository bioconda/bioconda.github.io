:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viroconstrictor'
.. highlight: bash

viroconstrictor
===============

.. conda:recipe:: viroconstrictor
   :replaces_section_title:
   :noindex:

   ViroConstrictor is a flexible pipeline for analysis of targeted viral sequencing data

   :homepage: https://rivm-bioinformatics.github.io/ViroConstrictor/
   :developer docs: https://github.com/RIVM-bioinformatics/ViroConstrictor
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`viroconstrictor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viroconstrictor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viroconstrictor/meta.yaml>`_

   


.. conda:package:: viroconstrictor

   |downloads_viroconstrictor| |docker_viroconstrictor|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends aminoextract: ``0.2.1``
   :depends biopython: ``1.79``
   :depends conda: 
   :depends drmaa: ``0.7.9``
   :depends fpdf2: ``2.5.1``
   :depends mamba: 
   :depends openpyxl: ``3.0.9``
   :depends pandas: ``1.4.2``
   :depends python: ``>=3.10``
   :depends pyyaml: ``6.0``
   :depends rich: ``13.*``
   :depends snakemake: ``>=7.15.2``
   :depends urllib3: ``>=1.26``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install viroconstrictor

   and update with::

      conda update viroconstrictor

   or use the docker container::

      docker pull quay.io/biocontainers/viroconstrictor:<tag>

   (see `viroconstrictor/tags`_ for valid values for ``<tag>``)


.. |downloads_viroconstrictor| image:: https://img.shields.io/conda/dn/bioconda/viroconstrictor.svg?style=flat
   :target: https://anaconda.org/bioconda/viroconstrictor
   :alt:   (downloads)
.. |docker_viroconstrictor| image:: https://quay.io/repository/biocontainers/viroconstrictor/status
   :target: https://quay.io/repository/biocontainers/viroconstrictor
.. _`viroconstrictor/tags`: https://quay.io/repository/biocontainers/viroconstrictor?tab=tags


.. raw:: html

    <script>
        var package = "viroconstrictor";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viroconstrictor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viroconstrictor/README.html