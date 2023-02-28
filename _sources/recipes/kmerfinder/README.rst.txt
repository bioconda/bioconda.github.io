:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmerfinder'
.. highlight: bash

kmerfinder
==========

.. conda:recipe:: kmerfinder
   :replaces_section_title:
   :noindex:

   Prediction of bacterial species using a fast K\-mer algorithm.

   :homepage: https://bitbucket.org/genomicepidemiology/kmerfinder
   :license: APACHE / APACHE-2.0
   :recipe: /`kmerfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder/meta.yaml>`_

   


.. conda:package:: kmerfinder

   |downloads_kmerfinder| |docker_kmerfinder|

   :versions:
      
      

      ``3.0.2-0``

      

   
   :depends kma: 
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmerfinder

   and update with::

      conda update kmerfinder

   or use the docker container::

      docker pull quay.io/biocontainers/kmerfinder:<tag>

   (see `kmerfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_kmerfinder| image:: https://img.shields.io/conda/dn/bioconda/kmerfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/kmerfinder
   :alt:   (downloads)
.. |docker_kmerfinder| image:: https://quay.io/repository/biocontainers/kmerfinder/status
   :target: https://quay.io/repository/biocontainers/kmerfinder
.. _`kmerfinder/tags`: https://quay.io/repository/biocontainers/kmerfinder?tab=tags


.. raw:: html

    <script>
        var package = "kmerfinder";
        var versions = ["3.0.2"];
    </script>





Notes
-----
KmerFinder requires a database that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerfinder/README.html