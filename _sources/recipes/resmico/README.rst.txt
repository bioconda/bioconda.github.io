:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resmico'
.. highlight: bash

resmico
=======

.. conda:recipe:: resmico
   :replaces_section_title:
   :noindex:

   Increasing the quality of metagenome\-assembled genomes with deep learning

   :homepage: https://github.com/leylabmpi/ResMiCo
   :license: MIT / MIT
   :recipe: /`resmico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico/meta.yaml>`_

   


.. conda:package:: resmico

   |downloads_resmico| |docker_resmico|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.12-0``

      

   
   :depends cmake: ``>=3.13``
   :depends ipython: 
   :depends keras: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.17``
   :depends numpy: ``>=1.23.4,<2.0a0``
   :depends pandas: ``>=1.1.2``
   :depends pathos: 
   :depends pysam: ``>=0.19``
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends scikit-learn: 
   :depends tensorboard: ``<2.9.0``
   :depends tensorflow: 
   :depends toolz: 
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install resmico

   and update with::

      conda update resmico

   or use the docker container::

      docker pull quay.io/biocontainers/resmico:<tag>

   (see `resmico/tags`_ for valid values for ``<tag>``)


.. |downloads_resmico| image:: https://img.shields.io/conda/dn/bioconda/resmico.svg?style=flat
   :target: https://anaconda.org/bioconda/resmico
   :alt:   (downloads)
.. |docker_resmico| image:: https://quay.io/repository/biocontainers/resmico/status
   :target: https://quay.io/repository/biocontainers/resmico
.. _`resmico/tags`: https://quay.io/repository/biocontainers/resmico?tab=tags


.. raw:: html

    <script>
        var package = "resmico";
        var versions = ["1.1.1","1.1.0","1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resmico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resmico/README.html