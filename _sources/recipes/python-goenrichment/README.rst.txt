:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-goenrichment'
.. highlight: bash

python-goenrichment
===================

.. conda:recipe:: python-goenrichment
   :replaces_section_title:
   :noindex:

   GO enrichment analysis from a list of gene names using a precomputed database

   :homepage: https://pypi.org/project/goenrichment/
   :license: PUBLIC-DOMAIN
   :recipe: /`python-goenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment/meta.yaml>`_

   


.. conda:package:: python-goenrichment

   |downloads_python-goenrichment| |docker_python-goenrichment|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``0.0.10a3-0``

      

   
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-goenrichment

   and update with::

      conda update python-goenrichment

   or use the docker container::

      docker pull quay.io/biocontainers/python-goenrichment:<tag>

   (see `python-goenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_python-goenrichment| image:: https://img.shields.io/conda/dn/bioconda/python-goenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/python-goenrichment
   :alt:   (downloads)
.. |docker_python-goenrichment| image:: https://quay.io/repository/biocontainers/python-goenrichment/status
   :target: https://quay.io/repository/biocontainers/python-goenrichment
.. _`python-goenrichment/tags`: https://quay.io/repository/biocontainers/python-goenrichment?tab=tags


.. raw:: html

    <script>
        var package = "python-goenrichment";
        var versions = ["1.0.3","1.0.2","0.0.10a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-goenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-goenrichment/README.html