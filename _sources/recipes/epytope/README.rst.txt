:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epytope'
.. highlight: bash

epytope
=======

.. conda:recipe:: epytope
   :replaces_section_title:
   :noindex:

   A Framework for Epitope Detection and Vaccine Design

   :homepage: https://github.com/KohlbacherLab/epytope
   :license: BSD-3-Clause
   :recipe: /`epytope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope/meta.yaml>`_

   


.. conda:package:: epytope

   |downloads_epytope| |docker_epytope|

   :versions:
      
      

      ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends h5py: ``<=2.10.0``
   :depends keras: ``<=2.3.1``
   :depends mhcflurry: ``<=1.4.3``
   :depends mhcnuggets: 
   :depends np_utils: 
   :depends pandas: 
   :depends pymysql: 
   :depends pyomo: ``>=4.0``
   :depends python: 
   :depends pyvcf: 
   :depends requests: 
   :depends setuptools: ``<=57``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epytope

   and update with::

      conda update epytope

   or use the docker container::

      docker pull quay.io/biocontainers/epytope:<tag>

   (see `epytope/tags`_ for valid values for ``<tag>``)


.. |downloads_epytope| image:: https://img.shields.io/conda/dn/bioconda/epytope.svg?style=flat
   :target: https://anaconda.org/bioconda/epytope
   :alt:   (downloads)
.. |docker_epytope| image:: https://quay.io/repository/biocontainers/epytope/status
   :target: https://quay.io/repository/biocontainers/epytope
.. _`epytope/tags`: https://quay.io/repository/biocontainers/epytope?tab=tags


.. raw:: html

    <script>
        var package = "epytope";
        var versions = ["3.2.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epytope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epytope/README.html