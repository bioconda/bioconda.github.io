:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogclassifier'
.. highlight: bash

cogclassifier
=============

.. conda:recipe:: cogclassifier
   :replaces_section_title:
   :noindex:

   Classify prokaryote protein sequences into COG functional category

   :homepage: https://github.com/moshi4/COGclassifier/
   :license: MIT
   :recipe: /`cogclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier/meta.yaml>`_

   


.. conda:package:: cogclassifier

   |downloads_cogclassifier| |docker_cogclassifier|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends altair: ``>=4.2.0,<5.0.0``
   :depends pandas: ``>=1.4.1,<2.0.0``
   :depends python: ``>=3.6,<4.0``
   :depends requests: ``>=2.27.1,<3.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cogclassifier

   and update with::

      conda update cogclassifier

   or use the docker container::

      docker pull quay.io/biocontainers/cogclassifier:<tag>

   (see `cogclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_cogclassifier| image:: https://img.shields.io/conda/dn/bioconda/cogclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/cogclassifier
   :alt:   (downloads)
.. |docker_cogclassifier| image:: https://quay.io/repository/biocontainers/cogclassifier/status
   :target: https://quay.io/repository/biocontainers/cogclassifier
.. _`cogclassifier/tags`: https://quay.io/repository/biocontainers/cogclassifier?tab=tags


.. raw:: html

    <script>
        var package = "cogclassifier";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogclassifier/README.html