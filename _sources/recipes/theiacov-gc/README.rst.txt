:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'theiacov-gc'
.. highlight: bash

theiacov-gc
===========

.. conda:recipe:: theiacov-gc
   :replaces_section_title:
   :noindex:

   Command\-line version of the TheiaCov genomic characterization workflow for SARS\-CoV\-2.

   :homepage: https://github.com/theiagen/public_health_viral_genomics
   :license: AGPL / AGPL-3.0
   :recipe: /`theiacov-gc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theiacov-gc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theiacov-gc/meta.yaml>`_

   


.. conda:package:: theiacov-gc

   |downloads_theiacov-gc| |docker_theiacov-gc|

   :versions:
      
      

      ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``

      

   
   :depends cromwell: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install theiacov-gc

   and update with::

      conda update theiacov-gc

   or use the docker container::

      docker pull quay.io/biocontainers/theiacov-gc:<tag>

   (see `theiacov-gc/tags`_ for valid values for ``<tag>``)


.. |downloads_theiacov-gc| image:: https://img.shields.io/conda/dn/bioconda/theiacov-gc.svg?style=flat
   :target: https://anaconda.org/bioconda/theiacov-gc
   :alt:   (downloads)
.. |docker_theiacov-gc| image:: https://quay.io/repository/biocontainers/theiacov-gc/status
   :target: https://quay.io/repository/biocontainers/theiacov-gc
.. _`theiacov-gc/tags`: https://quay.io/repository/biocontainers/theiacov-gc?tab=tags


.. raw:: html

    <script>
        var package = "theiacov-gc";
        var versions = ["2.3.0","2.2.0","2.1.2","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/theiacov-gc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/theiacov-gc/README.html