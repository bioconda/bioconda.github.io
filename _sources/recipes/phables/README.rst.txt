:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phables'
.. highlight: bash

phables
=======

.. conda:recipe:: phables
   :replaces_section_title:
   :noindex:

   Phables\: Phage bubbles resolve bacteriophage genomes in viral metagenomic samples

   :homepage: https://github.com/Vini2/phables
   :documentation: https://phables.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`phables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables/meta.yaml>`_

   Phables resolves bacteriophage genomes using phage bubbles in viral metagenomic data.



.. conda:package:: phables

   |downloads_phables| |docker_phables|

   :versions:
      
      

      ``0.1.0b7-0``

      

   
   :depends click: ``>=8.1.3``
   :depends jinja2: ``>=3.0.2``
   :depends mamba: ``>=0.15.3``
   :depends python: ``>=3.8,<3.11``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.14.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phables

   and update with::

      conda update phables

   or use the docker container::

      docker pull quay.io/biocontainers/phables:<tag>

   (see `phables/tags`_ for valid values for ``<tag>``)


.. |downloads_phables| image:: https://img.shields.io/conda/dn/bioconda/phables.svg?style=flat
   :target: https://anaconda.org/bioconda/phables
   :alt:   (downloads)
.. |docker_phables| image:: https://quay.io/repository/biocontainers/phables/status
   :target: https://quay.io/repository/biocontainers/phables
.. _`phables/tags`: https://quay.io/repository/biocontainers/phables?tab=tags


.. raw:: html

    <script>
        var package = "phables";
        var versions = ["0.1.0b7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phables/README.html