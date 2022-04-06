:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naltorfs'
.. highlight: bash

naltorfs
========

.. conda:recipe:: naltorfs
   :replaces_section_title:
   :noindex:

   Nested Alternate Open Reading Frames \(nAlt\-ORFs\)

   :homepage: https://github.com/BlankenbergLab/nAltORFs
   :license: MIT / MIT
   :recipe: /`naltorfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naltorfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naltorfs/meta.yaml>`_

   


.. conda:package:: naltorfs

   |downloads_naltorfs| |docker_naltorfs|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``1.79``
   :depends python: ``>=3.8``
   :depends twobitreader: ``3.1.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install naltorfs

   and update with::

      conda update naltorfs

   or use the docker container::

      docker pull quay.io/biocontainers/naltorfs:<tag>

   (see `naltorfs/tags`_ for valid values for ``<tag>``)


.. |downloads_naltorfs| image:: https://img.shields.io/conda/dn/bioconda/naltorfs.svg?style=flat
   :target: https://anaconda.org/bioconda/naltorfs
   :alt:   (downloads)
.. |docker_naltorfs| image:: https://quay.io/repository/biocontainers/naltorfs/status
   :target: https://quay.io/repository/biocontainers/naltorfs
.. _`naltorfs/tags`: https://quay.io/repository/biocontainers/naltorfs?tab=tags


.. raw:: html

    <script>
        var package = "naltorfs";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naltorfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naltorfs/README.html