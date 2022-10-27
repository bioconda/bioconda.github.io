:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampcombi'
.. highlight: bash

ampcombi
========

.. conda:recipe:: ampcombi
   :replaces_section_title:
   :noindex:

   A parsing tool to convert and summarise the outputs from multiple AMP detection tools.

   :homepage: https://github.com/Darcy220606/AMPcombi
   :developer docs: https://github.com/Darcy220606/AMPcombi/tree/dev
   :license: MIT / MIT
   :recipe: /`ampcombi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi/meta.yaml>`_

   


.. conda:package:: ampcombi

   |downloads_ampcombi| |docker_ampcombi|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends backports.tempfile: 
   :depends biopython: 
   :depends contextlib2: 
   :depends diamond: 
   :depends jsonschema: 
   :depends openpyxl: 
   :depends pandas: 
   :depends parsedatetime: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends subprocess32: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ampcombi

   and update with::

      conda update ampcombi

   or use the docker container::

      docker pull quay.io/biocontainers/ampcombi:<tag>

   (see `ampcombi/tags`_ for valid values for ``<tag>``)


.. |downloads_ampcombi| image:: https://img.shields.io/conda/dn/bioconda/ampcombi.svg?style=flat
   :target: https://anaconda.org/bioconda/ampcombi
   :alt:   (downloads)
.. |docker_ampcombi| image:: https://quay.io/repository/biocontainers/ampcombi/status
   :target: https://quay.io/repository/biocontainers/ampcombi
.. _`ampcombi/tags`: https://quay.io/repository/biocontainers/ampcombi?tab=tags


.. raw:: html

    <script>
        var package = "ampcombi";
        var versions = ["0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampcombi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampcombi/README.html