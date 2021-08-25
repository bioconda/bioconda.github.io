:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dligand2'
.. highlight: bash

dligand2
========

.. conda:recipe:: dligand2
   :replaces_section_title:
   :noindex:

   DLIGAND2 is a knowledge\-based method to predict protein\-ligand binding affinity based on a distance\-scaled\, finite\, ideal\-gas reference \(DFIRE\) state.

   :homepage: https://github.com/sysu-yanglab/DLIGAND2
   :license: MIT / MIT
   :recipe: /`dligand2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dligand2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dligand2/meta.yaml>`_

   


.. conda:package:: dligand2

   |downloads_dligand2| |docker_dligand2|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dligand2

   and update with::

      conda update dligand2

   or use the docker container::

      docker pull quay.io/biocontainers/dligand2:<tag>

   (see `dligand2/tags`_ for valid values for ``<tag>``)


.. |downloads_dligand2| image:: https://img.shields.io/conda/dn/bioconda/dligand2.svg?style=flat
   :target: https://anaconda.org/bioconda/dligand2
   :alt:   (downloads)
.. |docker_dligand2| image:: https://quay.io/repository/biocontainers/dligand2/status
   :target: https://quay.io/repository/biocontainers/dligand2
.. _`dligand2/tags`: https://quay.io/repository/biocontainers/dligand2?tab=tags


.. raw:: html

    <script>
        var package = "dligand2";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dligand2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dligand2/README.html