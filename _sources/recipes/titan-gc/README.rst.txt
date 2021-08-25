:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titan-gc'
.. highlight: bash

titan-gc
========

.. conda:recipe:: titan-gc
   :replaces_section_title:
   :noindex:

   Command\-line version of the Titan genomic characterization workflow for viral pathogens of concern.

   :homepage: https://github.com/theiagen/public_health_viral_genomics
   :license: AGPL / AGPL-3.0
   :recipe: /`titan-gc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc/meta.yaml>`_

   


.. conda:package:: titan-gc

   |downloads_titan-gc| |docker_titan-gc|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends cromwell: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install titan-gc

   and update with::

      conda update titan-gc

   or use the docker container::

      docker pull quay.io/biocontainers/titan-gc:<tag>

   (see `titan-gc/tags`_ for valid values for ``<tag>``)


.. |downloads_titan-gc| image:: https://img.shields.io/conda/dn/bioconda/titan-gc.svg?style=flat
   :target: https://anaconda.org/bioconda/titan-gc
   :alt:   (downloads)
.. |docker_titan-gc| image:: https://quay.io/repository/biocontainers/titan-gc/status
   :target: https://quay.io/repository/biocontainers/titan-gc
.. _`titan-gc/tags`: https://quay.io/repository/biocontainers/titan-gc?tab=tags


.. raw:: html

    <script>
        var package = "titan-gc";
        var versions = ["1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titan-gc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titan-gc/README.html