:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybran'
.. highlight: bash

hybran
======

.. conda:recipe:: hybran
   :replaces_section_title:
   :noindex:

   Hybrid reference transfer and ab initio prokaryotic genome annotation

   :homepage: https://lpcdrp.gitlab.io/hybran
   :developer docs: https://gitlab.com/LPCDRP/hybran
   :license: GPLv3
   :recipe: /`hybran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybran/meta.yaml>`_

   


.. conda:package:: hybran

   |downloads_hybran| |docker_hybran|

   :versions:
      
      

      ``1.6-0``,  ``1.5.2-1``,  ``1.5.2-0``

      

   
   :depends biopython: ``>=1.80``
   :depends blast: 
   :depends cd-hit: 
   :depends diamond: 
   :depends dill: 
   :depends eggnog-mapper: 
   :depends emboss: 
   :depends entrez-direct: 
   :depends mcl: 
   :depends multiprocess: 
   :depends prokka: ``>=1.14``
   :depends python: ``>=3.9``
   :depends ratt: 
   :depends tbl2asn-forever: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hybran

   and update with::

      conda update hybran

   or use the docker container::

      docker pull quay.io/biocontainers/hybran:<tag>

   (see `hybran/tags`_ for valid values for ``<tag>``)


.. |downloads_hybran| image:: https://img.shields.io/conda/dn/bioconda/hybran.svg?style=flat
   :target: https://anaconda.org/bioconda/hybran
   :alt:   (downloads)
.. |docker_hybran| image:: https://quay.io/repository/biocontainers/hybran/status
   :target: https://quay.io/repository/biocontainers/hybran
.. _`hybran/tags`: https://quay.io/repository/biocontainers/hybran?tab=tags


.. raw:: html

    <script>
        var package = "hybran";
        var versions = ["1.6","1.5.2","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybran/README.html