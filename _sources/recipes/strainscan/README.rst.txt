:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainscan'
.. highlight: bash

strainscan
==========

.. conda:recipe:: strainscan
   :replaces_section_title:
   :noindex:

   One efficient and accurate strain\-level microbiome composition analysis tool based on reference genomes and k\-mers.

   :homepage: https://github.com/liaoherui/StrainScan
   :license: MIT / MIT
   :recipe: /`strainscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainscan/meta.yaml>`_

   


.. conda:package:: strainscan

   |downloads_strainscan| |docker_strainscan|

   :versions:
      
      

      ``1.0.10-0``,  ``1.0.3-0``

      

   
   :depends bidict: ``0.21.3``
   :depends biopython: ``1.74``
   :depends numpy: ``1.17.3``
   :depends pandas: ``1.0.1``
   :depends psutil: ``5.9.1``
   :depends python: ``3.7.3``
   :depends r-base: ``4.0.2``
   :depends scikit-learn: ``0.23.1``
   :depends scipy: ``1.3.1``
   :depends sibeliaz: ``1.2.2``
   :depends treelib: ``1.6.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainscan

   and update with::

      conda update strainscan

   or use the docker container::

      docker pull quay.io/biocontainers/strainscan:<tag>

   (see `strainscan/tags`_ for valid values for ``<tag>``)


.. |downloads_strainscan| image:: https://img.shields.io/conda/dn/bioconda/strainscan.svg?style=flat
   :target: https://anaconda.org/bioconda/strainscan
   :alt:   (downloads)
.. |docker_strainscan| image:: https://quay.io/repository/biocontainers/strainscan/status
   :target: https://quay.io/repository/biocontainers/strainscan
.. _`strainscan/tags`: https://quay.io/repository/biocontainers/strainscan?tab=tags


.. raw:: html

    <script>
        var package = "strainscan";
        var versions = ["1.0.10","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainscan/README.html