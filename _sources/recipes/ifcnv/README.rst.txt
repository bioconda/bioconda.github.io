:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ifcnv'
.. highlight: bash

ifcnv
=====

.. conda:recipe:: ifcnv
   :replaces_section_title:
   :noindex:

   ifCNV\: a novel isolation\-forest\-based package to detect copy number variations from various NGS datasets.

   :homepage: https://github.com/SimCab-CHU/ifCNV
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ifcnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifcnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifcnv/meta.yaml>`_

   


.. conda:package:: ifcnv

   |downloads_ifcnv| |docker_ifcnv|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3``
   :depends plotly: ``>=5.4``
   :depends pybedtools: ``>=0.8.2``
   :depends python: 
   :depends scikit-learn: ``>=1.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ifcnv

   and update with::

      conda update ifcnv

   or use the docker container::

      docker pull quay.io/biocontainers/ifcnv:<tag>

   (see `ifcnv/tags`_ for valid values for ``<tag>``)


.. |downloads_ifcnv| image:: https://img.shields.io/conda/dn/bioconda/ifcnv.svg?style=flat
   :target: https://anaconda.org/bioconda/ifcnv
   :alt:   (downloads)
.. |docker_ifcnv| image:: https://quay.io/repository/biocontainers/ifcnv/status
   :target: https://quay.io/repository/biocontainers/ifcnv
.. _`ifcnv/tags`: https://quay.io/repository/biocontainers/ifcnv?tab=tags


.. raw:: html

    <script>
        var package = "ifcnv";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ifcnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ifcnv/README.html