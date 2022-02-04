:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidemaker'
.. highlight: bash

guidemaker
==========

.. conda:recipe:: guidemaker
   :replaces_section_title:
   :noindex:

   GuideMaker\: Software to design gRNAs pools in non\-model genomes and CRISPR\-Cas systems

   :homepage: https://github.com/USDA-ARS-GBRU/GuideMaker
   :license: PUBLIC-DOMAIN / CC0 1.0
   :recipe: /`guidemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker/meta.yaml>`_
   :links: biotools: :biotools:`GuideMaker`, doi: :doi:`10.5281/zenodo.4849258`

   


.. conda:package:: guidemaker

   |downloads_guidemaker| |docker_guidemaker|

   :versions:
      
      

      ``0.3.4-0``,  ``0.2.0-0``

      

   
   :depends altair: 
   :depends biopython: ``>=1.79``
   :depends nmslib: ``>=2.0.6``
   :depends numpy: ``>=1.11``
   :depends onnxruntime: ``>=1.8.1``
   :depends pandas: ``>=1.0.0``
   :depends pdoc3: 
   :depends pip: 
   :depends pybedtools: ``>=0.8.2``
   :depends pytest: ``>=4.6``
   :depends pytest-cov: 
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.4.1``
   :depends regex: ``2020.11.13``
   :depends streamlit: ``>=0.81.0``
   :depends streamlit_tags: ``>=1.2.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guidemaker

   and update with::

      conda update guidemaker

   or use the docker container::

      docker pull quay.io/biocontainers/guidemaker:<tag>

   (see `guidemaker/tags`_ for valid values for ``<tag>``)


.. |downloads_guidemaker| image:: https://img.shields.io/conda/dn/bioconda/guidemaker.svg?style=flat
   :target: https://anaconda.org/bioconda/guidemaker
   :alt:   (downloads)
.. |docker_guidemaker| image:: https://quay.io/repository/biocontainers/guidemaker/status
   :target: https://quay.io/repository/biocontainers/guidemaker
.. _`guidemaker/tags`: https://quay.io/repository/biocontainers/guidemaker?tab=tags


.. raw:: html

    <script>
        var package = "guidemaker";
        var versions = ["0.3.4","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidemaker/README.html