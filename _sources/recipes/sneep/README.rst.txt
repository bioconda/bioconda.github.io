:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sneep'
.. highlight: bash

sneep
=====

.. conda:recipe:: sneep
   :replaces_section_title:
   :noindex:

   Identify regulatory non\-coding SNPs \(rSNPs\)

   :homepage: https://github.com/SchulzLab/SNEEP
   :license: MIT
   :recipe: /`sneep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneep/meta.yaml>`_

   


.. conda:package:: sneep

   |downloads_sneep| |docker_sneep|

   :versions:
      
      

      ``0.4-1``,  ``0.4-0``

      

   
   :depends bedtools: ``>=2.27.1``
   :depends libcxx: ``>=14.0.6``
   :depends llvm-openmp: ``>=15.0.7``
   :depends llvm-openmp: ``>=16.0.4``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.19``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sneep

   and update with::

      conda update sneep

   or use the docker container::

      docker pull quay.io/biocontainers/sneep:<tag>

   (see `sneep/tags`_ for valid values for ``<tag>``)


.. |downloads_sneep| image:: https://img.shields.io/conda/dn/bioconda/sneep.svg?style=flat
   :target: https://anaconda.org/bioconda/sneep
   :alt:   (downloads)
.. |docker_sneep| image:: https://quay.io/repository/biocontainers/sneep/status
   :target: https://quay.io/repository/biocontainers/sneep
.. _`sneep/tags`: https://quay.io/repository/biocontainers/sneep?tab=tags


.. raw:: html

    <script>
        var package = "sneep";
        var versions = ["0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sneep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sneep/README.html