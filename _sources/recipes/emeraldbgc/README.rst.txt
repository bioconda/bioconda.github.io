:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emeraldbgc'
.. highlight: bash

emeraldbgc
==========

.. conda:recipe:: emeraldbgc
   :replaces_section_title:
   :noindex:

   SMBGC detection tool

   :homepage: https://github.com/Finn-Lab/emeraldBGC
   :license: Apache / Apache-2.0
   :recipe: /`emeraldbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc/meta.yaml>`_

   


.. conda:package:: emeraldbgc

   |downloads_emeraldbgc| |docker_emeraldbgc|

   :versions:
      
      

      ``0.2.4.1-0``,  ``0.2.3.1-0``,  ``0.2.3-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends joblib: ``>=1.0.1``
   :depends numpy: ``>=1.16,<1.20``
   :depends openjdk: ``>=11.0``
   :depends perl: ``>=5``
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends scikit-learn: ``0.24.*``
   :depends tensorflow: ``2.4.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emeraldbgc

   and update with::

      conda update emeraldbgc

   or use the docker container::

      docker pull quay.io/biocontainers/emeraldbgc:<tag>

   (see `emeraldbgc/tags`_ for valid values for ``<tag>``)


.. |downloads_emeraldbgc| image:: https://img.shields.io/conda/dn/bioconda/emeraldbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/emeraldbgc
   :alt:   (downloads)
.. |docker_emeraldbgc| image:: https://quay.io/repository/biocontainers/emeraldbgc/status
   :target: https://quay.io/repository/biocontainers/emeraldbgc
.. _`emeraldbgc/tags`: https://quay.io/repository/biocontainers/emeraldbgc?tab=tags


.. raw:: html

    <script>
        var package = "emeraldbgc";
        var versions = ["0.2.4.1","0.2.3.1","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emeraldbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emeraldbgc/README.html