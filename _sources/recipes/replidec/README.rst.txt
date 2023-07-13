:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'replidec'
.. highlight: bash

replidec
========

.. conda:recipe:: replidec
   :replaces_section_title:
   :noindex:

   Replication Cycle Decipher for Phages

   :homepage: https://github.com/deng-lab/Replidec
   :license: MIT / MIT
   :recipe: /`replidec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec/meta.yaml>`_

   


.. conda:package:: replidec

   |downloads_replidec| |docker_replidec|

   :versions:
      
      

      ``0.3.1.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends hmmer: 
   :depends mmseqs2: 
   :depends numpy: ``>=1.23.1``
   :depends prodigal: 
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install replidec

   and update with::

      conda update replidec

   or use the docker container::

      docker pull quay.io/biocontainers/replidec:<tag>

   (see `replidec/tags`_ for valid values for ``<tag>``)


.. |downloads_replidec| image:: https://img.shields.io/conda/dn/bioconda/replidec.svg?style=flat
   :target: https://anaconda.org/bioconda/replidec
   :alt:   (downloads)
.. |docker_replidec| image:: https://quay.io/repository/biocontainers/replidec/status
   :target: https://quay.io/repository/biocontainers/replidec
.. _`replidec/tags`: https://quay.io/repository/biocontainers/replidec?tab=tags


.. raw:: html

    <script>
        var package = "replidec";
        var versions = ["0.3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/replidec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/replidec/README.html