:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinvar-this'
.. highlight: bash

clinvar-this
============

.. conda:recipe:: clinvar-this
   :replaces_section_title:
   :noindex:

   ClinVar Submission API Made Easy

   :homepage: https://github.com/bihealth/clinvar-this
   :license: MIT / MIT
   :recipe: /`clinvar-this <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this/meta.yaml>`_

   


.. conda:package:: clinvar-this

   |downloads_clinvar-this| |docker_clinvar-this|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends attrs: 
   :depends cattrs: 
   :depends click: 
   :depends jsonschema: 
   :depends logzero: 
   :depends pysam: ``>=0.10.0``
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends requests: 
   :depends tabulate: 
   :depends toml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clinvar-this

   and update with::

      conda update clinvar-this

   or use the docker container::

      docker pull quay.io/biocontainers/clinvar-this:<tag>

   (see `clinvar-this/tags`_ for valid values for ``<tag>``)


.. |downloads_clinvar-this| image:: https://img.shields.io/conda/dn/bioconda/clinvar-this.svg?style=flat
   :target: https://anaconda.org/bioconda/clinvar-this
   :alt:   (downloads)
.. |docker_clinvar-this| image:: https://quay.io/repository/biocontainers/clinvar-this/status
   :target: https://quay.io/repository/biocontainers/clinvar-this
.. _`clinvar-this/tags`: https://quay.io/repository/biocontainers/clinvar-this?tab=tags


.. raw:: html

    <script>
        var package = "clinvar-this";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinvar-this/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinvar-this/README.html