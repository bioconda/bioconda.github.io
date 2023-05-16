:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sap'
.. highlight: bash

sap
===

.. conda:recipe:: sap
   :replaces_section_title:
   :noindex:

   Pairwise structure alignment via double dynamic programming

   :homepage: https://github.com/mathbio-nimr-mrc-ac-uk/SAP
   :license: GPL-3.0-only
   :recipe: /`sap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sap/meta.yaml>`_
   :links: doi: :doi:`10.1110/ps.8.3.654`

   


.. conda:package:: sap

   |downloads_sap| |docker_sap|

   :versions:
      
      

      ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sap

   and update with::

      conda update sap

   or use the docker container::

      docker pull quay.io/biocontainers/sap:<tag>

   (see `sap/tags`_ for valid values for ``<tag>``)


.. |downloads_sap| image:: https://img.shields.io/conda/dn/bioconda/sap.svg?style=flat
   :target: https://anaconda.org/bioconda/sap
   :alt:   (downloads)
.. |docker_sap| image:: https://quay.io/repository/biocontainers/sap/status
   :target: https://quay.io/repository/biocontainers/sap
.. _`sap/tags`: https://quay.io/repository/biocontainers/sap?tab=tags


.. raw:: html

    <script>
        var package = "sap";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sap/README.html