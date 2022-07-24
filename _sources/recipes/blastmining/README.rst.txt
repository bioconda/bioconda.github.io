:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastmining'
.. highlight: bash

blastmining
===========

.. conda:recipe:: blastmining
   :replaces_section_title:
   :noindex:

   blastMining\: Mining NCBI BLAST outputs

   :homepage: https://github.com/NuruddinKhoiry/blastMining
   :documentation: https://github.com/NuruddinKhoiry/blastMining/blob/master/README.md
   
   :license: GPL3 / GNU GENERAL PUBLIC V3
   :recipe: /`blastmining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining/meta.yaml>`_
   :links: biotools: :biotools:`blastMining`, doi: :doi:`10.5281/zenodo.6823244`

   


.. conda:package:: blastmining

   |downloads_blastmining| |docker_blastmining|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends blast: ``2.12.0.*``
   :depends csvtk: 
   :depends fastnumbers: 
   :depends krona: 
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends python: ``>=3.6``
   :depends taxonkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blastmining

   and update with::

      conda update blastmining

   or use the docker container::

      docker pull quay.io/biocontainers/blastmining:<tag>

   (see `blastmining/tags`_ for valid values for ``<tag>``)


.. |downloads_blastmining| image:: https://img.shields.io/conda/dn/bioconda/blastmining.svg?style=flat
   :target: https://anaconda.org/bioconda/blastmining
   :alt:   (downloads)
.. |docker_blastmining| image:: https://quay.io/repository/biocontainers/blastmining/status
   :target: https://quay.io/repository/biocontainers/blastmining
.. _`blastmining/tags`: https://quay.io/repository/biocontainers/blastmining?tab=tags


.. raw:: html

    <script>
        var package = "blastmining";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastmining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastmining/README.html