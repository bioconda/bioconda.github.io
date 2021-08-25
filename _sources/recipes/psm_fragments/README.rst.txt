:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psm_fragments'
.. highlight: bash

psm_fragments
=============

.. conda:recipe:: psm_fragments
   :replaces_section_title:
   :noindex:

   PSM validation against ion fragmentation 

   :homepage: https://github.com/galaxyproteomics/psm_fragments
   :license: MIT
   :recipe: /`psm_fragments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments/meta.yaml>`_

   


.. conda:package:: psm_fragments

   |downloads_psm_fragments| |docker_psm_fragments|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends lxml: 
   :depends numpy: 
   :depends plotly: 
   :depends pyteomics: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psm_fragments

   and update with::

      conda update psm_fragments

   or use the docker container::

      docker pull quay.io/biocontainers/psm_fragments:<tag>

   (see `psm_fragments/tags`_ for valid values for ``<tag>``)


.. |downloads_psm_fragments| image:: https://img.shields.io/conda/dn/bioconda/psm_fragments.svg?style=flat
   :target: https://anaconda.org/bioconda/psm_fragments
   :alt:   (downloads)
.. |docker_psm_fragments| image:: https://quay.io/repository/biocontainers/psm_fragments/status
   :target: https://quay.io/repository/biocontainers/psm_fragments
.. _`psm_fragments/tags`: https://quay.io/repository/biocontainers/psm_fragments?tab=tags


.. raw:: html

    <script>
        var package = "psm_fragments";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psm_fragments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psm_fragments/README.html