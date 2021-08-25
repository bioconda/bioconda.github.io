:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biophi'
.. highlight: bash

biophi
======

.. conda:recipe:: biophi
   :replaces_section_title:
   :noindex:

   BioPhi open\-source antibody design platform

   :homepage: https://github.com/Merck/BioPhi
   :license: MIT / MIT
   :recipe: /`biophi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi/meta.yaml>`_

   


.. conda:package:: biophi

   |downloads_biophi| |docker_biophi|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends abnumber: ``0.2.7``
   :depends biopython: 
   :depends celery: 
   :depends click: ``>=7``
   :depends fairseq: ``0.10.2``
   :depends flask: 
   :depends humanize: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends redis: 
   :depends requests: 
   :depends sqlalchemy: 
   :depends tqdm: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biophi

   and update with::

      conda update biophi

   or use the docker container::

      docker pull quay.io/biocontainers/biophi:<tag>

   (see `biophi/tags`_ for valid values for ``<tag>``)


.. |downloads_biophi| image:: https://img.shields.io/conda/dn/bioconda/biophi.svg?style=flat
   :target: https://anaconda.org/bioconda/biophi
   :alt:   (downloads)
.. |docker_biophi| image:: https://quay.io/repository/biocontainers/biophi/status
   :target: https://quay.io/repository/biocontainers/biophi
.. _`biophi/tags`: https://quay.io/repository/biocontainers/biophi?tab=tags


.. raw:: html

    <script>
        var package = "biophi";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biophi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biophi/README.html