:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'serotypefinder'
.. highlight: bash

serotypefinder
==============

.. conda:recipe:: serotypefinder
   :replaces_section_title:
   :noindex:

   SerotypeFinder identifies the serotype in total or partial sequenced isolates of E. coli.

   :homepage: https://bitbucket.org/genomicepidemiology/serotypefinder
   :license: APACHE / Apache-2.0
   :recipe: /`serotypefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/serotypefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/serotypefinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/JCM.00008-1`

   


.. conda:package:: serotypefinder

   |downloads_serotypefinder| |docker_serotypefinder|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends biopython: ``1.73.*``
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``>=1.5.5``
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: ``>=0.7.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install serotypefinder

   and update with::

      conda update serotypefinder

   or use the docker container::

      docker pull quay.io/biocontainers/serotypefinder:<tag>

   (see `serotypefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_serotypefinder| image:: https://img.shields.io/conda/dn/bioconda/serotypefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/serotypefinder
   :alt:   (downloads)
.. |docker_serotypefinder| image:: https://quay.io/repository/biocontainers/serotypefinder/status
   :target: https://quay.io/repository/biocontainers/serotypefinder
.. _`serotypefinder/tags`: https://quay.io/repository/biocontainers/serotypefinder?tab=tags


.. raw:: html

    <script>
        var package = "serotypefinder";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/serotypefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/serotypefinder/README.html