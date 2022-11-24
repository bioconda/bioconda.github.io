:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cherri'
.. highlight: bash

cherri
======

.. conda:recipe:: cherri
   :replaces_section_title:
   :noindex:

   Accurate detection of functional RNA\-RNA Interactions sites

   :homepage: https://github.com/BackofenLab/Cherri
   :license: GPL-3.0 license
   :recipe: /`cherri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cherri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cherri/meta.yaml>`_

   


.. conda:package:: cherri

   |downloads_cherri| |docker_cherri|

   :versions:
      
      

      ``0.6-0``

      

   
   :depends bedtools: 
   :depends biofilm: 
   :depends biopython: 
   :depends eden-kernel: 
   :depends intarna: 
   :depends interlap: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pip: 
   :depends python: 
   :depends python-wget: 
   :depends scikit-learn: 
   :depends ubergauss: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cherri

   and update with::

      conda update cherri

   or use the docker container::

      docker pull quay.io/biocontainers/cherri:<tag>

   (see `cherri/tags`_ for valid values for ``<tag>``)


.. |downloads_cherri| image:: https://img.shields.io/conda/dn/bioconda/cherri.svg?style=flat
   :target: https://anaconda.org/bioconda/cherri
   :alt:   (downloads)
.. |docker_cherri| image:: https://quay.io/repository/biocontainers/cherri/status
   :target: https://quay.io/repository/biocontainers/cherri
.. _`cherri/tags`: https://quay.io/repository/biocontainers/cherri?tab=tags


.. raw:: html

    <script>
        var package = "cherri";
        var versions = ["0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cherri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cherri/README.html