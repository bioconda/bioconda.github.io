:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icount-mini'
.. highlight: bash

icount-mini
===========

.. conda:recipe:: icount-mini
   :replaces_section_title:
   :noindex:

   Computational pipeline for analysis of iCLIP data

   :homepage: https://github.com/ulelab/iCount-Mini
   :license: MIT / MIT
   :recipe: /`icount-mini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount-mini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount-mini/meta.yaml>`_

   


.. conda:package:: icount-mini

   |downloads_icount-mini| |docker_icount-mini|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends bedtools: ``2.30.0``
   :depends cutadapt: ``>=1.10``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends numpydoc: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
   :depends sphinx: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install icount-mini

   and update with::

      conda update icount-mini

   or use the docker container::

      docker pull quay.io/biocontainers/icount-mini:<tag>

   (see `icount-mini/tags`_ for valid values for ``<tag>``)


.. |downloads_icount-mini| image:: https://img.shields.io/conda/dn/bioconda/icount-mini.svg?style=flat
   :target: https://anaconda.org/bioconda/icount-mini
   :alt:   (downloads)
.. |docker_icount-mini| image:: https://quay.io/repository/biocontainers/icount-mini/status
   :target: https://quay.io/repository/biocontainers/icount-mini
.. _`icount-mini/tags`: https://quay.io/repository/biocontainers/icount-mini?tab=tags


.. raw:: html

    <script>
        var package = "icount-mini";
        var versions = ["2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icount-mini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icount-mini/README.html