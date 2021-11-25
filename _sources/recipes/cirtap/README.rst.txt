:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cirtap'
.. highlight: bash

cirtap
======

.. conda:recipe:: cirtap
   :replaces_section_title:
   :noindex:

   A CLI to handle PATRIC data from the FTP

   :homepage: https://github.com/MGXlab/cirtap/
   :developer docs: https://github.com/MGXlab/cirtap
   :license: MIT
   :recipe: /`cirtap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cirtap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cirtap/meta.yaml>`_

   


.. conda:package:: cirtap

   |downloads_cirtap| |docker_cirtap|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends biopython: 
   :depends click: ``>=8.0``
   :depends ete3: 
   :depends pandas: ``>=1.1.4``
   :depends python: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cirtap

   and update with::

      conda update cirtap

   or use the docker container::

      docker pull quay.io/biocontainers/cirtap:<tag>

   (see `cirtap/tags`_ for valid values for ``<tag>``)


.. |downloads_cirtap| image:: https://img.shields.io/conda/dn/bioconda/cirtap.svg?style=flat
   :target: https://anaconda.org/bioconda/cirtap
   :alt:   (downloads)
.. |docker_cirtap| image:: https://quay.io/repository/biocontainers/cirtap/status
   :target: https://quay.io/repository/biocontainers/cirtap
.. _`cirtap/tags`: https://quay.io/repository/biocontainers/cirtap?tab=tags


.. raw:: html

    <script>
        var package = "cirtap";
        var versions = ["0.3.1","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cirtap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cirtap/README.html