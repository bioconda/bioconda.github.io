:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agouti'
.. highlight: bash

agouti
======

.. conda:recipe:: agouti
   :replaces_section_title:
   :noindex:

   Annotation of Genomic and Transcriptomic Intervals

   :homepage: https://github.com/zywicki-lab/agouti
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`agouti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agouti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agouti/meta.yaml>`_

   


.. conda:package:: agouti

   |downloads_agouti| |docker_agouti|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends numpy: ``>=1.16``
   :depends pandas: 
   :depends python: ``>=3.7,<3.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agouti

   and update with::

      conda update agouti

   or use the docker container::

      docker pull quay.io/biocontainers/agouti:<tag>

   (see `agouti/tags`_ for valid values for ``<tag>``)


.. |downloads_agouti| image:: https://img.shields.io/conda/dn/bioconda/agouti.svg?style=flat
   :target: https://anaconda.org/bioconda/agouti
   :alt:   (downloads)
.. |docker_agouti| image:: https://quay.io/repository/biocontainers/agouti/status
   :target: https://quay.io/repository/biocontainers/agouti
.. _`agouti/tags`: https://quay.io/repository/biocontainers/agouti?tab=tags


.. raw:: html

    <script>
        var package = "agouti";
        var versions = ["1.0.3","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agouti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agouti/README.html