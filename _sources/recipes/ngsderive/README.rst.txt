:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsderive'
.. highlight: bash

ngsderive
=========

.. conda:recipe:: ngsderive
   :replaces_section_title:
   :noindex:

   Backwards derive attributes from NGS data

   :homepage: https://github.com/claymcleod/ngsderive
   :license: MIT / MIT
   :recipe: /`ngsderive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive/meta.yaml>`_

   


.. conda:package:: ngsderive

   |downloads_ngsderive| |docker_ngsderive|

   :versions:
      
      

      ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends colorlog: ``>=6.6.0``
   :depends gtfparse: ``>=1.2.1``
   :depends pysam: ``>=0.18``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.8,<3.10``
   :depends rstr: ``>=3.0.0``
   :depends sortedcontainers: ``>=2.4.0``
   :depends tabix: ``>=1.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngsderive

   and update with::

      conda update ngsderive

   or use the docker container::

      docker pull quay.io/biocontainers/ngsderive:<tag>

   (see `ngsderive/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsderive| image:: https://img.shields.io/conda/dn/bioconda/ngsderive.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsderive
   :alt:   (downloads)
.. |docker_ngsderive| image:: https://quay.io/repository/biocontainers/ngsderive/status
   :target: https://quay.io/repository/biocontainers/ngsderive
.. _`ngsderive/tags`: https://quay.io/repository/biocontainers/ngsderive?tab=tags


.. raw:: html

    <script>
        var package = "ngsderive";
        var versions = ["2.3.1","2.2.0","2.2.0","2.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsderive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsderive/README.html