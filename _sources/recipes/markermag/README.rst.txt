:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markermag'
.. highlight: bash

markermag
=========

.. conda:recipe:: markermag
   :replaces_section_title:
   :noindex:

   linking MAGs with 16S rRNA marker genes

   :homepage: https://pypi.org/project/MarkerMAG/
   :license: AGPL-3.0
   :recipe: /`markermag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markermag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markermag/meta.yaml>`_

   


.. conda:package:: markermag

   |downloads_markermag| |docker_markermag|

   :versions:
      
      

      ``1.1.28-0``,  ``1.1.27-0``,  ``1.1.26-0``

      

   
   :depends barrnap: 
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends hmmer: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: 
   :depends samtools: 
   :depends seaborn: 
   :depends seqtk: 
   :depends setuptools: 
   :depends spades: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install markermag

   and update with::

      conda update markermag

   or use the docker container::

      docker pull quay.io/biocontainers/markermag:<tag>

   (see `markermag/tags`_ for valid values for ``<tag>``)


.. |downloads_markermag| image:: https://img.shields.io/conda/dn/bioconda/markermag.svg?style=flat
   :target: https://anaconda.org/bioconda/markermag
   :alt:   (downloads)
.. |docker_markermag| image:: https://quay.io/repository/biocontainers/markermag/status
   :target: https://quay.io/repository/biocontainers/markermag
.. _`markermag/tags`: https://quay.io/repository/biocontainers/markermag?tab=tags


.. raw:: html

    <script>
        var package = "markermag";
        var versions = ["1.1.28","1.1.27","1.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markermag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markermag/README.html