:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapcoverage'
.. highlight: bash

soapcoverage
============

.. conda:recipe:: soapcoverage
   :replaces_section_title:
   :noindex:

   SOAPcoverarge can calculate sequencing coverage or physical coverage as well as duplication rate and details of specific block for each segments and whole genome by using SOAP\, BLAT\, BLAST\, BlastZ\, mum\- mer and MAQ aligement results with multi\-thread.

   :homepage: http://soap.genomics.org.cn/soapaligner.html
   :license: GPL
   :recipe: /`soapcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage/meta.yaml>`_

   


.. conda:package:: soapcoverage

   |downloads_soapcoverage| |docker_soapcoverage|

   :versions:
      
      

      ``2.7.7-0``

      

   
   :depends libgcc: 
   :depends zlib: ``1.2.11*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapcoverage

   and update with::

      conda update soapcoverage

   or use the docker container::

      docker pull quay.io/biocontainers/soapcoverage:<tag>

   (see `soapcoverage/tags`_ for valid values for ``<tag>``)


.. |downloads_soapcoverage| image:: https://img.shields.io/conda/dn/bioconda/soapcoverage.svg?style=flat
   :target: https://anaconda.org/bioconda/soapcoverage
   :alt:   (downloads)
.. |docker_soapcoverage| image:: https://quay.io/repository/biocontainers/soapcoverage/status
   :target: https://quay.io/repository/biocontainers/soapcoverage
.. _`soapcoverage/tags`: https://quay.io/repository/biocontainers/soapcoverage?tab=tags


.. raw:: html

    <script>
        var package = "soapcoverage";
        var versions = ["2.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapcoverage/README.html