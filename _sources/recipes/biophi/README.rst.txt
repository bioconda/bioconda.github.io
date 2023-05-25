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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-0</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abnumber: ``0.3.2``
   :depends anarci: ``2020.04.23``
   :depends celery: 
   :depends click: ``>=7``
   :depends flask: ``>=2.1``
   :depends hmmer: ``>=3.1``
   :depends humanize: 
   :depends python: ``>=3.9``
   :depends redis-py: 
   :depends requests: 
   :depends sapiens: ``>=1.0.4``
   :depends sqlalchemy: ``<2``
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
        var versions = ["1.0.9","1.0.8","1.0.8","1.0.7","1.0.6"];
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