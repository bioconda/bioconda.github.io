:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidfinder'
.. highlight: bash

plasmidfinder
=============

.. conda:recipe:: plasmidfinder
   :replaces_section_title:
   :noindex:

   PlasmidFinder allows identification of plasmids in total or partial sequenced isolates of bacteria.

   :homepage: https://bitbucket.org/genomicepidemiology/plasmidfinder
   :license: APACHE / Apache-2.0
   :recipe: /`plasmidfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidfinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/AAC.02412-14`

   


.. conda:package:: plasmidfinder

   |downloads_plasmidfinder| |docker_plasmidfinder|

   :versions:
      
      

      ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends cgecore: 
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasmidfinder

   and update with::

      conda update plasmidfinder

   or use the docker container::

      docker pull quay.io/biocontainers/plasmidfinder:<tag>

   (see `plasmidfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidfinder| image:: https://img.shields.io/conda/dn/bioconda/plasmidfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidfinder
   :alt:   (downloads)
.. |docker_plasmidfinder| image:: https://quay.io/repository/biocontainers/plasmidfinder/status
   :target: https://quay.io/repository/biocontainers/plasmidfinder
.. _`plasmidfinder/tags`: https://quay.io/repository/biocontainers/plasmidfinder?tab=tags


.. raw:: html

    <script>
        var package = "plasmidfinder";
        var versions = ["2.1.1","2.1.1","2.1","2.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidfinder/README.html