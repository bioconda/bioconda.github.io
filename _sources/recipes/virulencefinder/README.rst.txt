:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virulencefinder'
.. highlight: bash

virulencefinder
===============

.. conda:recipe:: virulencefinder
   :replaces_section_title:
   :noindex:

   VirulenceFinder identifies virulence genes in total or partial sequenced isolates of bacteria

   :homepage: https://bitbucket.org/genomicepidemiology/virulencefinder
   :license: APACHE / Apache-2.0
   :recipe: /`virulencefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/JCM.03617-13`

   


.. conda:package:: virulencefinder

   |downloads_virulencefinder| |docker_virulencefinder|

   :versions:
      
      

      ``2.0.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends cgecore: 
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virulencefinder

   and update with::

      conda update virulencefinder

   or use the docker container::

      docker pull quay.io/biocontainers/virulencefinder:<tag>

   (see `virulencefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_virulencefinder| image:: https://img.shields.io/conda/dn/bioconda/virulencefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/virulencefinder
   :alt:   (downloads)
.. |docker_virulencefinder| image:: https://quay.io/repository/biocontainers/virulencefinder/status
   :target: https://quay.io/repository/biocontainers/virulencefinder
.. _`virulencefinder/tags`: https://quay.io/repository/biocontainers/virulencefinder?tab=tags


.. raw:: html

    <script>
        var package = "virulencefinder";
        var versions = ["2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virulencefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virulencefinder/README.html