:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genmod'
.. highlight: bash

genmod
======

.. conda:recipe:: genmod
   :replaces_section_title:
   :noindex:

   Annotate genetic inheritance models in variant files

   :homepage: http://github.com/moonso/genmod
   :license: MIT / MIT
   :recipe: /`genmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod/meta.yaml>`_

   


.. conda:package:: genmod

   |downloads_genmod| |docker_genmod|

   :versions:
      
      

      ``3.7.4-0``

      

   
   :depends click: ``<7``
   :depends configobj: 
   :depends extract_vcf: ``>=0.4.2``
   :depends interval_tree: ``>=0.3.2``
   :depends intervaltree: 
   :depends ped_parser: ``>=1.6.2``
   :depends pytabix: 
   :depends pytest: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genmod

   and update with::

      conda update genmod

   or use the docker container::

      docker pull quay.io/biocontainers/genmod:<tag>

   (see `genmod/tags`_ for valid values for ``<tag>``)


.. |downloads_genmod| image:: https://img.shields.io/conda/dn/bioconda/genmod.svg?style=flat
   :target: https://anaconda.org/bioconda/genmod
   :alt:   (downloads)
.. |docker_genmod| image:: https://quay.io/repository/biocontainers/genmod/status
   :target: https://quay.io/repository/biocontainers/genmod
.. _`genmod/tags`: https://quay.io/repository/biocontainers/genmod?tab=tags


.. raw:: html

    <script>
        var package = "genmod";
        var versions = ["3.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genmod/README.html